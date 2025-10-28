import React from 'react';
import { CardProps } from '../../interfaces';
import Image from 'next/image';
import Button from './Button';

const Card: React.FC<CardProps> = ({
                                       title,
                                       location,
                                       price,
                                       image,
                                       rating = 0,
                                   }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200 max-w-sm mx-auto">
            {/* Image Section */}
            <div className="relative h-64 w-full">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                />
                {/* Optional badge overlay - add if needed from Figma */}
                <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-700">
                    Superhost
                </div>
            </div>

            {/* Content Section */}
            <div className="p-4 space-y-2">
                <h3 className="font-semibold text-base text-gray-900 leading-tight">{title}</h3>

                <p className="text-sm text-gray-500">{location}</p>

                {/* Rating */}
                <div className="flex items-center text-sm">
                    <span className="text-gray-900 mr-1">★</span>
                    <span className="font-medium text-gray-900">{rating.toFixed(1)}</span>
                    <span className="text-gray-400 ml-1">(12)</span>
                </div>

                {/* Price & Button */}
                <div className="flex items-center justify-between pt-2">
                    <div>
                        <p className="text-2xl font-bold text-gray-900">${price}</p>
                        <p className="text-sm text-gray-500">night</p>
                    </div>
                    <Button
                        label="Book Now"
                        variant="primary"
                        onClick={() => alert('Booking...')}
                        className="px-4 py-2 text-sm"
                    />
                </div>
            </div>
        </div>
    );
};

export default Card;