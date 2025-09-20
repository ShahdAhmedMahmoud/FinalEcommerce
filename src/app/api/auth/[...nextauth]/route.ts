import { nextAuthConfig } from "@/next-auth/nextAuth.config";
import NextAuth from "next-auth";

const nextHandler = NextAuth(nextAuthConfig);
// export function GET(){}
// export function POST(){}

export{nextHandler as GET, nextHandler as POST}