import middleware from '@/_middleware';
import { authOptions } from '../auth/[...nextauth]';
import { getServerSession } from 'next-auth';

export default async function handler(req, res) {
    await new Promise((resolve, reject) => {
        middleware(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result);
            }
            return resolve(result);
        });
    });


    const session = await getServerSession(req, res, authOptions);

    if (!session) {

        res.status(401).json({ message: 'Unauthorized' });
        return;
    }

    res.status(200).json({ message: 'This is a private endpoint', user: session.user });
}