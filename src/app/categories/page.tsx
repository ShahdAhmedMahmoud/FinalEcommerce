import React from 'react'


import { getAllCategories } from "./../_services/categories.services";
import CategoryCard from './../_components/CategoryCard/CategoryCard';

const Categories =async () => {
   const allCategory= await getAllCategories();
   console.log('allCategory',allCategory);
  return (
       <>
       <div className="grid grid-cols-1     md:grid-cols-2 lg:grid-cols-3 gap-5 w-3/4 mx-auto">
    
          {allCategory?.map((category)=> <CategoryCard key={category._id} category={category}/>)}
    
        </div>
      
    </>
  )
}

export default Categories

