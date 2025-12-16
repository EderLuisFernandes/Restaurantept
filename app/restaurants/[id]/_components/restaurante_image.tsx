"use client";

import UseBackPage from "@/app/_components/ui/backpage";
import { Button } from "@/app/_components/ui/button";
import { Restaurant } from "@prisma/client";
import { ChevronLeftIcon, HeartIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";


interface RestaurantImgProps{
 restaurant:Pick<Restaurant,"name" | "imageUrl">  
}
const RestaurantImage = ({restaurant}:RestaurantImgProps) => {
    const back = UseBackPage()
    return ( <div className="relative w-full h-[215px]">
                <Image
                 src={restaurant.imageUrl}
                 alt={restaurant.name} 
                 fill 
                 className=" object-cover"/> 
                 <div>
                <Button
                onClick={back} 
                className=" absolute top-5 left-5 bg-white text-foreground  w-[40px] h-[40px] rounded-full hover:text-white" >
                    <ChevronLeftIcon size={16}/>
                </Button>

                <Button className="absolute top-5 right-5 bg-foreground   w-[40px] h-[40px] rounded-full hover:text-white">
                    <HeartIcon  size={20} className="fill-white  " />
                </Button>
                 </div>
        
            </div> );
}
 
export default RestaurantImage;