import { Prisma, Product } from "@prisma/client";
import Image from "next/image";
import { formatPrice,calculateProductsTotalPrice } from "../_helpers/price"
import { ArrowDown01Icon, ArrowDownIcon } from "lucide-react";


interface productItemProps{
    product:Prisma.ProductGetPayload<{
        include:{
            restaurant:{
                select:{
                    name: true,
                    imageUrl: true
                }
            }
        }
    }>
}

const ProductItem = ({product}: productItemProps   ) => {
    return ( 
        <div className="space-y-2 w-[150px] min-w-[150px] ">
            <div className="relative h-[150px] w-full">
            <Image src={product.imageUrl} alt="" fill className="rounded-md object-cover shadow-sm "/>
            {product.discountPercentage && (

            <div className="absolute top-2 left-2 bg-primary text-[#fff] rounded-full px-2 py-[2px] flex items-center justify-center gap-[1px] ">
                <ArrowDownIcon size={12}/>
                <span className="font-semibold text-xs">{product.discountPercentage} %</span>
            </div>
            )}
            </div>
            <div>
            <h2 className="text-sm truncate">{product.name}</h2>

            <div className="flex items-center gap-1">
            <h3 className="font-semibold ">{
            formatPrice(calculateProductsTotalPrice(product))}
            </h3>
            {product.discountPercentage > 0 &&(
                <span className="line-through text-muted-foreground text-xs">{ formatPrice(Number(product.price))}</span>
            )}
            </div>
            <div className="flex items-center gap-1">
                <p className="text-muted-foreground text-xs">{product.restaurant.name}</p>
            </div>
            </div>
        
        </div>
     );
}
 
export default ProductItem;