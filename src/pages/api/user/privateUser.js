import { getSession } from 'next-auth/react';
import middleware from '@/_middleware';

export const config = {
    api: {
        bodyParser: false
    }
};

export default async function handler(req, res) {
    await new Promise((resolve, reject) => {
        middleware(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result);
            }
            console.log("Something is resolved")
            return resolve(result);
        });
    });


    const session = await getSession({ req });

    console.log("I don't know but there is session", session)
    if (!session) {

        res.status(401).json({ message: 'Unauthorized' });
        return;
    }

    res.status(200).json({ message: 'This is a private endpoint', user: session.user });
}