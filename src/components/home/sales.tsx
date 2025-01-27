import React from "react";
import Image from "next/image";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

// types/index.ts

export interface Product {
  name: string;              
  description: string;        
  imageUrl: string;           
  price: number;              
  discountPercentage?: number;
  priceWithoutDiscount: number;
  rating: number;             
  ratingCount: number;        
  tags: string[];             
  badge: string;              
  slug: string;               
}

const Sales = async () => {
  const data: Product[] = await client.fetch(
    `*[_type == "product2" && "sales" in tags] {
  name,
  description,
  "imageUrl": image.asset->url,
  price,
  discountPercentage,
  priceWithoutDiscount,
  rating,
  ratingCount,
  tags,
  badge,
  slug
}
`
  );

  const products = [
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      image: { asset: { url: "/images/gaming.png" } },
      rating: 4,
      price: "$120",
      discountPrice: "$160",
      discount: "-40%",
      slug: "havit-hv-g92-gamepad",
    },
    {
      id: 2,
      name: "AK-900 Wired Keyboard",
      image: { asset: { url: "/images/keboard.png" } },
      rating: 5,
      price: "$960",
      discountPrice: "$1160",
      discount: "-35%",
      slug: "ak-900-wired-keyboard",
    },
    {
      id: 3,
      name: "IPSL LCD Gaming Monitor",
      image: { asset: { url: "/images/design.jpg" } },
      rating: 5,
      price: "$370",
      discountPrice: "$400",
      discount: "-30%",
      slug: "ipsl-lcd-gaming-monitor",
    },
    {
      id: 4,
      name: "S-Series Comfort Chair",
      image: { asset: { url: "/images/chair.png" } },
      rating: 4,
      price: "$375",
      discountPrice: "$500",
      discount: "-25%",
      slug: "s-series-comfort-chair",
    },
  ];

  return (
    <div className="px-4 py-8">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between mb-8 space-y-6 lg:space-y-0 ml-16">
        <div className="text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start">
            <Image
              src="/images/Rectangle 18.png"
              alt="icon"
              width={20}
              height={20}
              className="m-5"
            />
            <h1 className="text-red-700 text-2xl font-bold">Today&#39;s</h1>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mt-2">Flash Sales</h2>
        </div>

        <div className="flex space-x-4 lg:space-x-6 lg:justify-start pr-9">
          {["Days", "Hours", "Minutes", "Seconds"].map((unit, index) => (
            <div key={index}>
              <p className="text-3xl md:text-4xl font-bold">
                {index === 0
                  ? "03"
                  : index === 1
                  ? "23"
                  : index === 2
                  ? "19"
                  : "56"}
                {index < 3 && <span className="text-red-300">:</span>}
              </p>
              <p className="text-gray-600 text-sm">{unit}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <div className="p-2 bg-gray-300 rounded-full cursor-pointer hover:bg-gray-300 transition">
            <FaLongArrowAltLeft className="text-xl " />
          </div>
          <div className="p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300 transition">
            <FaLongArrowAltRight className="text-xl" />
          </div>
        </div>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="relative flex flex-col items-center">
            <div className="rounded-md p-4 flex flex-col items-center bg-gray-50 shadow-md">
              <div className="bg-red-500 rounded-sm text-white text-xs px-3 py-1 self-start">
                {product.discount}
              </div>
              <div className="absolute top-2 right-2 flex flex-col space-y-2 pr-6">
                <CiHeart className="text-2xl font-bold cursor-pointer hover:text-red-700 transition" />
                <IoEyeOutline className="text-xl cursor-pointer hover:text-gray-700 transition" />
              </div>
              <div>
                <Link href={`/saleS/${product.slug}`}>
                  <Image
                    src={product.image.asset.url}
                    alt={product.name}
                    height={200}
                    width={200}
                  />
                </Link>
              </div>
              <button className="bg-black text-white w-full h-11 mt-3">
                Add to Cart
              </button>
            </div>
            <div className="text-center mt-2">
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <div className="flex items-center justify-center space-x-2">
                <p className="text-red-600 font-bold text-lg">{product.price}</p>
                <p className="text-gray-400 text-sm line-through">
                  {product.discountPrice}
                </p>
              </div>
              <div className="flex items-center justify-center mt-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <AiFillStar
                    key={index}
                    className={`${
                      index < product.rating
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default Sales;
