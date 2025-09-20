"use client"

import { addProductToCart } from '@/app/cart/cartactions';
import { Button } from '@/components/ui/button'
import React, { useContext } from 'react'
import { toast } from 'sonner';
import { CartContext } from '../MySessionProvider/CartContext';
//Button reusable inthe 2 places
export default function AddProductBtn({id}:{id:string}) {
  const {updateCartCount} = useContext(CartContext)

   async function handleAddToCard(){
        console.log("adding");
      const isAddedSuccessfully = await addProductToCart(id);
      if(isAddedSuccessfully){
         toast.success("product added Successfully", {position:"top-right"});
         updateCartCount(isAddedSuccessfully);
         
      }
      else{
         toast.error("Error occured while adding", {position:"top-right"});
      }

        //Calling API?
        

    }
  return (
    <>
    <Button onClick={handleAddToCard} className='w-full cursor-pointer'>Add to cart</Button>
      
    </>
  )
}
