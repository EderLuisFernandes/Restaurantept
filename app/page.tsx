
import CategoryList from "./_components/catgoryList"
import Header from "./_components/header"
import Search from "./_components/search"
import Carrosel from "./_components/carrosel"
import PorductList from "./_components/product-list"
import { Button } from "./_components/ui/button"
import {ChevronsRightIcon } from "lucide-react"


const Home = ()=>{
  return (<>
  <Header/>
  <div className="px-5 pt-6 " ><Search/></div>
  <div className="pt-6 px-5 "> <CategoryList/></div>
 
  <div className="flex justify-center items-center px-5  pt-4">
  <Carrosel/>
  </div>
  
  <div className="pt-3">
    <div className="px-5 flex justify-between items-center">
      <h2 className="font-semibold">Pedidos Recomendados</h2>
      <Button variant="ghost" className=" hover:bg-transparent text-primary p-0 flex items-center justify-center">
        Ver todos
        <ChevronsRightIcon size={16}/>
      </Button>
    </div>
  <PorductList/>

  </div>

 
  </>)
}

export default Home