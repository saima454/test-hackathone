// src\components\productGrid.tsx
"use client";

import { useEffect, useState } from "react";
import { Edit, Search, Trash } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { EditProductDialog } from "./edit-product-dialog";
import {
  ICard,
  IReturnSanityProduct,
  productCreateSanity,
  productDeleteSanity,
  productPostSanity,
  sanityFetch,
} from "@/services/sanityApi";
import { userPostSanity } from "@/services/userId";
import { CreateProductDialog } from "./create-product-dialog";

export default function ProductsGrid() {
  const [editingProduct, setEditingProduct] = useState<ICard | null>();

  const [isChange, setIsChange] = useState<boolean>(false);

  //-----------------------------------------------Edit-Card-function
  const handleSaveProduct = async (updatedProduct: ICard) => {
    const res = await productPostSanity(updatedProduct);
    if (res) {
      setIsChange(!isChange);
    }
  };

  //-----------------------------------------------Delete-Card-function
  const handleDeleteProduct = async (updatedProduct: ICard) => {
    const res = await productDeleteSanity(updatedProduct);
    if (res) {
      setIsChange(!isChange);
    }
  };

  //-----------------------------------------------Create-Card-function

  const [createProduct, setCreateProduct] = useState<ICard | null>();
  const handleCreateProduct = async (updatedProduct: ICard) => {
    try {
      const res = await productCreateSanity(updatedProduct);
      if (res) {
        setIsChange(!isChange);
        setCreateProduct(null);
      }
    } catch (error) {
      console.error("Creation failed:", error);
    }
  };

  //----------------------------------------------- States

  const [productArray, setProductsArray] = useState<ICard[]>([]);
  const [showProductArray, setShowProductArray] = useState<ICard[]>([]);
  const [search, setSearch] = useState<string>("");
  const [categoryDropdown, setCategoryDropdown] = useState<string[]>([]);

  //----------------------------------------------- UseEffect
  useEffect(() => {
    async function getData() {
      
      let query = '*[_type == "product"]';

      if (search && search.trim() !== "") {
        query = `*[_type == "product" && lower(name) match "${search.toLowerCase()}"]`;
      }
      

     
      const res = await sanityFetch(query);

     
      setProductsArray(res);
      setShowProductArray(res);

      const categories = [...new Set(res.map((item) => item.category))];
     
      setCategoryDropdown(categories);
    }

    getData();
  }, [search, isChange]);

  function valueChangeCategory(value: string) {
    if (value !== "all") {
      setShowProductArray(
        productArray.filter((item) => item.category == value)
      );
    } else {
      setShowProductArray(productArray);
    }
  }

  function valueChangePrice(value: string) {
    const updatedArray = [...showProductArray];

    if (value == "low") {
      setShowProductArray(updatedArray.sort((a, b) => a.price - b.price));
    } else if (value == "high") {
      setShowProductArray(updatedArray.sort((a, b) => b.price - a.price));
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold">
          Products Grid ({productArray.length})
        </h1>
        <div className="flex items-center gap-4">
          <Button variant="outline">Export</Button>

          <Button
            onClick={(e) => {
              e.stopPropagation();
              setCreateProduct({
                _id: "",
                name: "",
                price: 0,
                category: "",
                description: "",
                image: "",
                colors: "",
                status: "",
              });
            }}
          >
            Create new
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => {
             
              setSearch(e.target.value);
            }}
            placeholder="Search products..."
            className="pl-8  max-w-sm border border-black"
          />
        </div>

        <Select defaultValue="all" onValueChange={valueChangeCategory}>
          <SelectTrigger className="w-[180px]">
            <SelectValue>
              {categoryDropdown.length ? categoryDropdown[0] : "Category"}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categoryDropdown.map((option, index) => (
              <SelectItem value={option} key={index}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select defaultValue="latest" onValueChange={valueChangePrice}>
          <SelectTrigger className="w-[180px]">
            <SelectValue>{"Latest Added"}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="latest">Latest Added</SelectItem>
            <SelectItem value="low">Price: Low to High</SelectItem>
            <SelectItem value="high">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {showProductArray.map((product) => (
          <Card
            key={product._id}
            className="cursor-pointer transition-shadow hover:shadow-lg overflow-hidden"
            // onClick={() => setEditingProduct(product)}
          >
            <CardHeader className="border-b p-0">
              <div className="aspect-square relative">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name || "image"}
                  fill
                  className="object-cover"
                />
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="line-clamp-1">{product.name}</CardTitle>
              <p className="text-lg font-semibold">
                ${product.price.toFixed(2)}
              </p>
            </CardContent>
            <CardFooter className="border-t p-4">
              <div className="flex w-full gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  onClick={(e) => {
                    e.stopPropagation();
                    setEditingProduct(product);
                  }}
                >
                  <Edit className="mr-2 size-4" />
                  Edit
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteProduct(product);
                  }}
                >
                  <Trash className="mr-2 size-4" />
                  Delete
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="flex items-center justify-center gap-2">
        <Button variant="outline">Previous</Button>
        <Button variant="outline">1</Button>
        <Button variant="outline">2</Button>
        <Button variant="outline">3</Button>
        <Button variant="outline">Next</Button>
      </div>

      {editingProduct && (
        <EditProductDialog
          product={editingProduct}
          open={true}
          onOpenChange={(open: boolean) => !open && setEditingProduct(null)}
          onSave={handleSaveProduct}
          categoryDropdown={categoryDropdown}
        />
      )}

      {createProduct && (
        <CreateProductDialog
          product={createProduct}
          open={true}
          onOpenChange={(open: boolean) => !open && setCreateProduct(null)}
          onSave={handleCreateProduct}
          categoryDropdown={categoryDropdown}
        />
      )}
    </div>
  );
}
