import dynamic from 'next/dynamic';
const DynamicProduct = dynamic(() => import('../../components/product/product'), {
    ssr: false,
});

const ProductPage = (req, res) => {
    console.log(req)
    console.log(res)
    return (
        <div>
            Hello
            {/* <DynamicProduct /> */}
        </div>
    );
}

export default ProductPage