import AboutCard from '@/components/productCard';
import HeaderAbout from '@/components/headerAbout';
import { client } from '@/sanity/lib/client';
import { fetchData } from '@/services/api';
import React from 'react'
import ProductCard from '@/components/productCard';

 async function ProductsPage() {
  
//   const res = await client.fetch(`*[_type == 'product'][]{ name,price,description,'image':image.asset->url, category
                         
//  } `)


  
//         if(!res || res.length === 0){
//           await fetchData();
  
//           const res = await client.fetch(`*[_type == 'product'][]{ name,price,description,'image':image.asset->url, category
                         
//  }`);

//         }
 
  return (
    <div>
       <HeaderAbout/>
        <ProductCard />
    </div>
  )
}

export default ProductsPage;