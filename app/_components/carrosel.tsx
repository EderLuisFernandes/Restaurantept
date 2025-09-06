"use client"
import {Carousel, CarouselContent,CarouselItem,CarouselPrevious,CarouselNext } from "./ui/carousel";
import Image from "next/image";
import banner from "../../public/promo-banner-01.png"
import banner2 from "../../public/promo-banner-02.png"
import Autoplay from "embla-carousel-autoplay"
import * as React from "react"

const Carrosel = () => {
const autoplay = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  )


    return ( <div className="flex items-center justify-center w-full h-auto  overflow-x-hidden" >
  <Carousel className="w-full"
 
  >
    <CarouselPrevious />
    <CarouselContent>
      <CarouselItem className="w-full">
        <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
          <Image
            src={banner}
            alt="Banner1"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
      </CarouselItem>
      <CarouselItem className="w-full">
        <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
          <Image
            src={banner2}
            alt="Banner2"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </CarouselItem>
    </CarouselContent>
    <CarouselNext />
  </Carousel>
</div>
);
}   
 
export default Carrosel;