import Image from "next/image"

export default function PartnersSection() {
    const partners = [
      {
        image: "/Ist.png",
        width: 103,
        height: 34,
        className: "w-[103px] h-[34px]"
      },
      {
        image: "/2nd.png",
        width: 83,
        height: 59,
        className: "w-[83px] h-[59px]"
      },
      {
        image: "/3rd.png",
        width: 102,
        height: 75,
        className: "w-[102px] h-[75px]"
      },
      {
        image: "/4th.png",
        width: 103,
        height: 42,
        className: "w-[103px] h-[42px]"
      },
      {
        image: "/5th.png",
        width: 104,
        height: 62,
        className: "w-[104px] h-[62px]"
      },
      {
        image: "/6th.png",
        width: 76,
        height: 72,
        className: "w-[76px] h-[72px]"
      }
    ]
  
    return (
      <section className="w-[1050px] px-[195px] mx-auto bg-white">
        <div className=" mx-auto ">
          <div className="flex flex-row justify-center items-center gap-[30px] md:gap-[30px] py-[50px] ">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="flex items-center justify-center w-[151px]"
              >
                <div 
                  className={`${partner.className} relative`}
                >
                  
                  <Image
                    src={partner.image}
                    alt={`${partner.image} logo`}
                    width={partner.width}
                    height={partner.height}
                    className="w-full h-full object-contain filter grayscale opacity-70"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  