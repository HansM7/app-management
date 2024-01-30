// import { authOptions } from "@/app/auth.config";
// import NextAuth from "next-auth";

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };

import { authenticate } from "@/app/hooks/auth.hook";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
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

        return user ? user : null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      console.log(token);
      session.user = token as any;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };
