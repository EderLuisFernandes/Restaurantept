"use client";
import DescontoPorcento from "@/app/_components/desconto";
import PorductList from "@/app/_components/product-list";
import { Button } from "@/app/_components/ui/button";
import { Card } from "@/app/_components/ui/card";
import { formatPrice,calculateProductsTotalPrice } from "@/app/_helpers/price";
import { Prisma } from "@prisma/client";
import { ArrowLeftIcon,ArrowRightIcon, BikeIcon, ClockIcon, Currency, Icon, TimerIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";



interface productDatailsProps{
    product:Prisma.ProductGetPayload<{
        include:{
            restaurant:true
        }
    }>,

    complementProduct: Prisma.ProductGetPayload<{
        include:{
            restaurant:true
        }
    }>[]
}
const ProductInformation = ({product,complementProduct}:productDatailsProps) => {
    const  [quantity,setQuantity] = useState(1);

    function aumentar(){
        setQuantity(valor => valor + 1) 
    }
    function diminuir (){
        setQuantity(valor => {
            if(valor === 0){
                return 0 
            }else{
                return valor - 1
            }
        })
    }

    return ( <div className=" p-4 mt-[-1.5rem] bg-white rounded-tl-3xl rounded-tr-3xl  relative">
            {/* Imagem e nome */}
        <div className="flex items-center gap-1">
            <div className="relative h-7 w-7">
            <Image 
            src={product.restaurant.imageUrl} alt={product.restaurant.name} fill className="rounded-full object-cover "/>
            </div>
            <span className="text-[rgba(58,57,57,0.7)]">{product.restaurant.name}</span>
        </div>
    
        <h1 className="mb-3 mt-1 font-bold text-xl ">{product.name}</h1>
    
        {/* preço do porduto */}
        <div  className="flex justify-between">
            {/* PREÇO */}
            <div>
                <div className="flex gap-2 items-center">
                <p className="text-xl font-semibold">{formatPrice(calculateProductsTotalPrice(product))}</p>
                
                 {product.discountPercentage > 0 && (
                    <DescontoPorcento product={product}/>
                )}
    
                </div>
                <h2 className="text-gray-500 text-xs">De: {formatPrice(Number(product.price))}</h2>
            </div>
            {/* AUMENTA E DIMINUIR */}
            <div className="flex items-center text-center gap-3">
                <Button className=" border border-solid border-muted-foreground hover:text-black"  size="icon" variant="ghost"
                onClick={diminuir}
                >
                    <ArrowLeftIcon/>
                </Button>
                <span className="w-4">{quantity}</span>
                <Button className=" border border-solid border-muted-foreground hover:text-black"  size="icon" variant="ghost"  onClick={aumentar} >
                    <ArrowRightIcon/>
                </Button>
            </div>
        </div>

        <Card className="mt-6">
           
           <div className="flex justify-around">

                <div className="text-center">
                    <div className="flex  items-center gap-2 text-muted-foreground">
                        <span className="text-xs" >Entrega</span>
                        <BikeIcon size={18}/>
                    </div>
                    <h2 className="font-semibold text-xl">{Number(product.restaurant.deliveryFree) == 0 && (
                        <span>Gratis</span>
                    ) || (
                        <span> { formatPrice( Number(product.restaurant.deliveryFree))}</span>
                    ) }</h2>
                </div>

                <div className="text-center">
                     <div className="flex items-center gap-2  text-muted-foreground">
                       <span className="text-xs" >Entrega</span>
                        <TimerIcon size={18}/>
                     </div>
                     <h2 className="font-semibold text-xl">{product.restaurant.deliveryTime} min</h2>
                </div>
           </div>
           
        </Card>

        <div className="mt-6 space-y-3 ">
            <h1 className="font-bold text-[32px] ">Sobre</h1>
            <p className="text-sm  text-muted-foreground">{product.description}</p>
        </div>

        <div className="  mt-6 space-y-3 ">
            <h1 className="font-bold text-[32px] ">Sucos</h1>
            <PorductList product={complementProduct}/>
        </div>
        </div> );
}
 
export default ProductInformation;