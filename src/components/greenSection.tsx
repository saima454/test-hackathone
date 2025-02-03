import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function GreenSection() {
  return (
    <div className="relative w-[1440px] h-[709px]">
      <div className="absolute w-[1440px] h-[711px] left-1/2 -translate-x-1/2 top-0 bg-[#23856D]">
        <div className="absolute w-[1036px] h-[711px] left-1/2 -translate-x-1/2 py-28 flex flex-col gap-20">
          <div className="flex gap-[30px] w-[1049px] h-[599px]">
            {/* Content Column */}
            <div className="flex flex-col gap-[30px] w-[509px] h-[432px] pt-[60px]">
              <h5 className="w-[154px] h-[30px] font-montserrat font-normal text-[20px] leading-[30px] tracking-[0.2px] text-white">
                SUMMER 2020
              </h5>

              <h1 className="w-[509px] h-[160px] font-montserrat font-bold text-[58px] leading-[80px] tracking-[0.2px] text-white">
                Vita Classic Product
              </h1>

              <p className="w-[341px] h-[40px] font-montserrat font-normal text-[14px] leading-[20px] tracking-[0.2px] text-white">
                We know how large objects will act, We know how are objects will act, We know
              </p>

              <div className="flex items-center gap-[34px] w-[295px] h-[52px]">
                <span className="w-[77px] h-[32px] font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] text-white text-center">
                  $16.48
                </span>
                <Button className="w-[184px] h-[52px] px-10 bg-[#2DC071] hover:bg-[#23a65c] text-white font-montserrat font-bold text-[14px] leading-[22px] tracking-[0.2px]">
                  ADD TO CART
                </Button>
              </div>
            </div>

            {/* Image Column */}
            <div className="flex flex-col items-center w-[510px] h-[685px]">
              <div className="relative w-[443px] h-[685px]">
                <Image
                  src="/green.png"
                  alt="Product showcase"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

