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
        { name: "Coaches", url: "#", description: "Mochary Method (CEO coach of OpenAI, Coinbase, Brex... Coach: Nancy Xu); Wes Bush (Product led growth – group coaching); Chris Saad (ex-Uber growth)" }
      ]
    },
    {
      id: '1',
      title: "Entrepreneurship & Business Consulting",
      description: "",
      projects: [
        { name: "VC Scout (A16z & Bain)", url: "", description: "Enabled OpenBabylon to raise from A16z and Bain Capital Ventures. OpenBabylon customize LLMs for underrepresented languages." },
        { name: "WhitelabelAI", url: "https://whitelabel.ai/", description: "I played two different roles: Customer Success Manager and AI researcher. In the first role, I helped design a strategic pivot that converted the first 25 enterprise B2B SaaS customers, securing $117,000 in ARR. In the second role, I researched and tested SOTA papers to enhance the software's reasoning capabilities." },
        { name: "Good.inc (formerly Visto.bio)", url: "https://for.good.inc/", description: "Founded a CPG company in the longevity space, by discovering that the root of body odor and some hormone imbalance are cause by deodorants, we could patent a solution that helps people live healthier by treating their clothes and at the same time reduce environmental impact by reducing their washing frequency. The company generates $1.5M/year with a 30% profit margin, leveraging a patent co-developed with a UC San Diego researcher." },
        { name: "Financial Turnaround Consulting", description: "Provided independent consultancy services, supporting companies in financial restructuring across diverse industries." },
        { name: "Trendt", url: "https://trendt.co", description: "A multi-award-winning designer brand focused on developing new materials." }
      ]
    },
    {
      id: '2',
      title: "Product engineering",
      description: "",
      projects: [
        { name: "Small Language Model for Yanomami Tribe", url: "https://huggingface.co/renanserrano/yanomami-finetuning", description: "Developing a chatGPT-like app that operates offline on smartphones to assist researchers in communicating with remote indigenous tribes in the Amazon." },
        { name: "AI dataset generator for Finetunning", url: "https://www.npmjs.com/package/ai-dataset-generator", description: "An open-source NPM package to help developers create AI datasets for finetunning models." },
        { name: "Wordware.ai Signals", url: "https://wordware-demo.renanserrano.com.br/", description: "I developed the strategy, logic, architecture, design and code of a working prototype for an internal customer success tool for Wordware.ai. The goal was to scale their customer success management operations for B2B enterprise customers. This platform helps fine-tune their ideal customer profile, leverage network effects, track customer sentiment, and cross-reference their usage data and real-time support tickets to drive customer engagement, retention, and account expansion." },
        { name: "Clipboard history Chrome extension with AI search", url: "https://eu.visto.bio/chrome-extension", description: "Created a Chrome extension that saves all my clipboards, auto-pastes them, and includes a search bar to semantically search for old clips using edge functions. It's working in alpha phase." },
        { name: "Supabase Row Level Security Policies AI Tester", url: "https://www.npmjs.com/package/supabase-ai-rls-tests-generator", description: "Independently created a package for testing Supabase row-level security policies with AI. It have around 2k organic downloads NPM." },
        { name: "Youakin", url: "https://www.youakin.com/", description: "Co-built a platform for scaling partnership management." },
        { name: "For Good.inc", url: "https://for.good.inc", description: "Built an end-to-end platform for new customers to try the product for free in Brazil and the USA. The platform includes front-end and back-end development, as well as verification with government APIs, BigQuery, Supabase, Brazilian postal addresses, and 3PL. Also I engineered the product formulation and the patent." },
        { name: "Software for Ukranian Army", url: "https://x.com/Andercot/status/1861925597993460107", description: "Served as Product Manager, identifying the key challenges of the Ukrainian army and translating them into effective solutions. Led a team of 4 developers using Replit, Restack, and OpenBabylon to deploy a working prototype in less than 12 hours." },
        { name: "AutoMac", url: "https://x.com/AlexReibman/status/1860133413338120410", description: "Developed an app that allows non-coders to use Claude Computer Use, control their computers, and create apps effortlessly." },
        { name: "Solana recurring payments", url: "#", description: "Got 3rd place at Solana Blinks hackthon by building a recurring payments app integrated with Shopify." },
        { name: "Cloud Stores", url: "https://youtu.be/OuR552j1gto?si=lylh1VfyQhK4fXV6&t=90", description: "Developed a self-service autonomous brick-and-mortar store powered by RFID, IoT, and computer vision, which was featured in Vice Magazine." }
      ]
    },
    {
      id: '3',
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
      id: '4',
      title: "Product Management & Operations in Deep-tech",
      description: "",
      projects: [
        { name: "Patent in Nanotechnology", url: "https://patents.google.com/patent/US20230348819A1/", description: "Patented of a natural formulation that inhibits microorganism growth." },
        { name: "Singularity University", url: "https://www.linkedin.com/posts/mike-halsall_announcing-the-top-5-of-the-pandemic-challenge-activity-6660447487318343680-QDMR/", description: "4th place at the pandemic challenge, I developed a solution to prevent COVID-19." },
        { name: "Microbiological Research", url: "#", description: "Leading the development of patents to treat recurrent vulvovaginal candidiasis." },
        { name: "Low-Cost PCR", url: "https://vistobio.my.canva.site/good", description: "Led a project to commercialize a Nature-published research paper, securing funding from the government and a major diagnostic laboratory." },
        { name: "University of Ghent, Guelph, Ufabc", url: "https://youtu.be/Y3VJYslM_eg?si=T5PaHLIGJjQbZgbf", description: "The mission to extract the microbiome of an isolated Yanomami indigenous population, with the potential to offer solutions for the prevention of diseases like cancer, took years to be planned. However, it faced the risk of cancellation due to the complex local bureaucracy. I took charge of the operation in the Amazon, solving logistical challenges, recruiting and managing the team, overseeing the necessary resources, and ensuring the proper structure for the researchers’ arrival. I was also responsible for the safe storage of samples and the execution of the export process for biological material, ensuring compliance with all legal and regulatory requirements." },
        { name: "Transparent Conductive Textile Fibers", url: "https://cargocollective.com/renanserrano/dye-io", description: "Led a team of four researchers from concept to final product, developing cutting-edge conductive textile fibers for smart fabrics." },
        {
          name: "World's First Machine for Recycling Mixed-Yarn Textiles",
          url: "https://redesfibra.com",
          secondUrl: "https://norte.art.br/work/olympikus-a-camisa-mais-vitoriosa/",
          description: "Open-source technology for recycling mixed-yarn fabrics, including those with spandex (elastane). This award-winning solution is already adopted by industry leaders like New Balance, Lycra, H&M, and Olympikus."
        }
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
      <header className="pt-20 pb-10 text-center space-y-4 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold">Renan Serrano</h1>
        <p className="text-lg text-muted-foreground">Italian, born in Brazil,<br />living in San Francisco.</p>
        <p className="text-xl text-muted-foreground">
          #Growth #Thinkering #Product #AI #Engineering #Deeptech
        </p>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mt-4">
          <a href="https://github.com/renantrendt?tab=overview" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a href="https://huggingface.co/renanserrano" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <svg fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.781 3.277c2.997 1.704 4.844 4.851 4.844 8.258 0 .995-.155 1.955-.443 2.857a1.332 1.332 0 011.125.4 1.41 1.41 0 01.2 1.723c.204.165.352.385.428.632l.017.062c.06.222.12.69-.2 1.166.244.37.279.836.093 1.236-.255.57-.893 1.018-2.128 1.5l-.202.078-.131.048c-.478.173-.89.295-1.061.345l-.086.024c-.89.243-1.808.375-2.732.394-1.32 0-2.3-.36-2.923-1.067a9.852 9.852 0 01-3.18.018C9.778 21.647 8.802 22 7.494 22a11.249 11.249 0 01-2.541-.343l-.221-.06-.273-.08a16.574 16.574 0 01-1.175-.405c-1.237-.483-1.875-.93-2.13-1.501-.186-.4-.151-.867.093-1.236a1.42 1.42 0 01-.2-1.166c.069-.273.226-.516.447-.694a1.41 1.41 0 01.2-1.722c.233-.248.557-.391.917-.407l.078-.001a9.385 9.385 0 01-.44-2.85c0-3.407 1.847-6.554 4.844-8.258a9.822 9.822 0 019.687 0zM4.188 14.758c.125.687 2.357 2.35 2.14 2.707-.19.315-.796-.239-.948-.386l-.041-.04-.168-.147c-.561-.479-2.304-1.9-2.74-1.432-.43.46.119.859 1.055 1.42l.784.467.136.083c1.045.643 1.12.84.95 1.113-.188.295-3.07-2.1-3.34-1.083-.27 1.011 2.942 1.304 2.744 2.006-.2.7-2.265-1.324-2.685-.537-.425.79 2.913 1.718 2.94 1.725l.16.04.175.042c1.227.284 3.565.65 4.435-.604.673-.973.64-1.709-.248-2.61l-.057-.057c-.945-.928-1.495-2.288-1.495-2.288l-.017-.058-.025-.072c-.082-.22-.284-.639-.63-.584-.46.073-.798 1.21.12 1.933l.05.038c.977.721-.195 1.21-.573.534l-.058-.104-.143-.25c-.463-.799-1.282-2.111-1.739-2.397-.532-.332-.907-.148-.782.541zm14.842-.541c-.533.335-1.563 2.074-1.94 2.751a.613.613 0 01-.687.302.436.436 0 01-.176-.098.303.303 0 01-.049-.06l-.014-.028-.008-.02-.007-.019-.003-.013-.003-.017a.289.289 0 01-.004-.048c0-.12.071-.266.25-.427.026-.024.054-.047.084-.07l.047-.036c.022-.016.043-.032.063-.049.883-.71.573-1.81.131-1.917l-.031-.006-.056-.004a.368.368 0 00-.062.006l-.028.005-.042.014-.039.017-.028.015-.028.019-.036.027-.023.02c-.173.158-.273.428-.31.542l-.016.054s-.53 1.309-1.439 2.234l-.054.054c-.365.358-.596.69-.702 1.018-.143.437-.066.868.21 1.353.055.097.117.195.187.296.882 1.275 3.282.876 4.494.59l.286-.07.25-.074c.276-.084.736-.233 1.2-.42l.188-.077.065-.028.064-.028.124-.056.081-.038c.529-.252.964-.543.994-.827l.001-.036a.299.299 0 00-.037-.139c-.094-.176-.271-.212-.491-.168l-.045.01c-.044.01-.09.024-.136.04l-.097.035-.054.022c-.559.23-1.238.705-1.607.745h.006a.452.452 0 01-.05.003h-.024l-.024-.003-.023-.005c-.068-.016-.116-.06-.14-.142a.22.22 0 01-.005-.1c.062-.345.958-.595 1.713-.91l.066-.028c.528-.224.97-.483.985-.832v-.04a.47.47 0 00-.016-.098c-.048-.18-.175-.251-.36-.251-.785 0-2.55 1.36-2.92 1.36-.025 0-.048-.007-.058-.024a.6.6 0 01-.046-.088c-.1-.238.068-.462 1.06-1.066l.209-.126c.538-.32 1.01-.588 1.341-.831.29-.212.475-.406.503-.6l.003-.028c.008-.113-.038-.227-.147-.344a.266.266 0 00-.07-.054l-.034-.015-.013-.005a.403.403 0 00-.13-.02c-.162 0-.369.07-.595.18-.637.313-1.431.952-1.826 1.285l-.249.215-.033.033c-.08.078-.288.27-.493.386l-.071.037-.041.019a.535.535 0 01-.122.036h.005a.346.346 0 01-.031.003l.01-.001-.013.001c-.079.005-.145-.021-.19-.095a.113.113 0 01-.014-.065c.027-.465 2.034-1.991 2.152-2.642l.009-.048c.1-.65-.271-.817-.791-.493zM11.938 2.984c-4.798 0-8.688 3.829-8.688 8.55 0 .692.083 1.364.24 2.008l.008-.009c.252-.298.612-.46 1.017-.46.355.008.699.117.993.312.22.14.465.384.715.694.261-.372.69-.598 1.15-.605.852 0 1.367.728 1.562 1.383l.047.105.06.127c.192.396.595 1.139 1.143 1.68 1.06 1.04 1.324 2.115.8 3.266a8.865 8.865 0 002.024-.014c-.505-1.12-.26-2.17.74-3.186l.066-.066c.695-.684 1.157-1.69 1.252-1.912.195-.655.708-1.383 1.56-1.383.46.007.889.233 1.15.605.25-.31.495-.553.718-.694a1.87 1.87 0 01.99-.312c.357 0 .682.126.925.36.14-.61.215-1.245.215-1.898 0-4.722-3.89-8.55-8.687-8.55zm1.857 8.926l.439-.212c.553-.264.89-.383.89.152 0 1.093-.771 3.208-3.155 3.262h-.184c-2.325-.052-3.116-2.06-3.156-3.175l-.001-.087c0-1.107 1.452.586 3.25.586.716 0 1.379-.272 1.917-.526zm4.017-3.143c.45 0 .813.358.813.8 0 .441-.364.8-.813.8a.806.806 0 01-.812-.8c0-.442.364-.8.812-.8zm-11.624 0c.448 0 .812.358.812.8 0 .441-.364.8-.812.8a.806.806 0 01-.813-.8c0-.442.364-.8.813-.8zm7.79-.841c.32-.384.846-.54 1.33-.394.483.146.83.564.878 1.06.048.495-.212.97-.659 1.203-.322.168-.447-.477-.767-.585l.002-.003c-.287-.098-.772.362-.925.079a1.215 1.215 0 01.14-1.36zm-4.323 0c.322.384.377.92.14 1.36-.152.283-.64-.177-.925-.079l.003.003c-.108.036-.194.134-.273.24l-.118.165c-.11.15-.22.262-.377.18a1.226 1.226 0 01-.658-1.204c.048-.495.395-.913.878-1.059a1.262 1.262 0 011.33.394z"></path>
            </svg>
          </a>
          <a href="https://linkedin.com/in/renanserrano" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a href="https://x.com/trendt" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <XIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a href="https://substack.com/@renanserrano" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <SubstackIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a href="https://instagram.com/renanserrano" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a href="https://medium.com/@renanserrano" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <MediumIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a href="tel:+16504416511" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a href="https://wa.me/16504416511" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </a>
          <a href="mailto:renan@renanserrano.com.br" className="text-muted-foreground hover:text-foreground transition-colors">
            <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
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
      <footer className="text-center text-gray-500 text-sm pb-10 pt-0 mt-8">
      <a href='https://github.com/renantrendt/portifolio-renan'>Renan Serrano 2025© – this layout is open source, click here to clone this repository.</a>
      </footer>
    </div>
  )
}
