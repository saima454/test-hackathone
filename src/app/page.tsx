


import BestProduct from "@/components/BestProduct";
import FeaturedPosts from "@/components/featured-posts";
import Footer from "@/components/Footer";
import GreenSection from "@/components/greenSection";
import Header from "@/components/Header";

import Hero from "@/components/Hero";
import PictureDive from "@/components/picturDive";

import ShopCard from "@/components/ShopCard";




export default function Home() {
  return (
    <div className=" mx-auto overflow-hidden">
      <Header/>
      
      <Hero/>
      <BestProduct/>
      <GreenSection/>
      <PictureDive/>
      <FeaturedPosts/>

     
    
      <Footer/>
     

     
  
    </div>
  )
    
     
}

