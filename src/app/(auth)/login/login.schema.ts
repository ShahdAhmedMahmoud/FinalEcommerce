  
  
  
 import * as zod from 'zod'; 
  
    
export  const schema = zod.object({
        email:zod.email("Email is not in format"),
        password:zod.string().nonempty('password is requred').regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,"Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:"), 
    }) 

