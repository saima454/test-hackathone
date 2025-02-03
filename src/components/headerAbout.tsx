'use client'

import Link from "next/link"
import { Phone, Mail, Facebook, Instagram, Twitter, Youtube, Search, ShoppingCart, Heart } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="w-full font-montserrat">
      {/* Top Bar */}
      <div className="bg-[#23856D] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center py-3 text-sm">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>(225) 555-0118</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>michelle.rivera@example.com</span>
              </div>
            </div>
            <p className="text-center py-2 md:py-0">
              Follow Us  and get a chance to win 80% off
            </p>
            <div className="flex items-center gap-4">
              <span className="text-sm font-bold">Follow Us :</span>
              <div className="flex items-center gap-4">
                <Link href="#" aria-label="Instagram">
                  <Instagram className="h-4 w-4" />
                </Link>
                <Link href="#" aria-label="Youtube">
                  <Youtube className="h-4 w-4" />
                </Link>
                <Link href="#" aria-label="Facebook">
                  <Facebook className="h-4 w-4" />
                </Link>
                <Link href="#" aria-label="Twitter">
                  <Twitter className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-5">
            <Link href="/" className="text-2xl font-bold text-gray-800">
              Bandage
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              <div className="flex items-center gap-6">
                <Link href="/" className="text-gray-800 font-bold hover:text-[#23A6F0]">
                  Home
                </Link>
                <Link href="/shop" className="text-gray-500 font-medium hover:text-[#23A6F0]">
                  Shop
                </Link>
                <Link href="/about" className="text-gray-500 font-medium hover:text-[#23A6F0]">
                  About
                </Link>
                <Link href="/blog" className="text-gray-500 font-medium hover:text-[#23A6F0]">
                  Blog
                </Link>
                <Link href="/contact" className="text-gray-500 font-medium hover:text-[#23A6F0]">
                  Contact
                </Link>
                <Link href="/products" className="text-gray-500 font-medium hover:text-[#23A6F0]">
                  Products
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="ghost" className="text-[#23A6F0] font-bold hidden md:flex items-center gap-1">
                <Mail className="h-4 w-4" />
                Login / Register
              </Button>
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="text-[#23A6F0]">
                  <Search className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-[#23A6F0] relative">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-[#23A6F0] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    1
                  </span>
                </Button>
                <Button variant="ghost" size="icon" className="text-[#23A6F0] relative">
                  <Heart className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-[#23A6F0] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    1
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
