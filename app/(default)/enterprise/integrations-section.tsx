import Image from 'next/image'
import Particles from '@/components/particles'
import Illustration from '@/public/images/page-illustration.svg'
import Illustration02 from '@/public/images/page-illustration-02.svg'
import IntegrationsCarousel from '@/components/integrations-carousel'

export default function IntegrationsSection() {
  return (
    <section className="relative">

      {/* Illustration 02 */}
      <div className="md:block absolute left-1/2 -translate-x-1/2 bottom-0 -mb-16 blur-2xl opacity-90 pointer-events-none -z-10" aria-hidden="true">
        <Image src={Illustration02} className="max-w-none" width={1440} height={427} alt="Page Illustration 02" />
      </div>

      {/* Opacity layer */}
      <div className="absolute inset-0 bg-slate-900 opacity-60 -z-10" aria-hidden="true"></div>

      {/* Radial gradient */}
      <div className="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-[800px] aspect-square" aria-hidden="true">
        <div className="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-30"></div>
        <div className="absolute w-64 h-64 translate-z-0 bg-purple-400 rounded-full blur-[80px] opacity-70"></div>
      </div>

      {/* Particles animation */}
      <Particles className="absolute inset-0 h-96 -z-10" quantity={15} />

      {/* Illustration */}
      <div className="md:block absolute left-1/2 -translate-x-1/2 -mt-16 blur-2xl opacity-90 pointer-events-none -z-10" aria-hidden="true">
        <Image src={Illustration} className="max-w-none" width={1440} height={427} alt="Page Illustration" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 md:pt-40">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-20">
            <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-3">Enterprise</div>
            <h1 className="h1 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">Your AI stack on your existing infrastructure</h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-slate-400">Superduper’s state-of-the art deployment system enables enterprises to unlock the value of their data with the latest AI while and comprehensive managed services, Superduper Enterprise ensures high performance, reliability, and security - enabling </p>
            </div>
            <div className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-10" data-aos="fade-down" data-aos-delay="400">
              <div>
                <a className="btn text-slate-200 hover:text-white bg-slate-900 bg-opacity-25 hover:bg-opacity-30 w-full transition duration-150 ease-in-out" href="#0">
                  <svg className="shrink-0 fill-slate-300 mr-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                    <path d="m1.999 0 1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 0l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 10l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM6.292 7.586l2.646-2.647L11.06 7.06 8.413 9.707zM0 13.878l5.586-5.586 2.122 2.121L2.12 16z" />
                  </svg>
                  <span>Get in touch</span>
                </a>
              </div>
            </div>
          </div>

          <IntegrationsCarousel />

        </div>
      </div>
    </section>
  )
}
