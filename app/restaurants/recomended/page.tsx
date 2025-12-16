import RestaurantItems from "@/app/_components/restaurantItems";
import { Button } from "@/app/_components/ui/button";
import { db } from "@/app/_lib/Prisma";
import { useRouter } from "next/navigation";
import RecomendedBack from "./recomended_back";

const RecomendedRestaurants = async () => {

      
const restaurant = await db.restaurant.findMany({})
    return ( 
    <div>

        <div className=" flex items-center justify-between  px-5 py-5">
            <div className="mr-6">
            <RecomendedBack/>
            </div>
        
        <div className="text-center  ">
            <h2 className="font-semibold">Todos os Restaurantes</h2>
        </div>
        </div>
 
    <div className="flex w-full flex-col gap-6 px-5">
    
    {restaurant.map(restaurant =>(
        <RestaurantItems key={restaurant.id} restaurant={restaurant} classname="min-w-full max-w-full"/>
    ))}
    </div> 
       </div>);
}
 
export default RecomendedRestaurants;