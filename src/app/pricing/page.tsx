import FAQSection from '@/components/faq-section'
import Footer from '@/components/Footer'
import FreeTrialCTA from '@/components/free-trial-cta'
import PricingSection from '@/components/pricingCard'
import PricingHeader from '@/components/pricingHeader'
import React from 'react'

function page() {
  return (
    <div>
        <PricingHeader/>
        <PricingSection />
        <FAQSection/>
        <FreeTrialCTA/>
        <Footer/>
    </div>
  )
}

export default page