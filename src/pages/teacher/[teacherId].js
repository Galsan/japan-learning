import { useRouter } from 'next/router';
import useSWR from 'swr'
import { getSession } from 'next-auth/react';

const ProductPage = (req, res) => {
    const router = useRouter();
    const query = router.query;

    const { data: session } = useSWR('/api/auth/session', getSession);
    console.log("session ", session);

    const fetcher = (url) => fetch(
        url,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    ).then((res) => res.json());


    const { data: novelData, error: novelError, isLoading: novelLoading } = useSWR('http://localhost:3000/api/mongodbLibUsage', fetcher);

    const { data: userData, error: userError, isLoading: userLoading } = useSWR('http://localhost:3000/api/user/privateUser', fetcher);

    if (novelError || userError) return <div>Failed to load</div>;
    if (novelLoading || userLoading) return <div>Loading...</div>;

    return (
        <div>
            <h1>Hello: its teacher {query.teacherId}</h1>

            <div>
                {novelData && novelData.res ? novelData.res[0].plot : "hhe"}
            </div>
            <div>message: {userData.message}</div>
            <div>name: {userData.user.username}</div>
        </div>
    );
}

export default ProductPage