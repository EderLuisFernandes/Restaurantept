import { Carousel } from "./ui/carousel";
import Image from "next/image";
import banner from "../../public/promo-banner-01.png"
const Carrosel = () => {
    return ( <>
    
    <Carousel className="w-full px-5 pt-3 ">
        <Image src={banner} alt="Não Compensa"/>
    </Carousel>
    </> );
}
 
export default Carrosel;