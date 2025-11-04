"use client";
import { Button } from "@/app/_components/ui/button";
import { Product } from "@prisma/client";
import { ChevronLeftIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductImageProp{
    product: Pick<Product, "name"| "imageUrl">
}

const ProductImage = ({product}:ProductImageProp) => {
    const router = useRouter();


    const navegarback = ()=> {
        if(window.history.length > 1){
            router.back();
        }else{
            router.push("/")
        }
    };

    return ( <div className="relative w-full h-[360px]">
            <Image
             src={product.imageUrl}
             alt={product.name} 
             fill 
             className=" object-cover"/> 
            <Button
            onClick={navegarback} 
            className=" absolute top-5 left-5 bg-white text-foreground  w-[40px] h-[40px] rounded-full hover:text-white" >
                <ChevronLeftIcon size={16}/>
            </Button>
    
        </div> );
}
 
export default ProductImage;