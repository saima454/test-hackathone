"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
]

export default function PricingHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white font-montserrat">
      {/* Navbar */}
      <nav className="container mx-auto px-4 h-[91px] flex items-center justify-between">
        <Link href="/" className="text-xl sm:text-2xl font-bold text-[#252B42] tracking-[0.1px]">
          Bandage
        </Link>

        {/* Mobile menu button */}
        <button type="button" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-6 w-6 text-[#252B42]" /> : <Menu className="h-6 w-6 text-[#252B42]" />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-5">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-bold text-sm text-[#737373] tracking-[0.2px] hover:text-[#252B42]"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-[45px]">
          <Link href="/login" className="font-bold text-sm text-[#23A6F0] tracking-[0.2px]">
            Login
          </Link>
          <Button className="bg-[#23A6F0] hover:bg-[#1a7ab0] h-[52px] px-6 gap-[15px]">
            <span className="font-bold text-sm tracking-[0.2px]">Become a member</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 font-bold text-sm text-[#737373] tracking-[0.2px] hover:text-[#252B42]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/login"
              className="block px-3 py-2 font-bold text-sm text-[#23A6F0] tracking-[0.2px]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link>
            <div className="px-3 py-2">
              <Button
                className="w-full bg-[#23A6F0] hover:bg-[#1a7ab0] h-[52px] px-6 gap-[15px]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="font-bold text-sm tracking-[0.2px]">Become a member</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section
      <div className="container mx-auto px-4 py-8 sm:py-[50px] flex flex-col items-center">
        <div className="flex flex-col items-center gap-4 max-w-[427px] text-center">
          <h5 className="font-bold text-sm sm:text-base text-[#737373] tracking-[0.1px]">PRICING</h5>
          <h1 className="font-bold text-3xl sm:text-5xl md:text-[58px] leading-tight sm:leading-[80px] text-[#252B42] tracking-[0.2px]">
            Simple Pricing
          </h1>
          <div className="flex items-center gap-[15px] pt-2.5">
            <Link href="/" className="font-bold text-xs sm:text-sm text-[#252B42] tracking-[0.2px]">
              Home
            </Link>
            <ChevronRight className="w-2 h-4 text-[#BDBDBD]" />
            <span className="font-bold text-xs sm:text-sm text-[#737373] tracking-[0.2px]">Pricing</span>
          </div>
        </div>
      </div> */}
    </header>
  )
}

