import { client } from "@/sanity/lib/client"
import Image from "next/image"

const products = [
  {
    id: 1,
    title: "Graphic Design",
    category: "English Department",
    image: "/pic1.png",
    originalPrice: "$16.48",
    salePrice: "$6.48",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 2,
    title: "Graphic Design",
    category: "English Department",
    image: "/pic2.png",
    originalPrice: "$16.48",
    salePrice: "$6.48",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 3,
    title: "Graphic Design",
    category: "English Department",
    image: "/pic3.png",
    originalPrice: "$16.48",
    salePrice: "$6.48",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 4,
    title: "Graphic Design",
    category: "English Department",
    image: "/pic4.png",
    originalPrice: "$16.48",
    salePrice: "$6.48",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 5,
    title: "Graphic Design",
    category: "English Department",
    image: "/pic5.png",
    originalPrice: "$16.48",
    salePrice: "$6.48",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 6,
    title: "Graphic Design",
    category: "English Department",
    image: "/pic6.png",
    originalPrice: "$16.48",
    salePrice: "$6.48",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 7,
    title: "Graphic Design",
    category: "English Department",
    image: "/pic7.png",
    originalPrice: "$16.48",
    salePrice: "$6.48",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 8,
    title: "Graphic Design",
    category: "English Department",
    image: "/pic8.png",
    originalPrice: "$16.48",
    salePrice: "$6.48",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
]

export default async function BestProduct() {
  
  interface Card {
    cardHeading: string;
    cardImg: string;
    cardSubHeading: string;
    cardPrice: number;
    cardOldPrice: number;
  }

  const res = await client.fetch(`*[_type == 'landingPage'][0].sections[0]{ 'cardsMainHeading': cardsMainHeading, 'cards': cards[]{'cardHeading': cardHeading,'cardImg': cardImg.asset->url, 'cardSubHeading': cardSubHeading,'cardPrice': cardPrice, 'cardOldPrice': cardOldPrice }}`)
    

  const {cardsMainHeading, cards} =  res

 
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h4 className="text-gray-600 text-xl mb-2">Featured Products</h4>
          <h2 className="text-gray-900 text-3xl font-bold mb-3">BESTSELLER PRODUCTS</h2>
          <p className="text-gray-600">Problems trying to resolve the conflict between</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((product: Card, index: number) => (
            <div key={index} className="flex flex-col">
              <div className="relative aspect-[239/427] mb-6">
                <Image
                  src={product.cardImg}
                  alt={"image"}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="flex flex-col items-center px-6">
                <h3 className="text-gray-900 text-base font-bold mb-2">{product.cardHeading}</h3>
                <p className="text-gray-600 text-sm font-bold mb-2">{product.cardSubHeading}</p>
                <div className="flex justify-center items-center gap-2 mb-4">
                  <span className="text-gray-400 text-base font-bold">{product.cardPrice}</span>
                  <span className="text-teal-700 text-base font-bold">{product.cardOldPrice}</span>
                </div>
                <div className="flex justify-center gap-2">
                  {/* {product.colors.map((color, index) => (
                    <div
                      key={index}
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                  ))} */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

