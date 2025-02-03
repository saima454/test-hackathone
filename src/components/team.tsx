import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Instagram, Twitter } from 'lucide-react'

interface TeamMember {
  image: string
  name: string
  role: string
}

const teamMembers: TeamMember[] = [
  {
    image: "/media.png",
    name: "Username",
    role: "Profession"
  },
  {
    image: "/media2.png",
    name: "Username",
    role: "Profession"
  },
  {
    image: "/media3.png",
    name: "Username",
    role: "Profession"
  }
]

export default function TeamSection() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto ">
        <div className="flex flex-col items-center mb-28">
          <h2 className="text-4xl font-bold text-[#252B42] mb-2.5 font-montserrat">
            Meet Our Team
          </h2>
          <p className="text-[#737373] text-sm text-center max-w-[469px] font-montserrat">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border-none shadow-none">
              <div className="relative w-full h-[231px] mb-0">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="flex flex-col items-center p-8 space-y-2.5">
                <h5 className="font-bold text-base text-[#252B42] font-montserrat">
                  {member.name}
                </h5>
                <h6 className="font-bold text-sm text-[#737373] font-montserrat">
                  {member.role}
                </h6>
                <div className="flex items-center gap-5 mt-2">
                  <a href="#" className="text-[#23A6F0] hover:opacity-80">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-[#23A6F0] hover:opacity-80">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-[#23A6F0] hover:opacity-80">
                    <Twitter className="w-6 h-6" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

