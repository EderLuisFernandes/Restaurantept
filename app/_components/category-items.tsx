import { Category } from "@prisma/client";
import Image from "next/image";
interface CategoryItemProps{
    category: Category
}
const CategoryItems = ({category}: CategoryItemProps) => {
   return ( 
   <div className="flex items-center gap-2 py-3 px-4 bg-white shadow-md rounded min-w-[150px] cursor-pointer">
    <Image src={category.imageUrl} alt={category.name} height={30} width={30}/>
    <span className="text-sm font-semibold">{category.name}</span>

   </div> );    
}
 
export default CategoryItems;