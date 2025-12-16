import ProductItem from "./product-items";
import { Prisma } from "@prisma/client";
interface ProductListProp{
    product: Prisma.ProductGetPayload<{
            include:{
                restaurant:{
                    select:{
                        name: true,
                        imageUrl: true
                    }
                }
            }
        }>[]
}

const PorductList =({product}: ProductListProp) => {
    ;
    // [&::-webkit-scrollbar]:hidden juda aesconder o scrool
    return (  <div className="flex justify-between overflow-x-scroll [&::-webkit-scrollbar]:hidden px-5 pt-4 gap-3">
    {
        product.map(product => <ProductItem key={product.id} product={product} />
        
    )
    }
    </div>);
}
 
export default PorductList;