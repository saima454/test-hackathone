import TeamSection from '@/components/team'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import PartnersSection from '@/components/partner'

import { WorkWithUs } from '@/components/work-with-us'

import PricingHeader from '@/components/pricingHeader'
import Footer from '@/components/Footer'

function AboutPage() {
  return (
    <div>
 <PricingHeader/>
        
        <div className='w-[1440px] h-[729px] relative'>
            <Image src={'/aboutImage.png'} alt='' width={1440} height={729}/>
            <div className='w-[599px] h-[321px]'>
            <div className="container mx-auto px-4">
        <div className="absolute top-40 left-0 flex flex-col items-start max-w-[599px] gap-9 p-8">
          <h5 className="text-base font-bold text-[#252B42] tracking-[0.1px] font-montserrat">
            ABOUT COMPANY
          </h5>
          
          <h1 className="text-[58px] font-bold text-[#252B42] leading-[80px] tracking-[0.2px] font-montserrat max-w-[542px]">
            ABOUT US
          </h1>
          
          <h4 className="text-xl font-normal text-[#737373] leading-[30px] tracking-[0.2px] font-montserrat max-w-[376px]">
            We know how large objects will act, but things on a small scale
          </h4>
          
          <div className="flex">
            <Button 
              className="h-[52px] px-10 py-[15px] bg-[#23A6F0] hover:bg-[#1a7ab0] text-white font-bold text-sm tracking-[0.2px] rounded-[5px] font-montserrat"
            >
              Get Quote Now
            </Button>
          </div>
        </div>
      </div>
                
            </div>

        </div>
       
       
       
        <div className='w-[1440px] '>
            <div className='w-[1050px] h-[764px] px-[195px]'>
                <div className='w-[989px] h-[540px] py-[112px] px-[30px]'>
                    <Image src='/video card.png' alt='video' width={989} height={764}/>
                </div>
            </div>
        </div>


       <TeamSection/>
       <div className='w-[1440px] h-[479px] flex items-center justify-center  bg-[#FAFAFA] mb-40'>
        <div className='w-[1050px]  mb-[80px]'>
            <div className='w-[864px] h-[120px]  mb-[24px]'> 
               <div className='mb-[24px] flex flex-col gap-[30px] justify-center items-center'>
               <div className='w-[496px] h-[50px] font-bold text-[40px]'><h1>Big Companies Are Here</h1></div>
                <div className='w-[574px] h-[40px] text-center'>
                  <p>Problems trying to resolve the conflict between</p> 
                  <p>the two major realms of Classical physics: Newtonian mechanics </p> 

                </div>
               </div>
                < PartnersSection />
            </div>
           

        </div>
       </div>


      <WorkWithUs/>
      <Footer/>
       

    </div>

    
  )
}

export default AboutPage;