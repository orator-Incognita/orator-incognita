import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "./auth";
import { routing } from "./i18n/routing";
import { LOCALES } from "./i18n/constants";

const PUBLIC_PAGES = ["/", "/sign-in", "/api"];

const i18nMiddleware = createMiddleware(routing);

const authMiddleware = auth((req) => {
  return i18nMiddleware(req);
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const middleware = (req: NextRequest, ctx: any) => {
  const publicPathnameRegex = RegExp(
    `^(/(${LOCALES.join("|")}))?(${PUBLIC_PAGES.flatMap((p) =>
      p === "/" ? ["", "/"] : p,
    ).join("|")})/?$`,
    "i",
  );
  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);

  if (isPublicPage) return i18nMiddleware(req);

  return authMiddleware(req, ctx);
};

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};

export default middleware;
