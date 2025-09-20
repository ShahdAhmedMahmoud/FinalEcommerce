import React from 'react'
import { getAllBrands } from "./../_services/brands.services";
import BrandCard from './../_components/BrandCard/BrandCard';

const Brands =async () => {
    const allBrand= await getAllBrands();
   console.log('allBrand',allBrand);
  return (
       <>
       <div className="grid grid-cols-1     md:grid-cols-2 lg:grid-cols-3 gap-5 w-3/4 mx-auto">
          {allBrand?.map((brand)=> <BrandCard key={brand._id} brand={brand}/>)}
        </div>
      
    </>
  )
}
export default Brands
