import { DefaultSession, DefaultUser } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      user_id: number;
      user_name: string;
      role: string;
      location: string;
      mobile_number: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    id: string;
    user_id: number;
    user_name: string;
    role: string;
    location: string;
    mobile_number: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    user_id: number;
    user_name: string;
    role: string;
    location: string;
    mobile_number: string;
  }
}
