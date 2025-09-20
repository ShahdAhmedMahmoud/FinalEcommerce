import React from 'react'
import { brandCardProps } from './BrandCard.types'
import Link from 'next/link'


const BrandCard = ({brand}:brandCardProps) => {
  console.log("brand in card", brand);

  return (
 <Link href={`/brandsDetails/${brand._id}`}>
     <div key={brand._id} className=" p-b rounded-lg border border-black ">
        <img src={brand.image} alt={brand.name} className="w-full" />
        <h2 className='mx-auto text-green-900 text-center text-4xl'>{brand.name}</h2>
      </div>
 </Link>
  )
}

export default  BrandCard
