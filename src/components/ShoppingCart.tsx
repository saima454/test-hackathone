"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@radix-ui/react-select";
import { ChevronLeft, ChevronRight, Heart, Trash2 } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import getUserInfo, { userPostSanity } from "@/services/userId";

interface Iproduct {
  name: string;
  price: string;
  description: string;
  image: string;
  quantity: number;
}

export default function ShoppingCart() {
  const router = useRouter();
  const searchParam = useSearchParams();

  const [cartItem, setCartItem] = useState<Iproduct[]>([]);

  useEffect(() => {
    async function getUserIdAndUpdateCart() {
      const sanityUserId = await userPostSanity();
      
      const cart = localStorage.getItem("cart");
      const updatedCart = cart ? JSON.parse(cart) : [];

      const name = searchParam.get("name");
      const price = searchParam.get("price");
      const description = searchParam.get("description");
      const image = searchParam.get("image");

      if (name && price && description && image) {
        const isDuplicate: boolean = updatedCart.some(
          (item: Iproduct) => item.name === name
        );

        if (!isDuplicate) {
          updatedCart.push({ name, price, description, image, quantity: 1 });
        }

        localStorage.setItem("cart", JSON.stringify(updatedCart));
        setCartItem(updatedCart);
      }
    }
    getUserIdAndUpdateCart();
  }, [searchParam, router]);

  function handleRemoveItem(index: number) {
    const removeCard = [...cartItem];
    removeCard.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(removeCard));
    setCartItem(removeCard);
  }

  function handleQuantity(index: number, e_target_value: number) {
    const copyWalaArray = [...cartItem];
    copyWalaArray[index].quantity = e_target_value;

    localStorage.setItem("cart", JSON.stringify(copyWalaArray));
    setCartItem(copyWalaArray);
  }

  return (
    <div className="container mx-auto px-4 py-8 mt-[99px]">
      {/* Free Delivery Banner */}
      <div className="mb-8 bg-gray-50 p-4 rounded-lg">
        <div className="flex items-center gap-2">
          <p className="text-sm font-medium">Free Delivery</p>
          <p className="text-sm text-gray-600">
            Applies to orders of ₹ 14,000.00 or more.
          </p>
          <Link href={"/shipment"}>
            <Button variant="link" className="text-sm">
              View details
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-2xl font-medium mb-6">Bag</h1>

          {/* Cart Items */}
          <div className="space-y-6">
            {cartItem.map((item: Iproduct, index: number) => {
              return (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex gap-6">
                      <div className="w-24 h-24 bg-gray-100 rounded-md">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={96}
                          height={96}
                          layout="responsive" // Update this
                          objectFit="cover" // Update this if needed
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="font-medium">{item.name}</h3>
                            <p className="text-sm text-gray-600">
                              Men&apos;s Short-Sleeve Running Top
                            </p>
                            <p className="text-sm text-gray-600">
                              Ashen Slate/Cobalt Bliss
                            </p>
                            <div className="mt-2 space-y-1">
                              <p className="text-sm">Size: L</p>
                              <div className="flex gap-4">
                                <p className="text-sm">Quantity:</p>
                                <input
                                  className="bg-slate-200 rounded pl-2 text-black w-12"
                                  type="number"
                                  min={1}
                                  value={item.quantity}
                                  onChange={(e) => {
                                    handleQuantity(index, +e.target.value);
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                          <p className="text-sm">
                            MRP: ₹ {+item.price * item.quantity}
                          </p>
                        </div>
                        <div className="flex gap-4 mt-4">
                          <Button variant="ghost" size="sm">
                            <Heart className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                              handleRemoveItem(index);
                            }}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* You Might Also Like */}
        </div>

        {/* Summary */}
        <div>
          <Card className="sticky top-8">
            <CardContent className="p-6">
              <h2 className="text-xl font-medium mb-4">Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm">Subtotal</span>
                  <span className="text-sm">
                    ₹{" "}
                    {cartItem.reduce((total, object) => {
                      return total + +object.price * object.quantity;
                    }, 0)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Estimated Delivery & Handling</span>
                  <span className="text-sm">Free</span>
                </div>
                <Separator />
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>
                    ₹{" "}
                    {cartItem
                      .reduce(
                        (total, item) =>
                          total + Number(item.price) * item.quantity,
                        0
                      )
                      .toFixed(2)
                      .toLocaleString()}
                  </span>
                </div>
                <Link href={"/shipment"}>
                  <Button className="w-full">Member Checkout</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
