
'use server';
import { getMyUserToken } from "@/utiles/utiles";
import { CartResponseType, ItemType } from "../_interfaces/cart.types";




export async function  getUserCart():Promise<CartResponseType>{
    

    const token=  await getMyUserToken();
       const res =await fetch("https://ecommerce.routemisr.com/api/v1/cart",{
      headers:{
        token:token as string,
      },
      cache:"force-cache",
      next : {tags:['getUserCart']}
    });
    const final = await res.json();
    // console.log("final",final);
    const{numOfCartItems,data:{products,totalCartPrice} , cartId } = final;
    console.log("products",products)
    return {numOfCartItems,products,totalCartPrice ,cartId}
} 