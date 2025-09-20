import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { getMyUserToken } from '@/utiles/utiles';
import React from 'react'
 
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CartResponseType, ItemType } from '../_interfaces/cart.types';
import { getUserCart } from '../_services/cart.services';
import RemoveItemBtn from './RemoveItemBtn';
import ChangeCountBtn from './ChangeCountBtn';
import Link from 'next/link';



const Cart =async () => {
 async function handleGetUserCart():Promise<CartResponseType>{

   const res = await getUserCart();
   return res;


  }


   const {numOfCartItems,products,totalCartPrice }  = await handleGetUserCart();
  return (
    <div>
      <h1>user Cart</h1>
      <div className='w-full flex justify-between'>
        <div className=''>
           <h2>You willPay :{totalCartPrice}LE</h2>
           <h3>Number ofItems : {numOfCartItems}</h3>
        </div>
        <div className=''>
          <Link href='/cart/payment'>Pay</Link>
          <Button className='cursor-pointer' variant={'destructive'}>Remove All</Button>
        </div>

      </div>
      


     
      {/* {products.map((product)=><h2>Hello</h2>)} */}
<div className = "w-1/2 mx-auto ">
      <Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-1/2">Product</TableHead>
      <TableHead>Price</TableHead>
      <TableHead>Count</TableHead>
      <TableHead className="text-right">Actions</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {products.map((item : ItemType)=>    <TableRow key={item._id}>
      <TableCell className="font-medium">
        <div className="">
          <img src = {item.product.imageCover} alt={item.product.title}
           className="w-full max-w-[300px] max-h-64"/>
           <h3></h3>
        </div>
      </TableCell>
      <TableCell>{item.price}</TableCell>
      <TableCell>{item.count}</TableCell>
      <TableCell className="text-right ">
        <div className=''>
          <div className = "flex gap-1 items-center">
            <ChangeCountBtn isIncrement id={item.product.id} newCount={item.count + 1}/>
              <Input className ="p-0.5 w-8 h-5"  value={item.count}/>

            <ChangeCountBtn id={item.product.id} newCount={item.count - 1}/>
           
            
            
          </div>
        <RemoveItemBtn id={item.product.id}/>
        </div>
      </TableCell>
    </TableRow>)}

  </TableBody>
</Table>



</div>
    </div>
  )
}

export default Cart
