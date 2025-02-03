"use server"

import { client } from "@/sanity/lib/client";
export interface Card{
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
 
}

export async function fetchData() {
    const res = await client.fetch(`*[_type == 'product'][]{ name,price,description,'image':image.asset->url, category
                         
 }`)
return res;
    
}