import { Product } from "@prisma/client";
import Image from "next/image";
import { formatPrice,calculateProductsTotalPrice } from "../_helpers/price"


interface productItemProps{
    product:Product
}

const ProductItem = ({product}: productItemProps   ) => {
    return ( 
        <div className="space-y-2 w-[150px] min-w-[150px] ">
            <div className="relative h-[150px] w-full">
            <Image src={product.imageUrl} alt="" fill className="rounded-md object-cover shadow-sm "/>

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

            </div>
        
        </div>
     );
}
 
export default ProductItem;