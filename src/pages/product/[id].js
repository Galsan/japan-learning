import dynamic from 'next/dynamic';
const DynamicProduct = dynamic(() => import('../../components/product/product'), {
    ssr: false,
});
import { useRouter } from 'next/router';
import useSWR from 'swr'
import { getSession, getToken } from 'next-auth/react';

const ProductPage = (req, res) => {
    const router = useRouter();
    const query = router.query;

    const { data: session } = useSWR('/api/auth/session', getSession);
    console.log("session ", session);
    // const { data: token } = useSWR('/api/auth/session', getToken);
    // console.log("token", token)


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

    console.log("testing after data load", novelData);
    console.log("privateUserRes", userData, "and", userLoading);
    return (
        <div>
            <h1>Hello: its product {query.id}</h1>
            {/* <DynamicProduct /> */}

            <div>
                {novelData && novelData.res ? novelData.res[0].plot : "hhe"}
            </div>
            <div>message: {userData.message}</div>
            <div>name: {userData.user.username}</div>
        </div>
    );
}

export default ProductPage