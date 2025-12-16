import { db } from "../../_lib/Prisma";
import RestaurantImage from "./_components/restaurante_image";
import RestaurantInfo from "./_components/restaurant_info";
import { notFound } from "next/navigation";
interface RestauranPageProps{
   params:{
    id:string
   }
}

const RestaurantPage = async({params:{id}}:RestauranPageProps) => {
   const restaurant = await db.restaurant.findUnique({
    where:{
        id,
    },include:{
        categories: {
            orderBy: { name: 'asc' },   
                include:{
                    products: {
                        where:{
                            restaurantId:id,
                        },
                        include:{
                    restaurant:{
                        select:{
                            name:true
                        }
                    }
                }
            },
                }
            },
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
    
   })

   if(!restaurant){
    return notFound()
   }

    return ( <div>
        <RestaurantImage  restaurant={restaurant}/>

        <RestaurantInfo restaurant={restaurant} />
    </div> );
}
 
export default RestaurantPage;