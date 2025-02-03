import { ContactCard } from "./contact-card";

export function ContactInfo() {
    return (
      <section className="w-full max-w-[1440px] h-[814px] bg-white mx-auto">
        <div className="flex flex-col items-center py-28 gap-20 max-w-[1050px] mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col items-center max-w-[633px]">
            <div className="flex flex-col items-center gap-2.5 w-[625px] max-w-full">
              <h6 className="font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-center text-[#252B42]">
                VISIT OUR OFFICE
              </h6>
              <h2 className="font-montserrat font-bold text-4xl leading-[50px] tracking-[0.2px] text-center text-[#252B42] max-w-[531px]">
                We help small businesses with big ideas
              </h2>
            </div>
          </div>
  
          {/* Cards */}
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-[985px]">
            <ContactCard icon="phone" emails={["georgia.young@example.com", "georgia.young@ple.com"]} />
            <ContactCard variant="dark" icon="location" emails={["georgia.young@example.com", "georgia.young@ple.com"]} />
            <ContactCard icon="mail" emails={["georgia.young@example.com", "georgia.young@ple.com"]} />
          </div>
        </div>
      </section>
    )
  }
  
  