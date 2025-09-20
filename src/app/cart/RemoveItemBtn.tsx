"use client";

import { Button } from "@/components/ui/button";
import { removeItemForm } from "./cartactions";
import { toast } from "sonner";
import { CartContext } from "../_components/MySessionProvider/CartContext";
import { useContext } from "react";

export default function RemoveItemBtn({id}:{id:string}){
   const {updateCartCount} =   useContext(CartContext);
   async function handleRemoveItem(){
      const output =   await removeItemForm(id);
      if(output==null){
        toast.error("couldnot remove item , try again");

      }
      else{
        toast.success("Product removed successfully");
        updateCartCount(output);
      }



    }
    return (
          <Button onClick={handleRemoveItem} variant={'destructive'} className = 'cursor-pointer w-full mt-1'>Remove</Button>
    )
}
