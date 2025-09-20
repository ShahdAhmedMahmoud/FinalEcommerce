
import React from 'react'
import { getSpecificProduct } from '@/app/_services/product.services'
import { Button } from '@/components/ui/button';
import AddProductBtn from '@/app/_components/AddProductBtn/AddProductBtn';


type ProductDetailsProps ={
  params : { id:string}

}
export default async function ProductDetails({params}:ProductDetailsProps) {


  
 const object = await getSpecificProduct(params.id);

if(!object){
  return;
}
  
  return (
    <div className='grid  grid-cols-4 items-center  px-10 py-5'> 

      <div className='col-span-1'>
        <img src={object?.imageCover} alt={object?.title} className='w-full' />
      </div>
      <div className='col-span-3'>

        <h1 className='font-bold text-xl'>{object?.title}</h1>
        <p className='text-gray-500 text-lg'>{object?.description}</p>
        <h5>Category :{object?.category.name}</h5>
        <h5>Brand :{object?.brand.name}</h5>
         <h5>price:{object?.priceAfterDiscount ? <>
          <span className='line-through me-3 text-red-900'>{object?.price}</span>
          <span>{object?.priceAfterDiscount}</span>
        
        </> :
        <span>
            {object?.price}
        </span>
        
        }</h5>
        <h5>{object?.ratingsAverage}<i className="fa-solid fa-star text-amber-300"></i></h5>
        

        <AddProductBtn id={object?.id} />



        

      </div>
      
    </div>
  )
}

