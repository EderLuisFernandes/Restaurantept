"use client"
import {Carousel, CarouselContent,CarouselItem,CarouselPrevious,CarouselNext } from "./ui/carousel";
import Image,{  StaticImageData} from "next/image";
import Autoplay from "embla-carousel-autoplay"
import * as React from "react"

interface CarroselProps{
  images: {src:StaticImageData; alt:string}[]
}


const Carrosel = ({images}:CarroselProps) => {
const autoplay = React.useRef(
    Autoplay({ delay: 8000, stopOnInteraction: false })
  )


    return ( <div className="flex items-center justify-center w-full h-auto  overflow-x-hidden" >
  <Carousel className="w-full"
  plugins={[autoplay.current]}
  >
    <CarouselPrevious />
    <CarouselContent>

      {images.map( (img,index) =>(
         <CarouselItem key={index} className="w-full">
        <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
          <Image
            src={img.src}
            alt ={img.alt}
            fill
            className="object-cover rounded-lg"
            priority = {index === 0}
          />
        </div>
      </CarouselItem>
      )
      )}
     
      
    </CarouselContent>
    <CarouselNext />
  </Carousel>
</div>
);
}   
 
export default Carrosel;