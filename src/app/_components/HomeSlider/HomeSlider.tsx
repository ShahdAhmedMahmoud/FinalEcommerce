import React from 'react'
import MySwiper from '../MySwiper/MySwiper'

import img1 from './../../../../public/screens/slider/slider-image-1.jpeg'
import img2 from './../../../../public/screens/slider/slider-image-2.jpeg'
import img3 from './../../../../public/screens/slider/slider-image-3.jpeg'
import blog1 from './../../../../public/screens/slider/blog-img-1.jpeg'
import blog2 from './../../../../public/screens/slider/blog-img-2.jpeg'

import Image from 'next/image';

const HomeSlider = () => {
  return (
    <>
 <div className=" px-10 flex">
   <MySwiper  imagesList={[img1.src,img2.src,img3.src]}/>
   <div className="w-1/4">
   <Image src={blog1} className="w-full h-[200px]" alt="blog1"/>
   <Image src={blog2} className="w-full h-[200px]" alt="blog2"/>

   </div>
 </div>
    </>
  )
}

export default HomeSlider
