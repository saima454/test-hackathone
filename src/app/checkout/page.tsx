"use client"
import * as React from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Image from 'next/image'
import { useEffect, useState } from "react"

interface ICart{
  name: string
  image: string
  price: number
  quantity: number
}

export default function CheckoutForm() {
  
  const [cartItem, setCartItem] = useState<ICart[]>([])
  const [shipCost, setShipCost] = useState(0)


  useEffect(()=>{
    const data = localStorage.getItem("cart")
    const cart = data ? JSON.parse(data) : []
    setCartItem(cart)
    
    const ShipmentData = localStorage.getItem("ShipmentData")
    const shipData = ShipmentData ? JSON.parse(ShipmentData) : []
    const shipCost = shipData.shipment_cost.amount.toFixed(2)
    setShipCost(shipCost)
  },[])
  

  function handlePayment(){
    alert("payment successfull ✅")
    
    localStorage.setItem("cart", JSON.stringify([]))
    setCartItem([])
  }

 const totalAmount = Number(cartItem.reduce((acc: number, item: ICart) => acc + Number(item.price * item.quantity), 0)) + Number(shipCost ? shipCost : 0)


  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 mt-[99px]">
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
      

       
        <Card className="h-fit p-6">
          <h2 className="text-xl font-medium">Order Summary</h2>
          <div className="mt-4 space-y-4">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Subtotal</span>
              <span>₹ {cartItem.reduce((acc: number, item: ICart) => acc + Number(item.price * item.quantity), 0)}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Delivery/Shipping</span>
              <span>{shipCost ? "₹ " + shipCost : "Free"}</span>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>₹ {totalAmount}</span>
              </div>
              <p className="mt-1 text-xs text-gray-500">
                (The total reflects the price of your order, including all duties and taxes)
              </p>
            </div>

            <div className="space-y-4 pt-6">
             
              {cartItem.map((item: ICart, index: number)=>{return (
                <div className="flex gap-4 relative" key={index}>
                <Image
                  src={item.image}
                  alt="image"
                  width={80}
                  height={80}
                />
                <div className="w-full space-y-1">
                  <p className="text-sm">{item.name}</p>
                  <p className="text-sm text-gray-500">Qty {item.quantity}</p>
                  <p className="text-sm text-gray-500">₹ {item.price * item.quantity}</p>
                </div>
              </div>
              )})}

              <Button className="w-full rounded-full py-6" onClick={handlePayment}>
                Let&apos;s Pay
              </Button>

            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}