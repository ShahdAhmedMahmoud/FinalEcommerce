import Image from "next/image";
import { ProductType } from "./_interfaces/products";
import ProductCard from "./_components/ProductCard/ProductCard";
import { getAllProducts } from "./_services/product.services";
import HomeSlider from "./_components/HomeSlider/HomeSlider";
import CategoriesSlider from "./_components/CategoriesSlider/CategoriesSlider";



export default async function Home() {



 const allPro= await getAllProducts();
 console.log('allProducts',allPro);

 



  
  return (
 <>
 <div className="flex flex-col gap-2">
     <HomeSlider/>
    <CategoriesSlider/>
 </div>




    <div className="grid grid-cols-1    sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-3/4 mx-auto">

      {allPro?.map((product)=>
         <ProductCard key={product.id} product={product}/>)
         
         }

    </div>
 
 
 </>
 
  );
}
