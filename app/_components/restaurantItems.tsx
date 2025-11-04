import { Restaurant } from "@prisma/client";
import { AlarmClock, BikeIcon, HeartIcon, HeartPlus,StarIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

interface RestaurantsProps{
    restaurant: Restaurant
}
const formatCurrency = (value: number) => {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};
const RestaurantItems = ({restaurant}:RestaurantsProps) => {
    return (  
    <div className="space-y-3 max-w-[266px] min-w-[266px]">
        <div className="relative h-[136px] w-full" >
            <Image 
            src={restaurant.imageUrl} 
            alt={restaurant.name}
             priority 
             fill
             className="rounded-lg object-cover" />
            <div className="absolute top-2 left-2  flex justify-between w-[95%] items-center">
                <div className="bg-[#fff] gap-1 flex items-center  rounded-full py-[2px] px-2">
                <StarIcon size={18} className="text-yellow-400"/>
                <span className="font-semibold text-sm">5.0</span>
                </div>

                <Button className="bg-[rgba(255,255,255,0.3)] h-[30px] w-[30px] rounded-full  items-center flex">
                    <HeartIcon className="fill-white " size={14}/>
                </Button>

            </div>

        </div>
        <div>
            <h2 className="font-semibold text-sm">{restaurant.name}</h2>
            <div className="flex gap-4">
                {/* Entrega  */}
                <div className="text-muted-foreground truncate text-[10px] flex gap-1 py-1">
                    <BikeIcon size={15} className="text-primary"/>
                    <span>{
                    Number(restaurant.deliveryFree) === 0 ?
                     "Entrega Gratuita" :
                   formatCurrency(Number(restaurant.deliveryFree))}</span>
                </div>
                 {/* tempo  */}
                <div className=" flex items-center gap-1 text-muted-foreground truncate text-[10px]">
                   <AlarmClock size={12} className="text-primary"/>
                   <span>{restaurant.deliveryTime} min</span>
                </div>
            </div>
        </div>
    </div>
    );
}
 
export default RestaurantItems;