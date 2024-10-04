import React from 'react';
import Image from 'next/image';

const Card = ({ imageUrl, title, description }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            <Image src={imageUrl} alt={title} width={400} height={500} className="w-full h-auto rounded-md mb-4" />
            <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default Card;