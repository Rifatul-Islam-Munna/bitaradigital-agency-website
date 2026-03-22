import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

const PRIMARY_HOST = "bitaradigitalit.com"
const WWW_HOST = `www.${PRIMARY_HOST}`

export function proxy(request: NextRequest) {
  const forwardedHost = request.headers.get("x-forwarded-host")
  const host = (forwardedHost ?? request.headers.get("host") ?? "").split(":")[0].toLowerCase()

  if (host === WWW_HOST) {
    const redirectUrl = new URL(request.url)
    redirectUrl.hostname = PRIMARY_HOST

    return NextResponse.redirect(redirectUrl, 301)
  }

  return NextResponse.next()
}

