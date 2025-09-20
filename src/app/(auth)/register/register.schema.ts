  
  
  
 import * as zod from 'zod'; 
  
    
export  const schema = zod.object({
        name:zod.string().nonempty("Name is Required").min(3,"Name must be at least 3 chars").max(10,"Max 10"),
        email:zod.email("Email is not in format"),
        password:zod.string().nonempty('password is requred').regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,"Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:"),
        rePassword:zod.string().nonempty('password is requred').regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,"Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:"),
   
      phone:zod.string().nonempty('phone is required').regex(/^01[0125][0-9]/,"Phone must be an Egyption")
     ,
    }) .refine(function(object){

       return object.password === object.rePassword;
        

      },{path:['rePassword'],error:"password are in-match"});

