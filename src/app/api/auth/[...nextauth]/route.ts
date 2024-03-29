import { authenticate } from "@/app/hooks/auth.hook";
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        dni: {
          label: "dni",
          type: "string",
        },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials: any, req) {
        const user = await authenticate(
          credentials?.dni,
          credentials?.password
        );
        return user as { id: string; name: string; role: string };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, token }: any) {
      if (token && token.user) {
        session.user = token.user;
      }
      return session;
    },
    async jwt({ token, user }: any) {
      if (!token.user) {
        token.user = {};
      }
      if (user) {
        token.user.id = user.id;
        token.user.name = user.name;
        token.user.role = user.role;
      }
      return token;
    },
  },
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
