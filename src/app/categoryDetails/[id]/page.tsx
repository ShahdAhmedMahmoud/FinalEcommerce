import React from 'react'
import { getSpecificCategory } from '@/app/_services/categories.services'


type categoryDetailsProps ={
  params : { id:string}

}
 const CategoryDetails = async ({params}:categoryDetailsProps) => {
     
     const object = await getSpecificCategory(params.id);
      return (
        <div className='grid  grid-cols-4 items-center  gap-3 px-10 py-5'> 
          <div className='col-span-2'>
            <div className='h-[600px]'>
              <img src={object?.image} alt={object?.name} className='w-full h-full object-cover' />
            </div>
          </div>
          <div className='col-span-2'>
            <h1 className='font-bold text-4xl'>{object?.name}</h1>
            <p className='text-gray-500 text-3xl'>{object?.slug}</p>
          </div>
          
        </div>
      )
 
}

export default CategoryDetails
