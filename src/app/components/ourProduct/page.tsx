import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import { CiHeart } from "react-icons/ci";
import { AiFillStar } from "react-icons/ai";
import { IoEyeOutline } from "react-icons/io5";

const OurProduct = () => {
    const products = [
        {
            id: 1,
            image: "/images/p1.jpg",
            name: "Breed Dog Food",
            price: "$100",
            rating: 35,
        },
        {
            id: 2,
            image: "/images/p2.jpg",
            name: "CANON EOS DSLR Camera",
            price: "$360",
            rating: 95,
        },
        {
            id: 3,
            image: "/images/p3.jpg",
            name: "ASUS FHD Gaming Laptop",
            price: "$700",
            rating: 325,
        },
        {
            id: 4,
            image: "/images/p4.jpg",
            name: "Curology Product Set",
            price: "$500",
            rating: 145,
        },
        {
            id: 5,
            image: "/images/p5.jpg",
            name: "Kids Electric Car",
            price: "$960",
            rating: 65,
        },
        {
            id: 6,
            image: "/images/p6.jpg",
            name: "Jr.Zoom Soccer Cleats",
            price: "$1160",
            rating: 35,
        },
        {
            id: 7,
            image: "/images/p7.jpg",
            name: "GP11 Shooter USB Gamepad",
            price: "$660",
            rating: 55,
        },
        {
            id: 8,
            image: "/images/p8.jpg",
            name: "Quilted Satin Jacket",
            price: "$660",
            rating: 55,
        },
    ];

    return (
        <div className='w-full max-w-[1170px] mx-auto p-5'>
            {/* Section Header */}
            <div>
                <Image src="/images/Rectangle 18.png" alt='icon' width={20} height={20} className='m-5' />
                <h1 className='text-red-500 font-bold'>Our Products</h1>
            </div>
            <div className='font-bold text-3xl md:text-5xl text-gray-950 '>
                <h1 className='pb-6'>Explore Our Products</h1>
            </div>
            
            {/* Product Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="relative flex flex-col items-center bg-gray-200 rounded-md p-4"
                    >
                        {/* Heart and Eye Icons */}
                        <div className="absolute top-2 right-2 flex flex-col space-y-2">
                            <CiHeart className="text-xl cursor-pointer bg-white rounded-full hover:text-gray-700 transition" />
                            <IoEyeOutline className="text-xl cursor-pointer bg-white rounded-full hover:text-gray-700 transition" />
                        </div>

                        {/* Product Image */}
                        <div className="bg-gray-200 mb-4">
                            <Image
                                src={product.image}
                                alt={product.name}
                                height={200}
                                width={200}
                                className="bg-gray-200 max-h-[200px] object-cover"
                            />
                        </div>

                        {/* Product Name */}
                        <div className="text-center">
                            <h3 className="font-semibold text-lg">{product.name}</h3>
                        </div>

                        {/* Price and Rating */}
                        <div className="mt-4 flex flex-col items-center w-full">
                            <div className="text-red-600 font-bold text-lg">{product.price}</div>
                            <div className="flex items-center mt-2">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <AiFillStar
                                        key={index}
                                        className={`${
                                            index < product.rating ? "text-yellow-500" : "text-gray-300"
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* View All Button */}
            <div className='flex items-center justify-center mt-10'>
                <Button className='bg-red-500 h-12 px-8 text-lg'>View All Products</Button>
            </div>
        </div>
    );
};

export default OurProduct;
