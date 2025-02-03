"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

interface PricingPlan {
  name: string
  description: string
  price: {
    monthly: number
    yearly: number
  }
  features: {
    included: string[]
    excluded: string[]
  }
  isPopular?: boolean
}

const plans: PricingPlan[] = [
  {
    name: "FREE",
    description: "Organize across all apps by hand",
    price: {
      monthly: 0,
      yearly: 0,
    },
    features: {
      included: ["Unlimited product updates", "Unlimited product updates", "Unlimited product updates"],
      excluded: ["1GB Cloud storage", "Email and community support"],
    },
  },
  {
    name: "STANDARD",
    description: "Organize across all apps by hand",
    price: {
      monthly: 9.99,
      yearly: 89.99,
    },
    features: {
      included: ["Unlimited product updates", "Unlimited product updates", "Unlimited product updates"],
      excluded: ["1GB Cloud storage", "Email and community support"],
    },
    isPopular: true,
  },
  {
    name: "PREMIUM",
    description: "Organize across all apps by hand",
    price: {
      monthly: 19.99,
      yearly: 199.99,
    },
    features: {
      included: ["Unlimited product updates", "Unlimited product updates", "Unlimited product updates"],
      excluded: ["1GB Cloud storage", "Email and community support"],
    },
  },
]

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  }

  return (
    <section className="w-full bg-[#FAFAFA] font-montserrat">
      <div className="container mx-auto px-4 py-12 sm:py-20 lg:py-28">
        <motion.div
          className="flex flex-col items-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h5 className="text-[#737373] font-bold text-sm sm:text-base mb-2 sm:mb-4">PRICING</h5>
          <h1 className="text-[#252B42] font-bold text-3xl sm:text-5xl lg:text-[58px] leading-tight sm:leading-[80px] mb-4 text-center">
            Simple Pricing
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-4 sm:mt-8">
            <span className="font-bold text-sm sm:text-base text-[#252B42]">Monthly</span>
            <Switch checked={isYearly} onCheckedChange={setIsYearly} className="data-[state=checked]:bg-[#23A6F0]" />
            <span className="font-bold text-sm sm:text-base text-[#252B42]">Yearly</span>
            <motion.span
              className="mt-2 sm:mt-0 sm:ml-4 bg-[#B3E3FF] text-[#23A6F0] px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-[37px] font-bold text-xs sm:text-sm"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            >
              Save 25%
            </motion.span>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {plans.map((plan, index) => (
            <motion.div key={plan.name} variants={cardVariants} whileHover="hover">
              <Card
                className={`border-[#23A6F0] ${
                  plan.isPopular
                    ? "bg-[#252B42] text-white py-8 sm:py-12 lg:py-[70px]"
                    : "bg-white text-[#252B42] py-6 sm:py-8 lg:py-[50px]"
                }`}
              >
                <CardContent className="flex flex-col items-center px-4 sm:px-6 lg:px-10">
                  <h3 className="font-bold text-xl sm:text-2xl mb-4 sm:mb-9">{plan.name}</h3>
                  <p className="text-center font-bold text-sm sm:text-base mb-4 sm:mb-9 text-inherit opacity-70">
                    {plan.description}
                  </p>
                  <motion.div
                    className="flex items-center gap-1 sm:gap-2.5 mb-4 sm:mb-9"
                    animate={{ scale: isYearly ? [1, 1.1, 1] : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="font-bold text-2xl sm:text-4xl text-[#23A6F0]">
                      ${isYearly ? plan.price.yearly : plan.price.monthly}
                    </span>
                    <div className="flex flex-col items-start">
                      <span className="font-bold text-xl sm:text-2xl text-[#23A6F0]">$</span>
                      <span className="font-bold text-xs sm:text-sm text-[#8EC2F2]">Per Month</span>
                    </div>
                  </motion.div>

                  <div className="space-y-2 sm:space-y-4 mb-6 sm:mb-9">
                    {plan.features.included.map((feature, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center gap-2 sm:gap-2.5"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#2DC071] flex items-center justify-center">
                          <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </div>
                        <span className="font-bold text-xs sm:text-sm">{feature}</span>
                      </motion.div>
                    ))}
                    {plan.features.excluded.map((feature, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center gap-2 sm:gap-2.5"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (plan.features.included.length + i) * 0.1 }}
                      >
                        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#BDBDBD] flex items-center justify-center">
                          <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </div>
                        <span className="font-bold text-xs sm:text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <Button
                    className={`w-full ${
                      plan.isPopular ? "bg-[#23A6F0] hover:bg-[#1a7ab0]" : "bg-[#252B42] hover:bg-[#1a1f2d]"
                    } text-white font-bold text-sm sm:text-base py-2 sm:py-3`}
                  >
                    Try for free
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

