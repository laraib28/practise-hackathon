import React from "react";
import Image from "next/image";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const WishList = () => {
  // Wishlist Products
  const wishlistProducts = [
    {
      id: 1,
      image: "/images/bag.jpg",
      name: "Gucci duffle bag",
      price: "$960",
      originalPrice: "$1160",
      discount: "-35%",
    },
    {
      id: 2,
      image: "/images/speaker.png",
      name: "RGB liquid CPU Cooler",
      price: "$1960",
    },
    {
      id: 3,
      image: "/images/gamepad.png",
      name: "GPII Shooter USB Gamepad",
      price: "$550",
    },
    {
      id: 4,
      image: "/images/p8.png",
      name: "Quilted Satin Jacket",
      price: "$750",
    },
    {
      id: 5,
      image: "/images/p3.jpg",
      name: "ASUS FHD Gaming Laptop",
      price: "$960",
      originalPrice: "$1160",
      discount: "-35%",
    },
    {
      id: 6,
      image: "/images/design.jpg",
      name: "IPS LCD Gaming Monitor",
      price: "$1160",
    },
    {
      id: 7,
      image: "/images/gaming.png",
      name: "HAVIT HV-G92 Gamepad",
      price: "$560",
      tag: "NEW",
    },
    {
      id: 8,
      image: "/images/keboard.png",
      name: "AK-900 Wired Keyboard",
      price: "$200",
    },
  ];

  return (
    <div className="p-6">
      {/* Wishlist Header */}
      <div className="flex justify-between items-center py-4">
        <h1 className="text-lg font-bold">Wishlist (4)</h1>
        <button className="border px-6 py-2 rounded-md text-sm font-medium hover:bg-gray-100">
          Move All To Bag
        </button>
      </div>

      {/* Wishlist Grid */}
      <div className="grid grid-cols-4 gap-8">
        {wishlistProducts.map((product) => (
          <div
            key={product.id}
            className="relative bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Discount */}
            {product.discount && (
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                {product.discount}
              </span>
            )}

            {/* Product Image */}
            <div className="relative">
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="h-[150px] w-full object-cover rounded-t-lg"
              />
            </div>

            {/* Add to Cart Button */}
            <button className="bg-black text-white flex items-center justify-center gap-2 px-3 py-2 text-sm w-full">
              <IoCartOutline className="text-lg" />
              Add to Cart
            </button>
<div>
            {/* Product Details */}
            <div className="mt-2 text-center">
              <h2 className="text-sm font-semibold">{product.name}</h2>
              <div className="flex items-center justify-center gap-2 text-sm mt-1">
                <p className="text-red-600 font-bold">{product.price}</p>
                {product.originalPrice && (
                  <p className="text-gray-400 line-through">
                    {product.originalPrice}
                  </p>
                )}
                </div>
              </div>
            </div>

            {/* Trash Icon */}
            <div className="absolute top-2 right-2">
              <FaRegTrashAlt className="text-gray-500 hover:text-red-600 cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishList;