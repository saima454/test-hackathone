import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FreeTrialCTA() {
  return (
    <section className="w-full max-w-[1440px] min-h-[582px] bg-white mx-auto px-4">
      <div className="flex flex-col items-center py-20 md:py-40 gap-12 md:gap-24 w-full max-w-[1050px] mx-auto">
        <div className="flex flex-col items-center gap-6 md:gap-9 w-full max-w-[607px]">
          <div className="flex flex-col items-center gap-6 md:gap-[30px] w-full max-w-[547px] px-4">
            <h2 className="w-full max-w-[547px] font-montserrat font-bold text-2xl md:text-[40px] leading-tight md:leading-[50px] text-center tracking-[0.2px] text-[#252B42]">
              Start your 14 days free trial
            </h2>

            <p className="w-full max-w-[411px] font-montserrat font-normal text-sm leading-5 text-center tracking-[0.2px] text-[#737373] px-4">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.
            </p>

            <div className="w-full max-w-[186px]">
              <Button className="w-full h-[52px] bg-[#23A6F0] hover:bg-[#1a7ab0] font-montserrat font-bold text-sm leading-[22px] tracking-[0.2px]">
                Try it free now
              </Button>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-[34px] p-2.5">
              <Twitter className="w-6 h-6 md:w-[30px] md:h-[24.49px] text-[#55ACEE]" />
              <Facebook className="w-6 h-6 md:w-[30px] md:h-[30px] text-[#395185]" />
              <Instagram className="w-6 h-6 md:w-[30px] md:h-[30px]" />
              <Linkedin className="w-6 h-6 md:w-[30px] md:h-[29.88px] text-[#0A66C2]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

