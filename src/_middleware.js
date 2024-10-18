import { NextResponse } from 'next/server';
import csrf from 'csurf';
import cookieParser from 'cookie-parser';

const csrfProtection = csrf({ cookie: true });

const middleware = (req, res, next) => {
    cookieParser()(req, res, () => {
        csrfProtection(req, res, (err) => {
            if (err) {
                return res.redirect('/error'); // Ensure correct redirection
            }
            next(); // Proceed to next middleware or route handler
        });
    });
};

export default middleware;
