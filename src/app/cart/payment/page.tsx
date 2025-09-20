'use client'


import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import  React, { useContext, useEffect, useRef, useState } from 'react'
import { createCashOrder, createCheckoutSession } from './order.actions'
import { getUserCart } from '@/app/_services/cart.services'
import { CartContext } from '@/app/_components/MySessionProvider/CartContext'
import { toast } from 'sonner'
export default function Payment(){
 const {updateCartCount}   = useContext(CartContext);

    const cityInput = useRef<HTMLInputElement>(null);
    const phoneInput = useRef<HTMLInputElement>(null);
    const detailsInput = useRef<HTMLInputElement>(null);

     
   const [cartId , setCartId] =useState<null|string>(null);




   async function handleGettingUserCart(){
       const res=await getUserCart();
       setCartId(res.cartId)


    }

    useEffect(function(){
     handleGettingUserCart();

    },[]);

    async function makeCashOrder(){
     const address = {
          details: detailsInput.current?.value || " ",
          phone: phoneInput.current?.value || " ",
          city: cityInput.current?.value || " ",
     }
     //  createCashOrder(cartId||'',address)
      const isSuccessed =  await  createCashOrder(cartId||'',address);
      if(isSuccessed){
          toast.success("order created successfully");
          updateCartCount(0);
      }
      else{
          toast.error("Error occurred")
      }

     }

     
    async function makeOnlineOrder(){
               const address = {
          details: detailsInput.current?.value || " ",
          phone: phoneInput.current?.value || " ",
          city: cityInput.current?.value || " ",
     }
       const res  = await createCheckoutSession(cartId||'',address);
       if(res == false){
          toast.error("error");
       }
       else{
          window.open(res,"_self");
       }
     }

    return(
        <div className = "w-1/2 mx-auto ">

         <div className="">
              <Label>City</Label>
              <Input ref={cityInput}/>
         </div>
         <div className="">
              <Label>Phone</Label>
              <Input ref={phoneInput} type='tel'/>
         </div>
         <div className="">
              <Label>details</Label>
              <Input ref={detailsInput}/>
         </div>

         <Button onClick={makeCashOrder} className="cursor-pointer mt-3">Make Cash order</Button>
         <Button onClick={makeOnlineOrder} className="cursor-pointer mt-3">Make Online order</Button>
        </div>
    )
}