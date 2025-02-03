"use client"

import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Grid, List } from 'lucide-react'

export default function FilterRow() {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1050px] mx-auto py-6">
        <div className="flex justify-between items-center">
          {/* Results Counter */}
          <div className="text-[#737373] font-bold text-sm tracking-wide">
            Showing all 12 results
          </div>

          {/* View Toggles */}
          <div className="flex items-center gap-4">
            <span className="text-[#737373] font-bold text-sm tracking-wide">
              Views:
            </span>
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="icon"
                className="w-[46px] h-[46px] border-[#ECECEC] hover:bg-gray-50"
              >
                <Grid className="w-4 h-4 text-[#252B42]" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="w-[46px] h-[46px] border-[#ECECEC] hover:bg-gray-50"
              >
                <List className="w-4 h-4 text-[#737373]" />
              </Button>
            </div>
          </div>

          {/* Sort Dropdown and Filter */}
          <div className="flex items-center gap-4">
            <Select>
              <SelectTrigger 
                className="w-[141px] h-[50px] bg-[#F9F9F9] border-[#DDDDDD] text-[#737373] font-normal"
              >
                <SelectValue placeholder="Popularity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popularity">Popularity</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
              </SelectContent>
            </Select>
            <Button 
              className="h-[50px] px-5 bg-[#23A6F0] hover:bg-[#1a93d8] text-white font-bold text-sm tracking-wide"
            >
              Filter
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

