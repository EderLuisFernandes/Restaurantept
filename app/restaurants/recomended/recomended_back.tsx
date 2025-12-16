"use client"
import { Button } from "@/app/_components/ui/button";
import UseBackPage from "@/app/_components/ui/backpage";


import { ChevronLeftCircleIcon } from "lucide-react";

const RecomendedBack = () => {
    const back = UseBackPage()

    return ( 
    <Button onClick={back}>
   <ChevronLeftCircleIcon size={16}/>
    </Button> );
}
 
export default RecomendedBack;