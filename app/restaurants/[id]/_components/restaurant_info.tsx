"use client"

import PorductList from "@/app/_components/product-list";
import { Button } from "@/app/_components/ui/button";
import { Card } from "@/app/_components/ui/card";
import { formatPrice } from "@/app/_helpers/price";
import { Prisma } from "@prisma/client";
import { BikeIcon, StarIcon, TimerIcon } from "lucide-react";
import Image from "next/image";


interface RestaurantDetails{
    restaurant: Prisma.RestaurantGetPayload<{
        include:{
            categories:true,
            products:{
                take: 10,
                include:{
                    restaurant:{
                        select:{
                            name:true
                        }
                    }
                }
            }
        }
    }>
   
}


const RestaurantInfo = ({restaurant}:RestaurantDetails) => {
    return (
    <div className="pt-4 mt-[-1.5rem] relative  bg-white rounded-tl-3xl rounded-tr-3xl  ">
        {/*  nome e estrela */}

        <div className="px-4 ">

                <div className="flex justify-between items-center ">
                    {/* Imagem */}
                    <div className="flex  items-center gap-2">
                    <div className=" relative h-10 w-10 flex gap-4">
                    <Image src={restaurant.imageUrl} alt={restaurant.name} fill className=" rounded-full"/>
                    </div>
                        <h1 className="font-semibold text-xl">{restaurant.name}</h1>
                    </div>
                    {/* Estrela */}
                     <div className="bg-foreground gap-1 flex items-center  rounded-full py-[2px] px-2">
                         <StarIcon size={12} className="text-yellow-400 fill-yellow-500"/>
                        <span className="font-semibold text-sm text-white">5.0</span>
                </div>  
                </div>

                 <Card className="mt-6 px-4">
           
           <div className="flex justify-around">

                <div className="text-center">
                    <div className="flex  items-center gap-2 text-muted-foreground">
                        <span className="text-xs" >Entrega</span>
                        <BikeIcon size={18}/>
                    </div>
                    <h2 className="font-semibold text-xl">{Number(restaurant.deliveryFree) == 0 && (
                        <span>Gratis</span>
                    ) || (
                        <span> { formatPrice( Number(restaurant.deliveryFree))}</span>
                    ) }</h2>
                </div>

                <div className="text-center">
                     <div className="flex items-center gap-2  text-muted-foreground">
                       <span className="text-xs" >Entrega</span>
                        <TimerIcon size={18}/>
                     </div>
                     <h2 className="font-semibold text-xl">{restaurant.deliveryTime} min</h2>
                </div>
           </div>
        </Card>

        <div className="flex  justify-between gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden mt-1 ">
              {restaurant.categories. map(category =>(
                <div key={category.id} className="bg-[#f4f4f4] min-w-[200px] text-center rounded-lg p-4" >
                   <span className="text-muted-foreground text-xs">{category.name}</span>
                    </div>
              ))}      
        </div>
        </div>


        <div className="mt-4 space-y-4">
                    <div>
                        <h2 className="font-semibold px-4">Mais pedidos</h2>
                    </div>
                    <PorductList product={restaurant.products}/>

        </div>
        {restaurant.categories.map( category =>(
             <div className="mt-4 space-y-4" key={category.id}>
                    <div>
                        <h2 className="font-semibold px-4">{category.name}</h2>
                    </div>
                    <PorductList product={category.products}/>

        </div>
        ))}
        
              {/* Ver sacola  */}
        <div className="absolute bottom-[-112px] left-0  bg-white w-full h-15   ">
            <div className="p-4 flex  justify-between">
                {/* preço */}
                <div>
                    <h1>34,50</h1>
                </div>
                {/* button */}

                <Button className="text-xl py-4 px-3">Ver Sacola</Button>
            </div>
        </div>
    </div> );
}
 
export default RestaurantInfo;