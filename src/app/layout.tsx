
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { useState } from "react";
import { usePathname } from "next/navigation";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
  const pathname = usePathname()


  const isAdmin = pathname.startsWith("/admin");
  const isOrders = pathname.startsWith("/orders");
  const isCustomers = pathname.startsWith("/customers");
  const isStatistics = pathname.startsWith("/product-data");
  const isReviews = pathname.startsWith("/reviews");
  const studioAndHome =  !isAdmin && !isOrders && !isCustomers && !isStatistics && !isReviews
  
   
 
 
  return (

    <ClerkProvider>
    <html lang="en">

  



      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        {children}
      </body>
    </html>
      </ClerkProvider>
  );
}
