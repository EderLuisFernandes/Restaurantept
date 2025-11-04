import { db } from "@/app/_lib/Prisma";
import { notFound } from "next/navigation";
import ProductImage from "./_components/product_imagem";
import ProductInformation from "./_components/product_Info";

interface ProductPageProps{
    params: {
        id:string
    }
}
const ProductsPage = async ({params:{id}}:ProductPageProps) => {
    const product = await db.product.findUnique({
        where:{
            id
        },
        include:{
            restaurant:true
        }
    })

    const juice = await db.product.findMany({
        where:{
            category:{
                name:'Sucos'
            },
            restaurant:{
                id: product?.restaurantId
            }
        },include:{
            restaurant: true
        }
    })

    if(!product){
        return notFound()
    }

    return (  
    <div>
    {/* img */}
    <ProductImage  product={product}/>
  {/* Restaurante */}
    <ProductInformation product={product} complementProduct={juice}/>
    </div> );
}
 
export default ProductsPage;