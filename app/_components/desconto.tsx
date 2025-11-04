import { Product } from "@prisma/client";
import { ArrowDownIcon } from "lucide-react";

interface DescontoPorcentoProps{
    product: Pick<Product,"discountPercentage">
}


const DescontoPorcento = ({product}:DescontoPorcentoProps) => {
    return (
    <div className="top-2 left-2 bg-primary text-[#fff] rounded-full px-2 py-[2px] flex items-center justify-center gap-[1px] ">
                <ArrowDownIcon size={12}/>
                <span className="font-semibold text-xs">{product.discountPercentage} %</span>
            </div> );
}
 
export default DescontoPorcento;