import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { type LucideIcon } from 'lucide-react'
import Link from 'next/link'

interface Project {
  name: string
  url: string
  description: string
  image: string
}

interface CareerStage {
  title: string
  icon: LucideIcon
  description: string
  projects: Project[]
}

export function VisualCareerCard({ stage }: { stage: CareerStage }) {
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader className="flex flex-row items-center space-x-4">
        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
          <stage.icon className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <CardTitle>{stage.title}</CardTitle>
          <CardDescription>{stage.description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <h3 className="font-semibold mb-4">Key Projects:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {stage.projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <Image
                src={project.image}
                alt={project.name}
                width={300}
                height={200}
                className="w-full h-40 object-cover"
              />
              <CardContent className="p-4">
                <Link href={project.url} className="text-primary hover:underline font-medium">
                  {project.name}
                </Link>
                <p className="text-sm text-muted-foreground mt-2">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

