import Image from "next/image";
import { db } from "../_lib/Prisma";
import ProductItem from "./product-items";

const PorductList =  async() => {
    const product = await db.product.findMany({
        where:{
            discountPercentage:{
                gt:0
            }
        },
        take: 10,
        include:{
            restaurant: {
                select:{
                    name: true,
                }
            }
        }
    });
    // [&::-webkit-scrollbar]:hidden juda aesconder o scrool
    return (  <div className="flex overflow-x-scroll [&::-webkit-scrollbar]:hidden px-5 pt-4 gap-3">
    {
        product.map(product => <ProductItem key={product.id} product={product} />
        
    )
    }
    </div>);
}
 
export default PorductList;