import React from "react";
import Image from "next/image";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { client } from "@/sanity/lib/client";

const Slidebar = () => {
  async function onSubmit(values: { image: any; name: any; slug: any; description: any; price: any; discountPercentage: any; priceWithoutDiscount: any; rating: any; }) {
    try {
      const newProduct = {
        _type: "product2", // Match the schema type
        image: {
          _type: 'image',
          asset: {
            _ref: values.image._ref, // Use image reference
          },
        },
        name: values.name,
        slug: { current: values.slug }, // Slug is an object
        description: values.description,
        price: Number(values.price), // Ensure numeric inputs
        discountPercentage: Number(values.discountPercentage),
        priceWithoutDiscount: Number(values.priceWithoutDiscount),
        rating: Number(values.rating),
      };
      
      await client.create(newProduct);
      alert("Product added successfully!");
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product. Check console for details.");
    }
  }

  const products = [
    {
      id: 1,
      discount: "-40%",
      image: "/images/gaming.png",
      name: "HAVIT HV-G92 Gamepad",
      price: "$120",
      originalPrice: "$160",
      rating: 4,
    },
    {
      id: 2,
      discount: "-35%",
      image: "/images/keboard.png",
      name: "AK-900 Wired Keyboard",
      price: "$960",
      originalPrice: "$1160",
      rating: 5,
    },
    {
      id: 3,
      discount: "-30%",
      image: "/images/design.jpg",
      name: "IPSL LCD Gaming Monitor",
      price: "$370",
      originalPrice: "$400",
      rating: 5,
    },
    {
      id: 4,
      discount: "-25%",
      image: "/images/chair.png",
      name: "S-Series Comfort Chair",
      price: "$375",
      originalPrice: "$500",
      rating: 4,
    },
  ];

  return (
    <div className="px-4 py-8">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between mb-8 space-y-6 lg:space-y-0 ml-16">
        {/* Flash Sale Title */}
        <div className="text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start ">
            <Image src="/images/Rectangle 18.png" alt="icon" width={20} height={20} className="m-5" />
            <h1 className="text-red-700 text-2xl font-bold">Today&#39;s</h1>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mt-2">Flash Sales</h2>
        </div>

        {/* Countdown Timer */}
        <div className="flex space-x-4 lg:space-x-6 lg:justify-start pr-9">
          {["Days", "Hours", "Minutes", "Seconds"].map((unit, index) => (
            <div key={index}>
              <p className="text-3xl md:text-4xl font-bold ">
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

        {/* Navigation Arrows */}
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
            {/* Product Card */}
            <div className="rounded-md p-4 flex flex-col items-center bg-gray-50 shadow-md">
              {/* Discount Badge */}
              <div className="bg-red-500 rounded-sm text-white text-xs px-3 py-1  self-start">
                {product.discount}
              </div>

              {/* Heart and Eye Icons */}
              <div className="absolute top-2 right-2 flex flex-col space-y-2 pr-6">
                <CiHeart className="text-2xl font-bold cursor-pointer hover:text-red-700 transition " />
                <IoEyeOutline className="text-xl cursor-pointer hover:text-gray-700 transition" />
              </div>

              {/* Product Image */}
              <div className="">
                <Image
                  src={product.image}
                  alt={product.name}
                  height={200}
                  width={200}
                  className=""
                />
                <button className="bg-black text-white w-full h-11 mt-3">Add to Cart</button>
              </div>
            </div>

            {/* Product Name and Price */}
            <div className="text-center mt-2">
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <div className="flex items-center justify-center space-x-2">
                <p className="text-red-600 font-bold text-lg">{product.price}</p>
                <p className="text-gray-400 text-sm line-through">
                  {product.originalPrice}
                </p>
              </div>
              {/* Rating */}
              <div className="flex items-center justify-center mt-1">
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
      <div className="flex justify-center mt-6">
        <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default Slidebar;
