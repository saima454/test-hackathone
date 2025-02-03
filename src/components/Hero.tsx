import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import React from 'react';

async function Hero() {

  const res = await client.fetch("*[_type == 'landingPage'][0].sections[1]{'image': image.asset->url}")

 const {image} =  res
  
  return (
    <div className="w-full h-screen relative overflow-hidden md:h-[75vh] lg:h-[100vh]">
      <Image
        src={image}
        alt="girl"
        layout="fill"
        objectFit="cover"
        priority
        className="object-center"
      />
    </div>
  );
}

export default Hero;
