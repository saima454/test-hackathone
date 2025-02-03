import Image from "next/image"
import { Button } from "@/components/ui/button"

export function WorkWithUs() {
  return (
    <section className="relative w-full max-w-[1440px] h-[636px] mx-auto overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#2A7CC7]" />

      {/* Container */}
      <div className="relative h-full max-w-[1050px] mx-auto px-4 py-28">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-[225px]">
          {/* Content Column */}
          <div className="flex flex-col items-start gap-6 w-full md:w-[438px]">
            <h5 className="font-montserrat font-bold text-base leading-6 tracking-[0.1px] text-white">WORK WITH US</h5>
            <h2 className="font-montserrat font-bold text-4xl md:text-[40px] leading-[50px] tracking-[0.2px] text-white">
              Now Let&apos;s grow Yours
            </h2>
            <p className="font-montserrat font-normal text-sm leading-5 tracking-[0.2px] text-white max-w-[440px]">
              The gradual accumulation of information about atomic and small-scale behavior during the first quarter of
              the 20th
            </p>
            <Button
              variant="outline"
              className="h-[52px] px-10 border-[#FAFAFA] text-[#FAFAFA] hover:bg-white hover:text-[#2A7CC7] transition-colors"
            >
              Button
            </Button>
          </div>

          {/* Image Column */}
          <div className="relative w-full md:w-[548px] h-[412px]">
            <Image
              src="/girlDive.png"
              alt="Woman in coral sweater"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 548px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

