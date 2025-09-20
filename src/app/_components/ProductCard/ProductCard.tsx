import React from 'react'
import { ProductCardProps } from './ProductCard.types'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import AddProductBtn from '../AddProductBtn/AddProductBtn'


const ProductCard = ({product}:ProductCardProps) => {
  return (
    <div  className="bg-blue-300 p-b rounded-lg">
 <Link href={`/productDetails/${product.id}`}>
     
        <img src={product.imageCover} alt={product.title} className="w-full" />
        <h2>{product.title.split(' ',2).join(' ')}</h2>
        {/* <h5>Price:{product.priceAfterDiscount?? product.price}</h5> */}
        <h5>price:{product.priceAfterDiscount ? <>
          <span className='line-through me-3 text-red-900'>{product.price}</span>
          <span>{product.priceAfterDiscount}</span>
        
        </> :
        <span>
            {product.price}
        </span>
        
        }</h5>

        <h5>{product.ratingsAverage} <i className="fa-solid fa-star text-amber-300"></i></h5>
        
</Link>
<AddProductBtn id={product.id}/>

      </div>
 

  )
}

export default ProductCard
