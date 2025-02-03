import { ContactHero } from '@/components/contact-hero'
import { ContactInfo } from '@/components/contact-info'
import { CTASection } from '@/components/cta-section'
import Footer from '@/components/Footer'

import PricingHeader from '@/components/pricingHeader'
import React from 'react'

function ContactPage() {
  return (
    <div>
      <PricingHeader/>
      <ContactHero/>
      <ContactInfo />
      <CTASection/>
      <Footer/>
    </div>
  )
}

export default ContactPage