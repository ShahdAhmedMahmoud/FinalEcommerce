import NextAuth, { DefaultUser } from "next-auth";

declare module "next-auth" {
  interface User extends DefaultUser {
    credentialsToken?: string;
  }

  interface Session {
    user: User & {
      id?: string;
      credentialsToken?: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    credentialsToken?: string;
    userId?: string;
  }
}
