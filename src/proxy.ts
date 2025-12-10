// src/proxy.ts
import { createI18nMiddleware } from "next-international/middleware";
import { NextRequest } from "next/server";

const I18nMiddleware = createI18nMiddleware({
  locales: ["en", "es"],
  defaultLocale: "en",
});

export default function proxy(request: NextRequest) {
  return I18nMiddleware(request);
}

// matcher equivalente al antiguo middleware.config
export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"],
};
