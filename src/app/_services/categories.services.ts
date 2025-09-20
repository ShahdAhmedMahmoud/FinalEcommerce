import { CategoryType } from "../_interfaces/products";

export async function getAllCategories():Promise<null| CategoryType[] >{
    try {
        const res = await fetch('https://ecommerce.routemisr.com/api/v1/categories');
        const finalRes= await res.json();
        // console.log('finalRess',finalRes.data);
        return finalRes.data;
        
        
    } catch (error) {
        console.log(error);
        return null;
        
    }
    
}


  export async function getSpecificCategory(_id:string):Promise<CategoryType|null>{


      try {
    
      const response = await fetch(`https://ecommerce.routemisr.com/api/v1/categories/${_id}` );
      
      const data = await response.json();
      console.log('finalres',data);
      console.log("incoming _id", _id);

      return data.data;
      
     } catch (error) {
      console.log('error',error);
      return null;
      
      
     }
  }