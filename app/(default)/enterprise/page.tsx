export const metadata = {
  title: 'Integrations - Stellar',
  description: 'Page description',
}

import IntegrationsSection from './integrations-section'
import IntegrationsList from './integrations-list'
import MediaTabs2 from '@/components/mediatab2'

export default function Integrations() {
  return (
    <>
      <IntegrationsSection />
      <MediaTabs2 />
    </>
  )
}
