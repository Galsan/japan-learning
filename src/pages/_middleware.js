import { NextResponse } from "next/server";
import csrf from "csurf";
import cookieParser from "cookie-parser";

const csrfProtection = csrf({ cookie: true });

const middleware = () => {
    cookieParser()(req, {}, () => { });
    csrfProtection(req, {}, (err) => {
        if (err) {
            return NextResponse.redirect('/error');
        }
    });
    return NextResponse.next();
}

export default middleware