import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin } from "lucide-react"

interface ContactCardProps {
  variant?: "default" | "dark"
  icon: "phone" | "location" | "mail"
  emails: string[]
}

export function ContactCard({ variant = "default", icon, emails }: ContactCardProps) {
  const bgColor = variant === "dark" ? "bg-[#252B42]" : "bg-white"
  const textColor = variant === "dark" ? "text-white" : "text-[#252B42]"
  const height = variant === "dark" ? "h-[403px]" : "h-[343px]"
  const padding = variant === "dark" ? "py-20" : "py-[50px]"

  const Icon = {
    phone: Phone,
    location: MapPin,
    mail: Mail,
  }[icon]

  return (
    <div className={`flex flex-col items-center ${padding} px-10 gap-[15px] w-[328px] ${height} ${bgColor}`}>
      <div className="w-[72px] h-[72px]">
        <Icon className="w-full h-full text-[#23A6F0]" />
      </div>
      <div className="w-[216px] h-12 flex flex-col items-center">
        {emails.map((email, index) => (
          <h6
            key={index}
            className={`font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-center ${textColor}`}
          >
            {email}
          </h6>
        ))}
      </div>
      <h5 className={`font-montserrat font-bold text-base leading-6 tracking-[0.1px] text-center ${textColor}`}>
        Get Support
      </h5>
      <Button
        variant="outline"
        className="h-[54px] px-9 rounded-[37px] border-[#23A6F0] text-[#23A6F0] font-montserrat font-bold text-sm leading-6 tracking-[0.2px]"
      >
        Submit Request
      </Button>
    </div>
  )
}

