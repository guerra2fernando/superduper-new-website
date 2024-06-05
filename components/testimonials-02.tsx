import Image from 'next/image'
import { StaticImageData } from 'next/image'
import Why01 from '@/public/images/why-icon-1.png'
import Why02 from '@/public/images/why-icon-2.png'
import Why03 from '@/public/images/why-icon-3.png'

interface Item {
  img: StaticImageData
  name: string
  quote: string
}

export default function Testimonials02() {

  const items: Item[] = [
    {
      img: Why01,
      name: 'Faster development of more robust AI apps',
      quote: 'Implement even the most complex custom AI workflows on your database with a declarative interface and integrations with major AI frameworks, model hubs and APIs. Move fast across your data backends and AI components using our abstractions, building blocks and templates while still being able to drill down to any layer of customization, and producing high-quality code. Bring in any piece of Python to enhance your applications. Build your own reusable building blocks for future applications. ',
    },
    {
      img: Why02,
      name: 'Streamlined state-of the art deployment ',
      quote: 'Export your AI apps and workflows and deploy them with all needed components in minutes. A single scalable deployment including hosting your own models in house, training/fine-tuning, and streaming inference -  facilitating state-of-the art deployment and distributed compute technologies for maximum scalability and efficiency. No setup of repetitive infrastructure and setup of ETL/data pipelines with every new application.',
    },
    {
      img: Why03,
      name: 'The one platform for all enterprise AI',
      quote: 'Stop switching between tools and environments when tackling different AI use-cases. Build your AI stack with a single, open platform on your own, existing infrastructure, turning your databases into your artifact store and metadata store. Implement any enterprise AI use-case and streamline your AI workflows, achieving maximum efficiency and truly own your AI. ',
    },
  ]

  return (
    <section className="relative mt-20">
      {/* Radial gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 pt-10" aria-hidden="true">
        <div className="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 w-1/3 aspect-square">
          <div className="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-50"></div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
        
          {/* Grid */}
          <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 max-w-xs mx-auto lg:max-w-none">
            {items.map((item, index) => ( 
              <div key={index} className="relative flex flex-col justify-between p-5 h-full before:absolute before:inset-0 before:-z-10 before:border before:border-slate-300 before:bg-slate-700 before:opacity-10 before:rounded-xl">
                <div className="mb-4">
                  <div className="font-bold text-slate-100 text-lg mb-4">{item.name}</div>
                  <p className="text-sm text-slate-400 mb-4">{item.quote}</p>
                </div>
                <div className="mt-auto">
                  <Image className="shrink-0" src={item.img} alt={item.name} width={200} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}