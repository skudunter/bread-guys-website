import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  //request origin - null if sent from server
  const origin = request.headers.get("origin");
  //url request is trying to access
  const url = request.url;

  if (url.includes("/admin")) {
    //secure the access to the admin page by checking cookie
    if (request.cookies.get(process.env.COOKIE_NAME!)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect("https://bread-people.vercel.app/");
    }
  }
  //grant access to the api if the password in the body is valid or the origin is correct
  //sloppy but works
  let password: any = "";
  try {
    password = await request.json();
  } catch (e) {
    console.log(e);
    console.log("someone unauthorized trying to access api");

    return NextResponse.json({
      error: "Invalid origin",
    });
  }

  if (
    origin?.includes("localhost:3000") ||
    origin?.includes("https://the-bread-people.vercel.app/") ||
    password.password == process.env.COOKIE_NAME
  ) {
    return NextResponse.next();
  } else {
    return NextResponse.json({
      error: "Invalid origin",
    });
  }
}

export const config = {
  matcher: ["/api/:path*", "/admin/"],
};
