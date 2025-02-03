import Image from "next/image"
import Link from "next/link"


interface CategoryCard {
  title: string
  itemCount: number
  imageUrl: string
}

const categories: CategoryCard[] = [
  {
    title: "CLOTHS",
    itemCount: 5,
    imageUrl: "/aboutpic.png"
  },
  {
    title: "CLOTHS",
    itemCount: 5,
    imageUrl: "/about2.png"
  },
  {
    title: "CLOTHS",
    itemCount: 5,
    imageUrl: "/about3.png"
  },
  {
    title: "CLOTHS",
    itemCount: 5,
    imageUrl: "/about4.png"
  },
  {
    title: "CLOTHS",
    itemCount: 5,
    imageUrl: "/about5.png"
  }
]

export default function ShopCategories() {
  return (
    <section className="w-full bg-[#FAFAFA] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <Link 
              key={index} 
              href="#" 
              className="relative group overflow-hidden rounded-md transition-transform hover:scale-105"
            >
              <div className="relative h-[223px] w-full">
                <Image
                  src={category.imageUrl}
                  alt={category.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <h3 className="font-montserrat font-bold text-base tracking-wide">
                    {category.title}
                  </h3>
                  <p className="font-montserrat text-sm mt-2">
                    {category.itemCount} Items
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}



