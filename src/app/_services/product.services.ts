import { cookies } from "next/headers";
import { ProductType } from "../_interfaces/products";

export async function getAllProducts():Promise<ProductType[]|null>
{
     try {

      // const cookie = await cookies();
      // console.log('token',cookie.get('user-token')?.value);
      
       const response = await fetch("https://ecommerce.routemisr.com/api/v1/products",{
        cache:"force-cache"
       } );
      //  const response = await fetch("https://ecommerce.routemisr.com/api/v1/products" );
      
      const {data} = await response.json();
      // console.log(data);
      return data;
      
     } catch (error) {
      console.log('error',error);
      return null;
      
      
     }
    
  }



  export async function getSpecificProduct(id:string):Promise<ProductType|null>{


      try {
    //    const response = await fetch("https://ecommerce.routemisr.com/api/v1/products",{
    //     cache:"force-cache"
    //    } );
       const response = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}` );
      
      const data = await response.json();
      // console.log('finalres',data);
      return data.data;
      
     } catch (error) {
      console.log('error',error);
      return null;
      
      
     }
  }