import { NextFetchEvent, NextRequest, NextResponse } from "next/server"

const PUBLIC_FILE = /\.(.*)$/

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  if (PUBLIC_FILE.test(req.nextUrl.pathname)) {
    return
  }
  const cookieLocale = req.cookies["locale"]
  console.log(req.redirect)
  if (cookieLocale && cookieLocale !== req.nextUrl.locale) {
    const pathname = req.nextUrl.pathname === "/" ? `/${cookieLocale}` : `/${cookieLocale}${req.nextUrl.pathname}`
    console.log("RED: c-", cookieLocale, req.nextUrl.locale, "\n->", pathname, new Date())

    req.nextUrl.pathname = pathname

    return NextResponse.redirect(pathname)
    // return NextResponse.rewrite(req.nextUrl)
  }
}
