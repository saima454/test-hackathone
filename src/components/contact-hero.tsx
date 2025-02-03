import Image from "next/image"
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

export function ContactHero() {
  return (
    <section className="relative w-full max-w-[1440px] h-[882px] mx-auto bg-white overflow-hidden">
     
      {/* Main Content Container */}
      <div className=" max-w-[1050px] mx-auto pt-[216px] px-4 flex ">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-[30px]">
       
          {/* Left Column */}
          <div className="flex flex-col items-start gap-[35px] w-full md:w-[1050px]">
            <h5 className="font-montserrat font-bold text-base leading-6 tracking-[0.1px] text-[#252B42]">
              CONTACT US
            </h5>
            <h1 className="font-montserrat font-bold text-2xl md:text-[58px] leading-[1.2] md:leading-[80px] tracking-[0.2px] text-[#252B42] max-w-[378px]">
              Get in touch today!
            </h1>
            <p className="font-montserrat text-lg md:text-xl leading-[30px] tracking-[0.2px] text-[#737373] max-w-[376px]">
              We know how large objects will act, but things on a small scale
            </p>

            {/* Contact Numbers */}
            <div className="space-y-5">
              <h3 className="font-montserrat font-bold text-2xl leading-8 tracking-[0.1px] text-[#252B42]">
                Phone ; +451 215 215
              </h3>
              <h3 className="font-montserrat font-bold text-2xl leading-8 tracking-[0.1px] text-[#252B42]">
                Fax : +451 215 215
              </h3>
            </div>

            {/* Social Media */}
            <div className="flex gap-[34px] p-[10px]">
              <Link href="#" className="text-[#252B42] hover:text-[#23A6F0] transition-colors">
                <Twitter className="w-[30px] h-[30px]" />
              </Link>
              <Link href="#" className="text-[#252B42] hover:text-[#23A6F0] transition-colors">
                <Facebook className="w-[30px] h-[30px]" />
              </Link>
              <Link href="#" className="text-[#252B42] hover:text-[#23A6F0] transition-colors">
                <Instagram className="w-[30px] h-[30px]" />
              </Link>
              <Link href="#" className="text-[#252B42] hover:text-[#23A6F0] transition-colors">
                <Linkedin className="w-[30px] h-[30px]" />
              </Link>
            </div>
          </div>
          <Image src={'/contact_image.png'} alt='' width={1440} height={882}/>
         
        </div>
       
      </div>
    </section>
  )
}

