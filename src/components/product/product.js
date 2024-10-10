import { useRouter } from 'next/router';

const Product = () => {
    console.log("working over here?")
    const router = useRouter();
    const { slug } = router.query;

    return <p>Post: {slug}</p>;
}

export default Product