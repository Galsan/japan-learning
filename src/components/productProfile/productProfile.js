import Image from "next/legacy/image";
import { useRouter } from 'next/router';


const ProductProfile = ({ productName, productInfo, onClose }) => {
    const router = useRouter();

    return (
        <div>
            <div className="flex">
                <div className="p-5 w-3/5 min-w-20 flex justify-center">
                    <Image width={500} height={300} layout="intrinsic" src="https://th.bing.com/th/id/OIP.CgWs10bTykKz7D60Ty0X8wHaE7?rs=1&pid=ImgDetMain" alt="Product Image" />
                </div>
                <div>
                    <h2 className="text-2xl">Product name : {productName}, I dont know but {productInfo}</h2>
                </div>
            </div>
            <div className="pl-10 pr-10 w-full flex justify-center">
                <p className="w-4/5">Product description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolorum vel illo saepe modi dignissimos ratione aut in totam optio vitae enim necessitatibus mollitia cum sequi ullam, aspernatur ducimus voluptatem nesciunt molestias quam architecto voluptatum. Enim est, non rem nemo aliquid debitis numquam minima magni officiis, dolore unde praesentium maiores optio distinctio et animi consequuntur ipsum? Magnam dolorem vel, illum sed sint voluptatum maiores error deserunt dignissimos modi quos at doloribus expedita molestias ea. Rerum, est error illum quas laudantium modi labore aliquam possimus odit fuga architecto porro facere. Dolor, dolorem eaque sed placeat debitis commodi modi, neque mollitia, sapiente omnis laborum? Ab, maxime odio provident id sed facere dolorum autem a. Laborum, facere odio? Tenetur impedit quos, soluta architecto, temporibus obcaecati quaerat inventore commodi numquam perspiciatis magni dolorum iste assumenda esse quis optio quas delectus asperiores iure libero! Reprehenderit possimus cupiditate incidunt numquam culpa voluptatem repellendus. Unde quidem rerum recusandae ratione repellendus numquam impedit, amet ullam distinctio est in odit alias, nemo fugiat voluptatibus? Beatae provident commodi cupiditate iste adipisci! Rerum optio corrupti quod eligendi labore, consectetur voluptatem laudantium distinctio maxime quo. Asperiores enim vitae quis? Quas, hic ipsam? Alias repellat officia natus incidunt consequuntur impedit enim, vero aperiam.</p>
            </div>
            <div className="flex justify-end pr-5 gap-3">
                <button className="bg-green-600" onClick={() => {
                    router.push(`/product/${productInfo}`);
                }}>Explore more</button>
                <button className="bg-purple-500" onClick={onClose}>Close</button>
            </div>
        </div>
    )

}

export default ProductProfile