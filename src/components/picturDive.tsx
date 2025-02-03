import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function PictureDive() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between min-h-[682px] gap-8">
          {/* Image Column */}
          <div className="w-full md:w-1/2 relative h-[500px] md:h-[682px]">
            <div className="relative w-full h-full">
              <Image
                src="/div.png"
                alt="Couple in winter clothing"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="w-full md:w-1/2 max-w-[573px] flex flex-col gap-8 px-4 md:px-0">
            <h5 className="font-bold text-base text-[#BDBDBD] tracking-[0.1px] font-montserrat">SUMMER 2020</h5>

            <h1 className="font-bold text-4xl leading-[50px] text-[#252B42] tracking-[0.2px] font-montserrat max-w-[375px]">
              Part of the Neural Universe
            </h1>

            <h4 className="font-normal text-xl leading-[30px] text-[#737373] tracking-[0.2px] font-montserrat max-w-[376px]">
              We know how large objects will act, but things on a small scale.
            </h4>

            <div className="flex flex-wrap gap-4">
              <Button className="h-[52px] px-10 bg-[#2DC071] hover:bg-[#23a65c] text-white font-bold text-sm tracking-[0.2px]">
                BUY NOW
              </Button>
              <Button
                variant="outline"
                className="h-[52px] px-10 border-[#2DC071] text-[#2DC071] hover:bg-[#2DC071] hover:text-white font-bold text-sm tracking-[0.2px]"
              >
                READ MORE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

