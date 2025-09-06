
import CategoryList from "./_components/catgoryList"
import Header from "./_components/header"
import Search from "./_components/search"
import Carrosel from "./_components/carrosel"


const Home = ()=>{
  return (<>
  <Header/>
  <div className="px-5 pt-6 " ><Search/></div>
  <div className="pt-6 px-5"> <CategoryList/></div>
 
  <div>
 <Carrosel/>
  </div>
  </>)
}

export default Home