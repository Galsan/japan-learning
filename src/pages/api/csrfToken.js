import csrf from 'csurf';
import cookieParser from 'cookie-parser';

const csrfProtection = csrf({ cookie: true });

export default function handler(req, res) {
    cookieParser()(req, {}, () => { });
    csrfProtection(req, {}, (err) => {
        if (err) {
            return res.status(500).json({ message: 'CSRF token generation failed' });
        }
        res.status(200).json({ csrfToken: req.csrfToken() });
    });
}