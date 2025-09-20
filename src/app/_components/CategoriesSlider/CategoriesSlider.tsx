import { getAllCategories } from '@/app/_services/categories.services'
import React from 'react'
import MySwiper from '../MySwiper/MySwiper';

const CategoriesSlider =async () => {

  const allCategories = await getAllCategories();
  console.log('allCategories',allCategories);

  if(allCategories ==null){
    return;
  }
  
  return (
    <div>
        <MySwiper slidesPerView={7}  imagesList={allCategories?.map((category)=>category.image)}/>
      
    </div>
  )
}

export default CategoriesSlider
