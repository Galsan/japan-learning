import React, { useEffect, useState } from 'react';
import Card from '../card/card';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs"
import ProductProfile from '../productProfile/productProfile';
import ProductModal from '../modal/modal';

const Carousel = ({ cardData }) => {
    let [current, setCurrent] = useState(0);
    const [productInfo, setProductInfo] = useState(cardData[0]);
    const [open, setOpen] = useState(false);

    const indicatorArray = [];
    for (let i = 0; i < cardData.length; i += 4) {
        indicatorArray.push(i);
    }

    const lastPage = indicatorArray[indicatorArray.length - 1];

    let previousSlide = () => {
        if (current === 0) setCurrent(cardData.length - 1);
        else setCurrent(current - 1);
    }

    let nextSlide = () => {
        if (current === lastPage) setCurrent(0);
        else setCurrent(current + 1);
    }

    useEffect(() => {
        console.log("its working over here")
        console.log("its the currenct ", current)
    }, [current])

    return (
        <div className="overflow-hidden relative w-full">
            <ProductModal open={open} onClose={() => { setOpen(false) }} >
                {/* <div className="bg-white text-center">
                        <div className="mx-auto my-4 w-48">
                            <h2 className="text-lg font-black text-gray-800">
                            Хичээлийн нэр
                            </h2>
                        </div>
                        <p className="text-sm text-gray-500"></p>
                    </div> */}
                <ProductProfile productName={"First TestProduct"} productInfo={productInfo} onClose={() => { setOpen(false) }} />
            </ProductModal>
            <div
                className="flex transation ease-out duration-200"
                style={{
                    transform: `translateX(-${current * 25}%)`
                }}>
                {
                    cardData.map((d, index) => {
                        return (
                            <div className="flex-none w-1/5 mx-8 cursor-pointer"
                                key={index} onClick={() => { setOpen(true); setProductInfo(d) }}>
                                <Card
                                    imageUrl="https://th.bing.com/th/id/OIP.CgWs10bTykKz7D60Ty0X8wHaE7?rs=1&pid=ImgDetMain"
                                    title={d}
                                    description="This kitten is adorable!" />
                            </div>
                        )
                    })
                }
            </div>
            <div className="absolute top-0 h-36 w-full flex justify-between items-center text-slate-800 px-10 text-3xl">
                <button onClick={previousSlide}>
                    <BsFillArrowLeftCircleFill />
                </button>
                <button onClick={nextSlide}>
                    <BsFillArrowRightCircleFill />
                </button>
            </div>

            <div className="relative bottom-0 py-4 flex justify-center gap-3 w-full">
                {indicatorArray.map((e, index) => (
                    <div
                        key={"circle" + index}
                        className={`rounded-full w-5 h-5 cursor-pointer ${index === Math.floor(current / 4) ? "bg-red-300" : "bg-red-950"
                            }`}
                        onClick={() => setCurrent(e)}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;