import React from 'react'
import { categoryCardProps } from './CategoryCard.types'
import Link from 'next/link'



const categoryCard = ({category}:categoryCardProps) => {
  return (
 <Link href={`/categoryDetails/${category._id}`}>
     <div key={category._id} className=" p-b rounded-lg border border-black hover:scale-105 transition-transform duration-500 ease-in-out overflow-hidden  my-6">
        <div className="h-[500px]">
          <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
        </div>


        <h2 className='mx-auto text-green-900 text-center text-4xl'>{category.name}</h2>
      </div>
 </Link>
  )
}

export default categoryCard
