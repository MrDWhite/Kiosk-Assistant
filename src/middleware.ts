import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const supported = (process.env.NEXT_PUBLIC_SUPPORTED_LOCALES || "en").split(",");
  const url = req.nextUrl;
  const locale = url.searchParams.get("lang");
  if (locale && supported.includes(locale)) {
    const res = NextResponse.next();
    res.cookies.set("locale", locale, { path: "/" });
    return res;
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/(.*)"],
};


