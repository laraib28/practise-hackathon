import Image from "next/image";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";


const SellingProducts = () => {
  const products = [
    {
      id: 1,
      image: "/images/jacket.png",
      name: "The north coat",
      price: "$260",
      originalPrice: "$360",
      rating: 4.5,
    },
    {
      id: 2,
      image: "/images/bag.jpg",
      name: "Gucci duffle bag",
      price: "$960",
      originalPrice: "$1160",
      rating: 4.0,
    },
    {
      id: 3,
      image: "/images/speaker.png",
      name: "RGB liquid CPU Cooler",
      price: "$160",
      originalPrice: "$170",
      rating: 3.5,
    },
    {
      id: 4,
      image: "/images/bookstand.png",
      name: "Small BookSelf",
      price: "$360",
      rating: 5.0,
    },
  ];

  // Function to render stars based on rating
  const renderRating = (rating: number) => {
    const fullStars = Math.floor(rating); // Full stars
    const hasHalfStar = rating % 1 !== 0; // Half star
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Remaining empty stars

    return (
      <div className="flex items-center mt-2">
        {/* Render full stars */}
        {Array(fullStars)
          .fill(null)
          .map((_, idx) => (
            <FaStar key={`full-${idx}`} className="text-yellow-500" />
          ))}

        {/* Render half star if present */}
        {hasHalfStar && <FaStarHalfAlt className="text-yellow-500" />}

        {/* Render empty stars */}
        {Array(emptyStars)
          .fill(null)
          .map((_, idx) => (
            <FaStar key={`empty-${idx}`} className="text-gray-300" />
          ))}
      </div>
    );
  };

  return (
    <div className="text-gray-900">
      <div className="flex items-center pl-4 sm:pl-32 pt-10 ">
        <Image src="/images/Rectangle 18.png" alt='icon' width={20} height={20}/>
        <h1 className="text-red-600 font-bold text-sm ml-2">This Month</h1>
      </div>

      <div className="flex justify-between items-center px-4 sm:px-16">
        <h1 className="font-bold text-3xl sm:text-4xl ml-2 sm:ml-16">Best Selling Products</h1>
        <div className="pr-7">
          <button className="bg-red-500 text-white px-8 sm:px-12 py-2 sm:py-3 rounded hover:bg-red-600 transition">
            View All
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-16 mt-8">
  {products.map((product) => (
    <div
      key={product.id}
      className="flex flex-col items-center  p-4"
      
    >
      {/* Image Container */}
      <div className="relative w-full h-[300px] flex items-center justify-center bg-gray-100 rounded-lg">
        {/* Icons */}
        <div className="absolute top-2 right-2 space-x-2">
  <CiHeart className="text-xl sm:text-2xl ml-1 cursor-pointer transition bg-white rounded-full" />
  <IoEyeOutline className="sm:text-2xl cursor-pointer transition bg-white rounded-full" />
</div>
        <Image
          src={product.image}
          alt={product.name}
          layout="intrinsic"
          width={140}
          height={146}
          className="object-contain max-h-full"
        />
      </div>
      {/* Product Details */}
      <div className="mt-4 text-center">
        <h2 className="font-semibold text-lg truncate">{product.name}</h2>
        <div className="flex items-center gap-2 mt-2 justify-center">
          <span className="text-red-600 font-bold">{product.price}</span>
          {product.originalPrice && (
            <span className="line-through text-gray-500 text-sm">
              {product.originalPrice}
            </span>
          )}
        </div>
        {renderRating(product.rating)}
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default SellingProducts;
