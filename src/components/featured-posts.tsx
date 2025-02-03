import Image from "next/image"
import { Calendar, BarChart2, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface BlogPost {
  id: number
  image: string
  title: string
  description: string
  date: string
  comments: number
  tags: string[]
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    image: "/blog1.png",
    title: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
    tags: ["Google", "Trending", "New"],
  },
  {
    id: 2,
    image: "/blog2.png",
    title: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
    tags: ["Google", "Trending", "New"],
  },
  {
    id: 3,
    image: "/blog3.png",
    title: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
    tags: ["Google", "Trending", "New"],
  },
]

export default function FeaturedPosts() {
  return (
    <section className="w-[1440px] h-[1044px] bg-white mx-auto">
      <div className="absolute w-[1050px] left-1/2 -translate-x-1/2 py-28 flex flex-col items-center gap-20">
        {/* Header */}
        <div className="w-[692px] flex flex-col items-center">
          <div className="w-[691px] flex flex-col items-center gap-2.5">
            <h6 className="w-[114px] h-6 font-montserrat font-bold text-sm leading-6 text-center tracking-[0.2px] text-[#23A6F0]">
              Practice Advice
            </h6>
            <h2 className="w-[309px] h-[50px] font-montserrat font-bold text-[40px] leading-[50px] text-center tracking-[0.2px] text-[#252B42]">
              Featured Posts
            </h2>
            <p className="w-[469px] h-10 font-montserrat font-normal text-sm leading-5 text-center tracking-[0.2px] text-[#737373]">
              Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian
              mechanics
            </p>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="flex justify-center gap-[30px] w-[1045px] h-[606px]">
          {blogPosts.map((post) => (
            <Card key={post.id} className="w-[348px] h-[606px] bg-white shadow-[0px_2px_4px_rgba(0,0,0,0.1)]">
              {/* Image Container */}
              <div className="relative w-[348px] h-[300px]">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                <span className="absolute left-5 top-5 bg-[#E74040] text-white px-2.5 h-6 flex items-center justify-center text-sm font-bold rounded shadow-[0px_2px_4px_rgba(0,0,0,0.1)]">
                  NEW
                </span>
              </div>

              <CardContent className="flex flex-col gap-2.5 p-[25px] pb-[35px]">
                {/* Tags */}
                <div className="flex items-center gap-[15px]">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`text-xs leading-4 tracking-[0.2px] ${
                        index === 0 ? "text-[#8EC2F2]" : "text-[#737373]"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h4 className="w-[247px] h-[60px] font-montserrat font-normal text-xl leading-[30px] tracking-[0.2px] text-[#252B42]">
                  {post.title}
                </h4>

                {/* Description */}
                <p className="w-[280px] h-[60px] font-montserrat font-normal text-sm leading-5 tracking-[0.2px] text-[#737373]">
                  {post.description}
                </p>

                {/* Meta Info */}
                <div className="flex justify-between items-center py-[15px] w-[298px]">
                  <div className="flex items-center gap-[5px]">
                    <Calendar className="w-4 h-4 text-[#23A6F0]" />
                    <span className="text-xs leading-4 tracking-[0.2px] text-[#737373]">{post.date}</span>
                  </div>
                  <div className="flex items-center gap-[5px]">
                    <BarChart2 className="w-4 h-4 text-[#23856D]" />
                    <span className="text-xs leading-4 tracking-[0.2px] text-[#737373]">{post.comments} comments</span>
                  </div>
                </div>

                {/* Learn More Link */}
                <div className="flex items-center gap-2.5 mt-2.5">
                  <span className="font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]">
                    Learn More
                  </span>
                  <ChevronRight className="w-[9px] h-4 text-[#23A6F0]" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

