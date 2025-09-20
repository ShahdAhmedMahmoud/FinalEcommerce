// import { NextAuthOptions } from "next-auth";
// import Credentials from "next-auth/providers/credentials";
// import {jwtDecode} from 'jwt-decode'



// export  const nextAuthConfig:NextAuthOptions ={
//     providers:[
//         // credentials
//         Credentials({
//             name:"Fresh Cart",
//             authorize:async function(credentials,req){
//                 //function that should handle the login process
//                 //must return =>null , object
//                 console.log('credentialss',credentials);
                


//               const res= await  fetch('https://ecommerce.routemisr.com/api/v1/auth/signin',
//                     {method:"post",
//                         body:JSON.stringify(credentials),
//                         headers:{
//                             "content-Type":"application/json"
//                         }
//                     });
//                     const finalResult = await res.json();
//                     console.log('finalResult authorize',finalResult);
//                     if(finalResult.message =="success"){
//                         // const{role,...rest}=finalResult.user;
//                         // return rest;
//                         const deCodedOgject:{id:string} =jwtDecode(finalResult.token);
//                         return {
                           
//                             id:deCodedOgject.id,
//                             name:finalResult.user.name,
//                             email:finalResult.user.email,
//                             credentialsToken:finalResult.token,

//                         }
//                         // return finalResult.user;
//                     }
                    
//                         return null;

                  
                    
                    
//             },
//             credentials:{
//             email:{label:"User Email:",type:"email",placeholder:"hoda@gmail.com"},
//             password:{label:"password",type:"password"},
            
//         }

//         })
//     ],
//     pages:{
//         signIn:'/login'
//     },
//     callbacks:{
        
        
//         jwt(params){
//             console.log('params',params)
//             // params.user
//             // params.token
//             if(params.user){
//                 params.token.credentialsToken = params.user.credentialsToken;
//                 params.token.userId = params.user.id;
//             }
//             return params.token;
//         },
//         session(params){
//             console.log('params',params);
//             params.session.user.id = params.token.userId;
//             // params.session.ayKey =""
            
//           return  params.session
//         }
//     },
//     session:{
//         maxAge:  60*60*24
//     }
// } 



// import { NextAuthOptions } from "next-auth";
// import Credentials from "next-auth/providers/credentials";
// import { jwtDecode } from "jwt-decode";

// export const nextAuthConfig: NextAuthOptions = {
//   providers: [
//     Credentials({
//       name: "Fresh Cart",
//       authorize: async function (credentials, req) {
//         console.log("credentialss", credentials);

//         const res = await fetch(
//           "https://ecommerce.routemisr.com/api/v1/auth/signin",
//           {
//             method: "post",
//             body: JSON.stringify(credentials),
//             headers: {
//               "content-Type": "application/json",
//             },
//           }
//         );

//         const finalResult = await res.json();
//         console.log("finalResult authorize", finalResult);

//         if (finalResult.message == "success") {
//           const deCodedOgject: { id: string } = jwtDecode(finalResult.token);
//           return {
//             id: deCodedOgject.id,
//             name: finalResult.user.name,
//             email: finalResult.user.email,
//             credentialsToken: finalResult.token,
//           };
//         }

//         return null;
//       },
//       credentials: {
//         email: {
//           label: "User Email:",
//           type: "email",
//           placeholder: "hoda@gmail.com",
//         },
//         password: { label: "password", type: "password" },
//       },
//     }),
//   ],
//   pages: {
//     signIn: "/login",
//   },
//   callbacks: {
//     jwt({ token, user }) {
//       console.log("params", { token, user });
//       if (user) {
//         token.credentialsToken = (user as any).credentialsToken;
//         token.userId = user.id;
//       }
//       return token;
//     },
//     session({ session, token }) {
//       console.log("params", { session, token });
//       if (session.user) {
//         session.user.id = token.userId as string;
//         (session.user as any).credentialsToken = token.credentialsToken as string;
//       }
//       return session;
//     },
//   },
//   session: {
//     maxAge: 60 * 60 * 24, // 1 day
//   },
// };


// import { NextAuthOptions, User } from "next-auth";
// import Credentials from "next-auth/providers/credentials";
// import { jwtDecode } from "jwt-decode";

// export const nextAuthConfig: NextAuthOptions = {
//   providers: [
//     Credentials({
//       name: "Fresh Cart",
//       authorize: async function (credentials, req) {
//         console.log("credentialss", credentials);

//         const res = await fetch(
//           "https://ecommerce.routemisr.com/api/v1/auth/signin",
//           {
//             method: "post",
//             body: JSON.stringify(credentials),
//             headers: {
//               "content-Type": "application/json",
//             },
//           }
//         );

//         const finalResult = await res.json();
//         console.log("finalResult authorize", finalResult);

//         if (finalResult.message == "success") {
//           const deCodedOgject: { id: string } = jwtDecode(finalResult.token);
//           return {
//             id: deCodedOgject.id,
//             name: finalResult.user.name,
//             email: finalResult.user.email,
//             credentialsToken: finalResult.token,
//           };
//         }

//         return null;
//       },
//       credentials: {
//         email: {
//           label: "User Email:",
//           type: "email",
//           placeholder: "hoda@gmail.com",
//         },
//         password: { label: "password", type: "password" },
//       },
//     }),
//   ],
//   pages: {
//     signIn: "/login",
//   },
//   callbacks: {
//     jwt({ token, user }) {
//       console.log("params", { token, user });
//       if (user) {
//         const customUser = user as User & { credentialsToken?: string };
//         token.credentialsToken = customUser.credentialsToken;
//         token.userId = user.id;
//       }
//       return token;
//     },
//     session({ session, token }) {
//       console.log("params", { session, token });
//       if (session.user) {
//         session.user.id = token.userId as string;
//         session.user.credentialsToken = token.credentialsToken as string;
//       }
//       return session;
//     },
//   },
//   session: {
//     maxAge: 60 * 60 * 24, // 1 day
//   },
// };

import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { jwtDecode } from "jwt-decode";

export const nextAuthConfig: NextAuthOptions = {
  providers: [
    Credentials({
      name: "Fresh Cart",
      credentials: {
        email: { label: "User Email:", type: "email", placeholder: "hoda@gmail.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signin", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credentials),
          });

          const finalResult = await res.json();
          console.log("finalResult authorize", finalResult);

          if (finalResult.message === "success" && finalResult.token) {
            const decodedObject: any = jwtDecode(finalResult.token);
            return {
              id: decodedObject.id,
              name: finalResult.user?.name,
              email: finalResult.user?.email,
              credentialsToken: finalResult.token,
            };
          }
          return null;
        } catch (err) {
          console.error("Authorize error:", err);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.credentialsToken = (user as any).credentialsToken;
        token.userId = user.id;
      }
      return token;
    },
    session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.userId as string;
        (session.user as any).credentialsToken = token.credentialsToken as string;
      }
      return session;
    },
  },
  session: {
    maxAge: 60 * 60 * 24, // 1 day
  },
};

