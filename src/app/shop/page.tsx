


import AboutCard from '@/components/productCard'
import Footer from '@/components/Footer'
import HeaderAbout from '@/components/headerAbout'
import HeaderDown from '@/components/HeaderDown'

import HeroAbout from '@/components/HeroAbout'

import React from 'react'

function Page() {
  return (
    <div>
        <HeaderAbout/>
        <HeroAbout/>
        <HeaderDown/>
        <AboutCard/>
       
        
        
        <Footer/>
    </div>
  )
}

export default Page