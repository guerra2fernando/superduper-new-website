export const metadata = {
  title: 'Home - SuperDuper',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Clients from '@/components/clients'
import Features06 from '@/components/features-06'
import Loop2 from '@/components/features-03'

import Testimonials02 from '@/components/testimonials-02'

import DatabasesSec from '@/components/databases'

import IntegrationsSec from '@/components/integrations'
import TestimonialsCarousel from '@/components/testimonials-carousel'
import Features04 from '@/components/features-04'
import Pricing from './pricing-section'
import Testimonials from '@/components/testimonials'
import Cta from '@/components/cta'
import MediaTabs from '@/components/mediatab'

export default function Home() {
  return (
    <>
      <Hero />
      <Features06 />
      <Loop2 />
      <DatabasesSec />
      
      <Testimonials02 />
      
      <IntegrationsSec />
      <TestimonialsCarousel />
      <MediaTabs />
      <Cta />
    </>
  )
}
