import { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcryptjs from "bcryptjs";
import { getStaff } from "@/components/dashboard/staff/services/staffCrud";
import { Staff } from "@prisma/client";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials.password) {
            throw new Error("Missing email or password");
          }

          const staff = await getStaff(credentials.email);

          if (!staff) {
            throw new Error("No user found with the provided email");
          }

          const passwordMatch = await bcryptjs.compare(
            credentials.password,
            staff.password
          );

          if (!passwordMatch) {
            throw new Error("Incorrect password");
          }

          return {
            id: staff.id.toString(),
            user_id: staff.id,
            user_name: staff.name,
            email: staff.email,
            name: staff.name,
            location: staff.location,
            role: staff.role,
            mobile_number: staff.number,
          };
        } catch (error) {
          console.error("Authorization error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user = {
          id: token.id,
          user_id: token.user_id,
          user_name: token.user_name,
          email: token.email,
          role: token.role,
          location: token.location,
          mobile_number: token.mobile_number,
          name: session.user.name,
          image: session.user.image,
        };
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        const u = user as unknown as Staff;
        token.user_id = u.id;
        token.user_name = u.name;
        token.email = u.email;
        token.role = u.role;
        token.location = u.location;
        token.mobile_number = u.number;
      }
      return token;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
};
