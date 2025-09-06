import { db } from "../_lib/Prisma";
import CategoryItems from "./category-items";
const CategoryList = async () => {
    // 1º pegar  as categoria do Database
    const categoria = await db.category.findMany({});
    // grid grid-cols-2 gap-2 md:flex md:justify-between md:flex-wrap md:gap-4
    return ( <div className="grid grid-cols-2 gap-2 md:flex md:justify-between md:flex-wrap md:gap-4">
    {/* //2º Redenrizar ou Mostrar os items */}
        {categoria.map(category => <CategoryItems key={category.id} category={category}/> )}
    </div> );
}
 
export default CategoryList;