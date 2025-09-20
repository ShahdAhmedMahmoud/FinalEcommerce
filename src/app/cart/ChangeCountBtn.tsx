"use client";

import { Button } from '@/components/ui/button'
import React, { useContext } from 'react'
import { changeCount } from './cartactions';
import { toast } from 'sonner';
import { CartContext } from '../_components/MySessionProvider/CartContext';

export default function ChangeCountBtn({isIncrement = false,id,newCount}
    :{
        newCount:number ;
        isIncrement?:boolean;
        id:string
    }) {

    const {updateCartCount} = useContext(CartContext);   

   async function handleChangeCount(){
      const output =   await changeCount(id,newCount);
      if(output === null){
        toast.error("Error occurred try again")
      }
      else{
        toast.success(`Product count is : ${newCount}`);
        updateCartCount(output);
      }

    }
  return (
    <Button onClick={handleChangeCount} disabled={newCount == 0} className ="cursor-pointer">
        {isIncrement ? "+":"-"}
    </Button> 
  )
}
