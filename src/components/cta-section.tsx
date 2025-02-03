import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="w-full max-w-[1440px] h-[348px] bg-white mx-auto">
      <div className="relative flex flex-col items-center py-20 gap-24 max-w-[1050px] mx-auto px-4">
        {/* Arrow Decoration */}
        <div
          className="absolute w-[72.56px] h-[21.84px] left-[686.29px] -top-[6.1px] border-[4px] border-[#23A6F0] hidden lg:block"
          style={{ transform: "rotate(45.56deg)" }}
        />

        <div className="flex flex-col items-center gap-9 w-full max-w-[607px]">
          <div className="flex flex-col items-center gap-4 w-full max-w-[272px]">
            <h6 className="font-montserrat font-bold text-base leading-6 tracking-[0.1px] text-center text-[#252B42] w-[239px]">
              WE CAN&apos;T WAIT TO MEET YOU
            </h6>
            <h2 className="font-montserrat font-bold text-4xl md:text-[58px] leading-[1.2] md:leading-[80px] tracking-[0.2px] text-center text-[#252B42] w-full max-w-[272px]">
              Let&apos;s Talk
            </h2>
            <div className="flex gap-2.5">
              <Button className="h-[52px] px-10 bg-[#23A6F0] hover:bg-[#1a8dd0] text-white font-montserrat font-bold text-sm leading-[22px] tracking-[0.2px] w-[186px]">
                Try it free now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

