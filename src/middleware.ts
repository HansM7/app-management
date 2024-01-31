import { decode } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isDeveloper = true;
  const keyToken = isDeveloper
    ? "next-auth.session-token"
    : "__Secure-next-auth.session-token";
  let cookie = request.cookies.get(keyToken)?.value;
  const secret = process.env.NEXTAUTH_SECRET || "default-secret";
  const user: any = await decode({ token: cookie, secret });

  // user: {
  //   user:{
  //     role,
  //     name
  //   }
  // }

  if (pathname.startsWith("/system")) {
    if (user === null) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  if (pathname.startsWith("/system/users/create")) {
    if (user?.user.role !== "admin") {
      return return401();
    }
  }

  function return401() {
    return NextResponse.redirect(
      new URL("/system/error-authorization", request.url)
    );
  }
}
