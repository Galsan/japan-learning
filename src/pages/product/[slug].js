import dynamic from 'next/dynamic';
const DynamicProduct = dynamic(() => import('../../components/product/product'), {
    ssr: false,
});
import { useRouter } from 'next/router';


const ProductPage = (req, res) => {
    const router = useRouter();
    const query = router.query;

    console.log(query.slug)
    return (
        <div>
            Hello
            {/* <DynamicProduct /> */}
        </div>
    );
}

export default ProductPage