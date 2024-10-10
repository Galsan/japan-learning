import React from 'react';
import Image from "next/legacy/image";

const Card = ({ imageUrl, title, description }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            <div className='w-full h-auto'>
                <Image src={imageUrl} alt={title} width={250} height={187.5} layout="intrinsic" className="w-full h-auto rounded-md mb-4" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default Card;