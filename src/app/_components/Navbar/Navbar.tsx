"use client"

import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import logo from '../../../../public/screens/freshcart-logo.svg'
import Image from 'next/image'
import { signOut, useSession } from 'next-auth/react'
import { getUserCart } from '@/app/_services/cart.services'
import { CartContext } from '../MySessionProvider/CartContext'



// static img => <image/>
// api img => img
const Navbar = () => {
    const {data:isAuthenticated} =useSession();
    const [initialCartCount,setCartCount] =  useState(0);
    // console.log('session',session);
    // session.status
    const {cartCount}=useContext(CartContext);

   useEffect(function(){
      getUserCart().then(res => {
        setCartCount(res.numOfCartItems);
      })
   },[]);


    function handleLogout(){
        signOut({redirect:true,callbackUrl:'/login'});

    }

    
  return (
<div className='bg-slate-100 py-5 '>
    <div className='w-full lg:w-[90%] mx-auto flex flex-col lg:flex-row  justify-between items-center text-center'>

        {/* logo && links */}
          <ul className='flex flex-col lg:flex-row gap-5 text-center items-center'>
            <li>
                <Link href='/'>
                    <Image src={logo} alt='logo'  />
                </Link>
            </li>
            {isAuthenticated && <>
            <li>
                <Link href='/'>Home</Link>
            </li>
           
            <li>
                <Link href='/wishList'>wishList</Link>
            </li>
            <li>
                <Link href='/product'>Products</Link>
            </li>
            <li>
                <Link href='/categories'>catgories</Link>
            </li>
            <li>
                <Link href='/brands'>brands</Link>
            </li>
             <li>
                <Link href='/cart'>Cart:{cartCount || initialCartCount}</Link>
            </li>
            
            </>}

            
            

          </ul>

          {/* icons && buttons  */}
      <div className='flex flex-col lg:flex-row gap-2 text-center items-center'>
         <div  >
        <i className='mx-2 fab fa-facebook-f'></i>
        <i className='mx-2 fab fa-youtube'></i>
        <i className='mx-2 fab fa-linkedin'></i>
        <i className='mx-2 fab fa-github'></i>
         </div>
         {! isAuthenticated && <>
         
         
         <div>
        <Link href='/login'>Login</Link>
         </div>
         <div>
         <Link href='/register'>Register</Link>
         </div>

       
         
         
         </>}
         {isAuthenticated&&   <div>

        <span onClick={handleLogout} className="cursor-pointer ">
            Logout
        </span>
         </div>}


      </div>

    </div>






</div>


     



  )
}

export default Navbar
