import {
  Phone,
  Mail,
  Instagram,
  Youtube,
  Facebook,
  Twitter,
  Search,
  ShoppingCart,
  Heart,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <nav className="w-full bg-[#252B42]">
      {/* Upper Section */}
      <div className="mx-auto flex h-[58px] max-w-[1438px] flex-wrap items-center justify-between px-4 py-2 sm:px-6">
        {/* Left Section - Contact Info */}
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="tel:(225) 555-0118"
            className="flex items-center gap-2 text-white hover:opacity-80"
          >
            <Phone className="h-4 w-4" />
            <span className="text-sm font-bold">(225) 555-0118</span>
          </Link>
          <Link
            href="mailto:michelle.rivera@example.com"
            className="flex items-center gap-2 text-white hover:opacity-80"
          >
            <Mail className="h-4 w-4" />
            <span className="text-sm font-bold">
              michelle.rivera@example.com
            </span>
          </Link>
        </div>

        {/* Center Section - Promotional Text */}
        <div className="hidden text-sm font-bold text-white md:block text-center">
          Follow Us and get a chance to win 80% off
        </div>

        {/* Right Section - Social Links */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-bold text-white">Follow Us :</span>
          <div className="flex gap-2">
            <Link href="#" className="rounded p-1 text-white hover:bg-white/10">
              <Instagram className="h-4 w-4" />
            </Link>
            <Link href="#" className="rounded p-1 text-white hover:bg-white/10">
              <Youtube className="h-4 w-4" />
            </Link>
            <Link href="#" className="rounded p-1 text-white hover:bg-white/10">
              <Facebook className="h-4 w-4" />
            </Link>
            <Link href="#" className="rounded p-1 text-white hover:bg-white/10">
              <Twitter className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Lower Section */}
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-4 sm:px-6">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-2xl font-bold text-[#737373]">
            Bandage
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden flex-wrap items-center gap-6 text-center lg:flex">
          <Link
            href="/"
            className="text-sm leading-6 text-white hover:text-gray-300"
          >
            Home
          </Link>
          <Link
            href="/shop"
            className="text-sm leading-6 text-white hover:text-gray-300"
          >
            Shop
          </Link>
          <Link
            href="/about"
            className="text-sm leading-6 text-white hover:text-gray-300"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="text-sm leading-6 text-white hover:text-gray-300"
          >
            Blog
          </Link>
          <Link
            href="#"
            className="text-sm leading-6 text-white hover:text-gray-300"
          >
            Contact
          </Link>
          <Link
            href="/products"
            className="text-sm leading-6 text-white hover:text-gray-300"
          >
            Products
          </Link>
        </div>

        {/* Right Section - Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          {/* <Button
            variant="ghost"
            className="hidden items-center gap-2 text-white lg:flex"
          >
            <span className="text-sm font-bold">Login / Register</span>
          </Button> */}

           <UserButton afterSignOutUrl="/" />
          
          <Button size="icon" variant="ghost" className="text-white">
            <Search className="h-5 w-5" />
          </Button>

          <Link href="/cart">
            <Button size="icon" variant="ghost" className="text-white">
              <div className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xs text-white">
                  1
                </span>
              </div>
            </Button>
          </Link>

          <Link href={"/wishlist"}>
            <Button size="icon" variant="ghost" className="text-white">
              <div className="relative">
                <Heart className="h-5 w-5" />
                <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xs text-white">
                  1
                </span>
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
