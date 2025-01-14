'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ChevronDown, ChevronUp, Edit, Save, ExternalLink } from 'lucide-react'
import Link from 'next/link'

interface Project {
  name: string
  url: string
  secondUrl?: string
  description: string
}

interface CareerStage {
  id: string
  title: string
  description: string
  projects: Project[]
}

export function VerticalTimelineCard({ 
  initialStages, 
  onSave, 
  isAdminMode 
}: { 
  initialStages: CareerStage[], 
  onSave: (stages: CareerStage[]) => void,
  isAdminMode: boolean
}) {
  const [stages, setStages] = useState(initialStages)
  const [expandedStages, setExpandedStages] = useState<Set<string>>(new Set())
  const [editingStage, setEditingStage] = useState<string | null>(null)

  const toggleExpanded = (stageId: string) => {
    setExpandedStages(prev => {
      const newSet = new Set(prev)
      if (newSet.has(stageId)) {
        newSet.delete(stageId)
      } else {
        newSet.add(stageId)
      }
      return newSet
    })
  }

  const handleSave = (index: number) => {
    setEditingStage(null)
    onSave(stages)
  }

  const updateStage = (index: number, field: keyof CareerStage, value: string) => {
    const newStages = [...stages]
    newStages[index] = { ...newStages[index], [field]: value }
    setStages(newStages)
  }

  const updateProject = (stageIndex: number, projectIndex: number, field: keyof Project, value: string) => {
    const newStages = [...stages]
    newStages[stageIndex].projects[projectIndex] = { ...newStages[stageIndex].projects[projectIndex], [field]: value }
    setStages(newStages)
  }


  return (
    <div>
      {stages.map((stage, index) => (
        <Card key={stage.id} className="w-full mb-8">
            <CardHeader 
              className="cursor-pointer"
              onClick={() => editingStage !== stage.id && toggleExpanded(stage.id)}
            >
              <div className="flex justify-between items-center">
                <div className="flex-grow">
                  {editingStage === stage.id ? (
                    <div className="space-y-2">
                      <Input 
                        value={stage.title}
                        onChange={(e) => updateStage(index, 'title', e.target.value)}
                        className="text-xl font-semibold"
                      />
                      <Textarea 
                        value={stage.description}
                        onChange={(e) => updateStage(index, 'description', e.target.value)}
                        className="text-sm text-muted-foreground"
                      />
                    </div>
                  ) : (
                    <>
                      <CardTitle className="text-xl font-semibold mb-1">{stage.title}</CardTitle>
                      <CardDescription className="text-sm text-muted-foreground">{stage.description}</CardDescription>
                    </>
                  )}
                </div>
                {isAdminMode && (
                  <div className="flex items-center space-x-2">
                    {editingStage === stage.id ? (
                      <Button size="sm" onClick={() => handleSave(index)}>
                        <Save className="h-4 w-4" />
                      </Button>
                    ) : (
                      <Button size="sm" onClick={() => setEditingStage(stage.id)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                )}
                <div className="text-muted-foreground ml-2">
                  {expandedStages.has(stage.id) ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </div>
              </div>
            </CardHeader>
            <AnimatePresence>
              {expandedStages.has(stage.id) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <CardContent className="pt-0">
                    <div className="grid gap-4">
                      {stage.projects.map((project, projectIndex) => (
                        <Card key={projectIndex} className="bg-accent">
                          {project.url && project.url !== '#' && stage.id !== 'education' ? (
                            <div 
                              onClick={() => {
                                window.open(project.url, '_blank')
                                if (project.secondUrl) {
                                  window.open(project.secondUrl, '_blank')
                                }
                              }}
                              className="block hover:opacity-80 transition-opacity cursor-pointer"
                            >
                              <CardHeader className="p-4">
                                <div className="flex justify-between items-start">
                                  <div className="flex-grow">
                                    <CardTitle className="text-lg font-medium mb-1 flex items-center">
                                      {project.name}
                                      <ExternalLink className="h-4 w-4 ml-2 inline-block" />
                                    </CardTitle>
                                    <CardDescription className="text-sm">{project.description}</CardDescription>
                                  </div>
                                </div>
                              </CardHeader>
                            </div>
                          ) : (
                            <CardHeader className="p-4">
                              <div className="flex justify-between items-start">
                                <div className="flex-grow">
                                  <CardTitle className="text-lg font-medium mb-1">{project.name}</CardTitle>
                                  <CardDescription className="text-sm">{project.description}</CardDescription>
                                </div>
                              </div>
                            </CardHeader>
                          )}
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </motion.div>
              )}
            </AnimatePresence>
          </Card>
      ))}
    </div>
  )
}

