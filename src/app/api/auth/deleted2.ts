// import { authenticate } from "@/app/hooks/auth.hook";
// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";

// export const handler = NextAuth({
//   session: {
//     strategy: "jwt",
//   },
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         dni: {
//           label: "dni",
//           type: "string",
//         },
//         password: { label: "password", type: "password" },
//       },
//       async authorize(credentials: any, req) {
//         const user = await authenticate(
//           credentials?.dni,
//           credentials?.password
//         );

//         return user ? user : null;
//       },
//     }),
//   ],
//   secret: process.env.NEXTAUTH_SECRET,
//   callbacks: {
//     // async jwt({ token, user }) {
//     //   return { ...token, ...user };
//     // },
//     async session({ session, token }) {
//       session.user = token as any;
//       return session;
//     },
//     async jwt({ token, user }) {
//       const newToken = { ...token };
//       if (user?.id) {
//         newToken.id = token.id;
//       }
//       if (user?.name) {
//         newToken.name = token.name;
//       }
//       newToken.role = token.role;
//       return newToken;
//     },

//     // async signIn({ user }) {
//     //   if (user === null) throw new Error("Credenciales incorrectas");
//     //   else return user as any;
//     // },
//   },
// });

// export { handler as GET, handler as POST };

import { authenticate } from "@/app/hooks/auth.hook";
import NextAuth, { type AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Sign in with Email",
      credentials: {
        dni: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (credentials) {
          const user = await authenticate(
            credentials.dni,
            credentials.password
          );
          return user ? user : null;
        }

        return null;
      },
    }),
  ],
  callbacks: {
    session: ({ session, token, user }) => {
      console.log("Session", session, token);
      return {
        ...session,
        user: {
          ...session,
          ...user,
        },
      };
    },
    jwt: ({ token, user }) => {
      console.log("JWT", token);
      // We only have the user object when jwt is called after authorize
      // In other cases, user is null and token contains the full user object that we encoded in the JWT
      let serialized = token;
      if (user) {
        serialized = {
          ...token,
          ...user,
        };
      }
      return serialized;
    },
  },
  session: {
    strategy: "jwt",
  },
};

export default NextAuth(authOptions);
