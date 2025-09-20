"use client"


import React from 'react'
import { useForm } from 'react-hook-form'

import { Form,FormField,FormItem,FormLabel,FormControl,FormDescription,FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import {schema} from "./register.schema";
import { ResiterFormType } from './register.type';
import { handleRegister } from './register.actions';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';




const RegisterForm = () => {
   const router= useRouter();

  



    
  const Rhfobj= useForm({
    resolver:zodResolver(schema)
  });
  const {control,handleSubmit} = Rhfobj;
   /*
    {
      name": "Ahmed Abd Al-Muti",
      "email":"ahmedmuttii4012@gmail.com",
      "password":"Ahmed@123",
      "rePassword":"Ahmed@123",
      "phone":"01010700701"
  }
    
    
    */

 async function mySubmit(data:ResiterFormType){
    // console.log('data',data);

   const resOutput = await handleRegister(data);
   console.log('resOutput',resOutput);
   
   
   if(resOutput===  true){
    toast.success("congratulations created Successfully",{position:"top-right",duration:3000});
    router.push('/login');
    
   }else{
      toast.error(resOutput,{position:"top-right",duration:3000});
   }

    
  }

  return (
    <div>
<Form {...Rhfobj}>
<form onSubmit={handleSubmit(mySubmit)}>
      <FormField
    control={control}
    name="name"
    render={({field}) => (
      <FormItem>
        <FormLabel>Username: </FormLabel>
        <FormControl>
          { /* Your form field */}
          <Input {...field} />
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />
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
  <FormField
    control={control}
    name="rePassword"
    render={({field}) => (
      <FormItem>
        <FormLabel>rePassword: </FormLabel>
        <FormControl>
          { /* Your form field */}
          <Input {...field}  type="password"/>
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />
  <FormField
    control={control}
    name="phone"
    render={({field}) => (
      <FormItem>
        <FormLabel>phone: </FormLabel>
        <FormControl>
          { /* Your form field */}
          <Input {...field} type="tel" />
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />

  <Button>Register</Button>
</form>
</Form>
    </div>
  )
}

export default RegisterForm
