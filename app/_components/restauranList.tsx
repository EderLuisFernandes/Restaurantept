import { Restaurant } from "@prisma/client";
import { db } from "../_lib/Prisma";
import RestaurantItems from "./restaurantItems";
const RestaurantList = async () => {
    // pega os restaurant com muitos pedidos
    const restaurant = await db.restaurant.findMany({
        take:10
    })
    
    return (<div className="flex overflow-x-scroll [&::-webkit-scrollbar]:hidden px-5 pt-4 gap-3">
         {
            restaurant.map(restaurant => <RestaurantItems key={restaurant.id} restaurant={restaurant}/>)
         }
    </div>  );

}
 
export default RestaurantList;