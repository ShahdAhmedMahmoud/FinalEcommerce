"use client"


import React from 'react'
import { useForm } from 'react-hook-form'

import { Form,FormField,FormItem,FormLabel,FormControl,FormDescription,FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import {schema} from "./login.schema";
import { LoginFormType } from './login.type';
import { handleLogin } from './login.actions';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import ForgetPassword from "./../forgetPassword/ForgetPassword"; 
import { signIn } from 'next-auth/react';



const LoginForm = () => {
const router=  useRouter();

  



    
  const Rhfobj= useForm({
    resolver:zodResolver(schema)
  });
  const {control,handleSubmit} = Rhfobj;
  

 async function mySubmit(data:LoginFormType){
    // console.log('data',data);

    //BE
    // signIn('credentials',{
    //  email:data.email,password:data.password
    // });
    // signIn('credentials',{
    //  ...data,redirect:true,callbackUrl:'/'
    // });
   const res = await signIn('credentials',{
     ...data,redirect:false
    });
    if(res?.ok){
        toast.success("welcome back",{position:"top-right",duration:3000});
    // router.push('/');
    window.location.href="/";

    }else{
      toast.error("Email or password is invaild",{position:"top-right",duration:3000});

    }
  //  const resOutput = await handleLogin(data);
   
  //  if(resOutput===  true){
  //   toast.success("welcome back",{position:"top-right",duration:3000});
  //   router.push('/');
    
  //  }else{
  //     toast.error(resOutput,{position:"top-right",duration:3000});
  //  }

    
  }

  return (
    <div>
<Form {...Rhfobj}>
<form onSubmit={handleSubmit(mySubmit)}>
 
  <FormField
    control={control}
    name="email"
    render={({field}) => (
      <FormItem>
        <FormLabel>Email: </FormLabel>
        <FormControl>
          { /* Your form field */}
          <Input {...field}  type="email"/>
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />
  <FormField
    control={control}
    name="password"
    render={({field}) => (
      <FormItem>
        <FormLabel>password: </FormLabel>
        <FormControl>
          { /* Your form field */}
          <Input {...field} type="password"/>
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />



  <Button className='cursor-pointer'>Login</Button>
</form>
</Form>
<ForgetPassword />
    </div>
  )
}

export default LoginForm
