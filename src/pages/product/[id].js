import dynamic from 'next/dynamic';
const DynamicProduct = dynamic(() => import('../../components/product/product'), {
    ssr: false,
});
import { useRouter } from 'next/router';
import useSWR from 'swr'


const ProductPage = (req, res) => {
    const router = useRouter();
    const query = router.query;

    const fetcher = (url) => fetch(url).then((res) => res.json());


    const { data, error } = useSWR('http://localhost:3000/api/testMongo-ds', fetcher);
    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;

    console.log(query.id)
    console.log("testing after data load", data)
    return (
        <div>
            <h1>Hello: its product {query.id}</h1>
            {/* <DynamicProduct /> */}

            <div>
                {data && data.res ? data.res[0].plot : "hhe"}
            </div>
        </div>
    );
}

export default ProductPage