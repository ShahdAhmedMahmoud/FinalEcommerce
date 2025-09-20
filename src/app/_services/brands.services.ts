import { BrandType } from "../_interfaces/products";

export async function getAllBrands():Promise<null| BrandType[] >{
    try {
        const res = await fetch('https://ecommerce.routemisr.com/api/v1/brands');
        const finalRes= await res.json();
        console.log('finalRess',finalRes.data);
        return finalRes.data;
        
        
    } catch (error) {
        console.log(error);
        return null;
        
    }
    
    
}

export async function getSpecificBrand(_id:string):Promise<BrandType|null>{
      try {
      const response = await fetch(`https://ecommerce.routemisr.com/api/v1/brands/${_id}` );
      
      const data = await response.json();
    //   console.log('finalres',data);
    //   console.log("incoming _id", _id);
    // console.log(data.data);

      return data.data;
      
     } catch (error) {
      console.log('error',error);
      return null;
      
      
     }
  }