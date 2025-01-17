'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { VerticalTimelineCard } from './components/vertical-timeline-card'
import { Github, Linkedin, Instagram, Mail, Phone } from 'lucide-react'
import { XIcon } from './components/x-icon'
import { MediumIcon } from './components/medium-icon'
import { SubstackIcon } from './components/substack-icon'
import { DiscoveryModule } from './components/discovery-module'

export default function Home() {
  const [isAdminMode, setIsAdminMode] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsAdminMode(pathname === '/adm')
  }, [pathname])

  const [careerStages, setCareerStages] = useState([
    {
      id: 'education',
      title: "Education",
      description: "",
      projects: [
        { name: "Master of Science", url: "#", description: "Nanotechnological Processes and Protocols for Reducing Nosocomial Infections (#Statistics #Engineering #Research #Protocols #Nanotechnology #Healthcare) – 1st place - University of São Paulo (USP), the top university in Latin America." },
        { name: "Bachelor's in Design for global business", url: "#", description: "Authorial Innovation Methodology - 2nd place - Santa Marcelina University, the best Design University in Latin America." },
        { name: "Extension Programs", url: "#", description: "Bunka (Japan), IED (Spain), and Zaha Hadid's Coding Team" },
        { name: "Mentors", url: "#", description: "Mochary Method (CEO coach of OpenAI, Coinbase, Brex); Wes Bush (Creator of product led growth); Chris Saad (ex-Uber growth)" }
      ]
    },
    {
      id: '1',
      title: "Entrepreneurship & Business Consulting",
      description: "",
      projects: [
        { name: "VC Scout (A16z & Bain)", url: "", description: "Enabled OpenBabylon to raise from A16z and Bain Capital Ventures. OpenBabylon customize LLMs for underrepresented languages." },
        { name: "WhitelabelAI", url: "https://whitelabel.ai/", description: "I worked as an AI NLP researcher, enhancing the software's reasoning capabilities, and as a Consultant supporting a strategic pivot that converted the first 25 enterprise customers and secured $117,000 in ARR." },
        { name: "Good.inc (formerly Visto.bio)", url: "https://good.inc/", description: "Founded a CPG company that generates $1.5M/year with a 30% profit margin, leveraging a patent co-developed with a UC San Diego researcher." },
        { name: "Financial Turnaround Consulting", description: "Provided independent consultancy services, supporting companies in financial restructuring across diverse industries." },
        { name: "Cloud Stores", url: "https://youtu.be/OuR552j1gto?si=lylh1VfyQhK4fXV6&t=90", description: "Developed a self-service autonomous brick-and-mortar store powered by RFID, IoT, and computer vision, which was featured in Vice Magazine." }
      ]
    },
    {
      id: '2',
      title: "Marketing, Growth & Partnership",
      description: "",
      projects: [
        { name: "Reforge", url: "https://www.reforge.com/profiles/renan-serrano", description: "Authored articles and frameworks on AI implementation, reverse go-to-market strategy and a persona heatmap." },
        { name: "Innovation Partnerships", url: "https://renanserrano.com/", description: "Led technology research projects for major companies like Marina Abramovic Institute, Wired Magazine, Sky, Absolut, Adidas, Fila, New Balance, Oakley, and Nike. Being considered by RedBull the Hacker of Fashion" },
        { name: "Wearable Hackathon", url: "https://www.zdnet.com/article/c-a-brazil-to-host-wearables-hackathon/", description: "Organized the biggest wearable hackathon in Latin America." },
        { name: "Teaching & Speaking", url: "https://www.youtube.com/watch?v=-9NWYlQrXqY", description: "Served as a professor and TEDx speaker, sharing insights on innovation and technology." }
      ]
    },
    {
      id: '3',
      title: "Product Management in Deep-tech",
      description: "",
      projects: [
        { name: "Microbiological Research", url: "#", description: "Leading the development of patents to treat acne and recurrent vulvovaginal candidiasis." },
        { name: "University of Ghent, Guelph, Ufabc", url: "https://youtu.be/Y3VJYslM_eg?si=T5PaHLIGJjQbZgbf", description: "The mission to extract the microbiome of an isolated Yanomami indigenous population, with the potential to offer solutions for the prevention of diseases like cancer, took years to be planned. However, it faced the risk of cancellation due to the complex local bureaucracy. I took charge of the operation in the Amazon, solving logistical challenges, recruiting and managing the team, overseeing the necessary resources, and ensuring the proper structure for the researchers’ arrival. I was also responsible for the safe storage of samples and the execution of the export process for biological material, ensuring compliance with all legal and regulatory requirements." },
        { name: "Singularity University", url: "https://www.linkedin.com/posts/mike-halsall_announcing-the-top-5-of-the-pandemic-challenge-activity-6660447487318343680-QDMR/", description: "Developed an award-winning solution to prevent COVID-19." },
        { name: "Low-Cost PCR", url: "https://vistobio.my.canva.site/good", description: "Led a project to commercialize a Nature-published research paper, securing funding from the government and a major diagnostic laboratory." },
        { name: "Transparent Conductive Textile Fibers", url: "https://cargocollective.com/renanserrano/dye-io", description: "Led a team of four researchers from concept to final product, developing cutting-edge conductive textile fibers for smart fabrics." },
        {
          name: "World's First Machine for Recycling Mixed-Yarn Textiles",
          url: "https://redesfibra.com",
          secondUrl: "https://norte.art.br/work/olympikus-a-camisa-mais-vitoriosa/",
          description: "Open-source technology for recycling mixed-yarn fabrics, including those with spandex (elastane). This award-winning solution is already adopted by industry leaders like New Balance, Lycra, H&M, and Olympikus."
        }
      ]
    },
    {
      id: '4',
      title: "Full-stack AI engineering",
      description: "",
      projects: [
        { name: "Clipboard history Chrome extension with AI search", url: "https://eu.visto.bio/chrome-extension", description: "Created a Chrome extension that saves all my clipboards, auto-pastes them, and includes a search bar to semantically search for old clips using edge functions." },
        { name: "Supabase Row Level Security Policies AI Tester", url: "https://www.npmjs.com/package/supabase-ai-rls-tests-generator", description: "Independently created a package for testing Supabase row-level security policies with AI. It have around 2k organic downloads NPM." },
        { name: "Software for Ukranian Army", url: "https://x.com/Andercot/status/1861925597993460107", description: "Served as Product Manager, identifying the key challenges of the Ukrainian army and translating them into effective solutions. Led a team of 4 developers using Replit, Restack, and OpenBabylon to deploy a working prototype in less than 12 hours." },
        { name: "AutoMac", url: "https://x.com/AlexReibman/status/1860133413338120410", description: "Developed an app that allows non-coders to use Claude Computer Use, control their computers, and create apps effortlessly." },
        { name: "Youakin", url: "https://www.youakin.com/", description: "Co-built an AI-powered platform for scaling partnership management, with high-profile customers in the tech industry." },
        { name: "Good.inc", url: "https://portal.good.inc/", description: "Independently built a subscription software adapted for brazilian consumer package goods market." }
      ]
    }
  ])

  const handleSave = async (newStages) => {
    setCareerStages(newStages)
    // Here you would typically send the data to your backend
    // For example:
    // await fetch('/api/save-career-stages', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(newStages)
    // })
    console.log('Saved new stages:', newStages)
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="pt-20 pb-10 text-center space-y-4">
        <h1 className="text-4xl font-bold">Renan Serrano</h1>
        <p className="text-lg text-muted-foreground">I'm Italian, born and raised in Brazil, living in San Francisco</p>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
      #Growth #Thinkering #Product #AI #Engineering #Deeptech
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://github.com/renantrendt" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/renanserrano" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://x.com/trendt" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <XIcon className="w-6 h-6" />
          </a>
          <a href="https://substack.com/@renanserrano" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <SubstackIcon className="w-6 h-6" />
          </a>
          <a href="https://instagram.com/renanserrano" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="https://medium.com/@renanserrano" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <MediumIcon className="w-6 h-6" />
          </a>
          <a href="tel:+16504416511" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Phone className="w-6 h-6" />
          </a>
          <a href="https://wa.me/16504416511" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </a>
          <a href="mailto:renan@renanserrano.com.br" className="text-muted-foreground hover:text-foreground transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </header>

      <main className="py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <DiscoveryModule careerData={careerStages} />
          <VerticalTimelineCard 
            initialStages={careerStages} 
            onSave={handleSave}
            isAdminMode={isAdminMode}
          />
        </div>
      </main>
      <footer className="text-center text-gray-500 text-sm py-4 mt-8">
        Made in SF using V0, Vercel, Next.js, Windsurf and Claude
      </footer>
    </div>
  )
}
