import {NextResponse} from "next/server";
import {auth, BASE_PATH} from "@/auth";

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

export default auth((req) => {
  const requrl = new URL(req.url);
  if (!req.auth && requrl.pathname !== "/") {
    return NextResponse.redirect(
        new URL(
            `${BASE_PATH}/signin?callbackUrl=${encodeURIComponent(requrl?.pathname)}`,
            req.url
        )
    );
  }
})
