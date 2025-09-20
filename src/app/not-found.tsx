import React from 'react'
import Image from 'next/image'
import errorImage from "./../../public/screens/404.jpg"
const ErrorPage = () => {
  return (
    <div className='w-full md:w-[90%]  mx-auto  px-5 my-5 md:px-0 '>
     <Image alt='' src={errorImage}/>
    </div>
  )
}

export default ErrorPage 
