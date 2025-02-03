import { ChevronRight } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    id: "1",
    question: "the quick fox jumps over the lazy dog",
    answer:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
  },
  {
    id: "2",
    question: "the quick fox jumps over the lazy dog",
    answer:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
  },
  {
    id: "3",
    question: "the quick fox jumps over the lazy dog",
    answer:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
  },
  {
    id: "4",
    question: "the quick fox jumps over the lazy dog",
    answer:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
  },
  {
    id: "5",
    question: "the quick fox jumps over the lazy dog",
    answer:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
  },
  {
    id: "6",
    question: "the quick fox jumps over the lazy dog",
    answer:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
  },
]

export default function FAQSection() {
  return (
    <section className="w-full max-w-[1440px] min-h-[1037px] bg-white mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center py-12 sm:py-16 lg:py-20 gap-8 sm:gap-12 lg:gap-[50px] w-full max-w-[1056px] mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center w-full max-w-[1050px]">
          <div className="flex flex-col items-center w-full max-w-[651px]">
            <div className="flex flex-col items-center gap-2.5 w-full max-w-[607px]">
              <h2 className="w-full max-w-[262px] mb-[10px] font-montserrat font-bold text-3xl sm:text-4xl lg:text-[40px] leading-tight sm:leading-[50px] tracking-[0.2px] text-[#252B42] text-center">
                Pricing FAQ
              </h2>
              <p className="w-full max-w-[552px] font-montserrat font-normal text-base sm:text-lg lg:text-xl leading-normal sm:leading-[30px] text-center tracking-[0.2px] text-[#737373]">
                Problems trying to resolve the conflict between the two major realms of Classical physics
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Grid */}
        <div className="flex flex-col items-center gap-6 sm:gap-8 lg:gap-[30px] w-full max-w-[1056px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-[30px]">
            {faqs.map((faq) => (
              <div key={faq.id} className="w-full">
                <Accordion type="single" collapsible>
                  <AccordionItem value={faq.id} className="border-none">
                    <div className="flex flex-col items-start p-4 sm:p-6 w-full rounded-[9px] shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex gap-3 sm:gap-5 w-full">
                        <ChevronRight className="w-[9px] h-4 text-[#23A6F0] mt-1.5 flex-shrink-0" />
                        <div className="flex flex-col gap-[5px]">
                          <AccordionTrigger className="hover:no-underline">
                            <h5 className="font-montserrat font-bold text-sm sm:text-base leading-tight sm:leading-6 tracking-[0.1px] text-[#252B42] text-left">
                              {faq.question}
                            </h5>
                          </AccordionTrigger>
                          <AccordionContent>
                            <p className="font-montserrat font-normal text-xs sm:text-sm leading-normal sm:leading-5 tracking-[0.2px] text-[#737373]">
                              {faq.answer}
                            </p>
                          </AccordionContent>
                        </div>
                      </div>
                    </div>
                  </AccordionItem>
                </Accordion>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <p className="w-full max-w-[552px] font-montserrat font-normal text-base sm:text-lg lg:text-xl leading-normal sm:leading-[30px] text-center tracking-[0.2px] text-[#737373]">
          Haven&lsquo;t got your answer? Contact our support
        </p>
      </div>
    </section>
  )
}

