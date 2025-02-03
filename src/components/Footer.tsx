import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      {/* Top Section */}
      <div className="bg-gray-50">
        <div className="container mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Bandage
            </Link>
            <div className="flex space-x-5">
              <Link href="#" className="text-[#23A6F0] hover:opacity-80">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-[#23A6F0] hover:opacity-80">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-[#23A6F0] hover:opacity-80">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h5 className="text-lg font-bold text-gray-900">Company Info</h5>
              <ul className="space-y-3">
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 font-bold text-sm">About Us</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 font-bold text-sm">Carrier</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 font-bold text-sm">We are hiring</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 font-bold text-sm">Blog</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h5 className="text-lg font-bold text-gray-900">Legal</h5>
              <ul className="space-y-3">
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 font-bold text-sm">About Us</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 font-bold text-sm">Carrier</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 font-bold text-sm">We are hiring</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 font-bold text-sm">Blog</Link></li>
              </ul>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h5 className="text-lg font-bold text-gray-900">Features</h5>
              <ul className="space-y-3">
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 font-bold text-sm">Business Marketing</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 font-bold text-sm">User Analytic</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 font-bold text-sm">Live Chat</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 font-bold text-sm">Unlimited Support</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-4">
              <h5 className="text-lg font-bold text-gray-900">Resources</h5>
              <ul className="space-y-3">
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 font-bold text-sm">iOS & Android</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 font-bold text-sm">Watch a Demo</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 font-bold text-sm">Customers</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 font-bold text-sm">API</Link></li>
              </ul>
            </div>

            {/* Get In Touch */}
            <div className="space-y-4">
              <h5 className="text-lg font-bold text-gray-900">Get In Touch</h5>
              <form className="space-y-2">
                <div className="relative">
                  <Input 
                    type="email" 
                    placeholder="Your Email" 
                    className="pr-24 bg-gray-50 border-gray-200"
                  />
                  <Button 
                    type="submit" 
                    className="absolute right-0 top-0 bottom-0 bg-[#23A6F0] hover:bg-[#1a7ab3] text-white rounded-l-none"
                  >
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-gray-600">Lore imp sum dolor Amit</p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-50">
        <div className="container mx-auto px-4 py-6">
          <p className="text-sm font-bold text-gray-600 text-center md:text-left">
            Made With Love By Finland All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

