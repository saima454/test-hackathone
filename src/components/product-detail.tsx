'use client'

import * as React from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Heart, ShoppingCart, Eye, Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function ProductDetail() {
  const [activeImage, setActiveImage] = React.useState(0)
  const images = [
    '/placeholder.svg?height=450&width=506',
    '/placeholder.svg?height=450&width=506'
  ]

  const thumbnails = [
    '/placeholder.svg?height=75&width=100',
    '/placeholder.svg?height=75&width=100'
  ]

  return (
    <div className="container mx-auto px-4 md:px-6 xl:px-0 py-12">
      <div className="max-w-[1050px] mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-[30px]">
          {/* Left Column - Image Carousel */}
          <div className="w-full md:w-[506px] h-auto md:h-[550px]">
            <div className="relative w-full md:w-[506px] h-[450px] rounded-[5px]">
              {/* Main Image */}
              <div className="relative w-full md:w-[506px] h-[450px]">
                <Image 
                  src={images[activeImage]}
                  alt="Product image"
                  fill
                  className="object-cover rounded-[5px]"
                  priority
                />
                {/* Navigation Arrows */}
                <button 
                  onClick={() => setActiveImage(prev => prev > 0 ? prev - 1 : images.length - 1)}
                  className="absolute left-10 top-1/2 -translate-y-1/2 z-10 w-6 h-[44.47px] flex items-center justify-center"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-[44.47px] text-white" />
                </button>
                <button 
                  onClick={() => setActiveImage(prev => prev < images.length - 1 ? prev + 1 : 0)}
                  className="absolute right-10 top-1/2 -translate-y-1/2 z-10 w-6 h-[44.47px] flex items-center justify-center"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-[44.47px] text-white" />
                </button>
              </div>
              {/* Thumbnails */}
              <div className="absolute bottom-0 left-0 flex gap-[19px] w-[219px] h-[75px]">
                {thumbnails.map((thumb, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={cn(
                      "relative w-[100px] h-[75px]",
                      activeImage !== index && "opacity-50"
                    )}
                  >
                    <Image 
                      src={thumb}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Product Details */}
          <div className="w-full md:w-[510px] min-h-[471px] relative pt-[11px] px-4 md:px-6">
            <h4 className="font-montserrat font-normal text-xl leading-[30px] tracking-[0.2px] text-[#252B42]">
              Floating Phone
            </h4>

            {/* Rating */}
            <div className="mt-[42px] flex items-center gap-2.5">
              <div className="flex gap-[5px]">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className="w-[22.01px] h-[22.01px] text-[#F3CD03] fill-[#F3CD03]"
                  />
                ))}
              </div>
              <h6 className="font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]">
                10 Reviews
              </h6>
            </div>

            {/* Price */}
            <h5 className="mt-5 font-montserrat font-bold text-2xl leading-8 tracking-[0.1px] text-[#252B42]">
              $1,139.33
            </h5>

            {/* Availability */}
            <div className="mt-[5px] flex items-center gap-[5px]">
              <h6 className="font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]">
                Availability :
              </h6>
              <h6 className="font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-[#23A6F0]">
                In Stock
              </h6>
            </div>

            {/* Description */}
            <p className="mt-[51px] w-full md:w-[464px] font-montserrat font-normal text-sm leading-5 tracking-[0.2px] text-[#858585]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
            </p>

            {/* Divider */}
            <hr className="mt-[27px] w-full md:w-[445px] border-[#BDBDBD]" />

            {/* Color Options */}
            <div className="mt-[29px] flex items-center gap-2.5">
              <div className="w-[30px] h-[30px] rounded-full bg-[#23A6F0]" />
              <div className="w-[30px] h-[30px] rounded-full bg-[#2DC071]" />
              <div className="w-[30px] h-[30px] rounded-full bg-[#E77C40]" />
              <div className="w-[30px] h-[30px] rounded-full bg-[#252B42]" />
            </div>

            {/* Action Buttons */}
            <div className="mt-[67px] flex flex-wrap gap-2.5">
              <Button 
                className="h-11 w-[148px] px-5 bg-[#23A6F0] hover:bg-[#23A6F0]/90 font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-white"
              >
                Select Options
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="w-10 h-10 rounded-full border-[#E8E8E8]"
              >
                <Heart className="w-5 h-5 text-[#252B42]" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="w-10 h-10 rounded-full border-[#E8E8E8]"
              >
                <ShoppingCart className="w-5 h-5 text-[#252B42]" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="w-10 h-10 rounded-full border-[#E8E8E8]"
              >
                <Eye className="w-5 h-5 text-[#252B42]" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

