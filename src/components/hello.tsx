import Image from 'next/image'
import React from 'react'

function About () {
  return (
    <div className='w-[1440px] h-[175px]'>
        

       <Image src={"/About.png"} alt=''layout='fill'objectFit='cover'/>

    </div>
  )
}

export default About