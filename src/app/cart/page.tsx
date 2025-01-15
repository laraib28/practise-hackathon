"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/cartslise";
import { RootState } from "../redux/store";

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
}

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart);

  const handleRemove = (id: number) => {
    dispatch(remove(id));
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Cart Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="text-sm mb-6">
          Home / <span className="text-black">Cart</span>
        </div>

        {/* Cart Heading */}
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

        {/* Cart Table */}
        <div className="overflow-x-auto border border-gray-200 shadow-sm rounded-lg">
          <table className="w-full text-left text-gray-700">
            <thead className="bg-gray-100 text-sm">
              <tr>
                <th className="p-4">Product</th>
                <th className="p-4">Price</th>
                <th className="p-4">Quantity</th>
                <th className="p-4">Subtotal</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item: CartItem) => (
                <tr key={item.id} className="border-b">
                  <td className="p-4 flex items-center gap-4">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={48}
                      height={49}
                      className="w-16 h-16 object-cover"
                    />
                    {item.title}
                  </td>
                  <td className="p-4">${item.price}</td>
                  <td className="p-4">
                    <input
                      type="number"
                      className="w-16 text-center border border-gray-300 rounded-md"
                      defaultValue={1}
                    />
                  </td>
                  <td className="p-4">${item.price}</td>
                  <td className="p-4">
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded-md"
                      onClick={() => handleRemove(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cart Buttons */}
        <div className="flex justify-between items-center mt-6">
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md">
            Return To Shop
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md">
            Update Cart
          </button>
        </div>

        {/* Coupon and Cart Total */}
        <div className="flex flex-col md:flex-row gap-8 mt-8">
          {/* Coupon Section */}
          <div className="flex-1">
            <h2 className="text-lg font-semibold mb-4">Coupon</h2>
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Coupon Code"
                className="w-full border border-gray-300 rounded-md px-4 py-2"
              />
              <button className="bg-red-500 text-white px-6 py-2 rounded-md">
                Apply Coupon
              </button>
            </div>
          </div>

          {/* Cart Total Section */}
          <div className="flex-1">
            <h2 className="text-lg font-semibold mb-4">Cart Total</h2>
            <div className="border border-gray-300 rounded-lg p-6">
              <div className="flex justify-between mb-4">
                <span className="text-gray-600">Subtotal:</span>
                <span className="font-semibold">$1750</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-gray-600">Shipping:</span>
                <span className="font-semibold">Free</span>
              </div>
              <div className="flex justify-between border-t pt-4">
                <span className="text-gray-600">Total:</span>
                <span className="font-bold text-lg">$1750</span>
              </div>
              <div>
                <button className="bg-red-500 text-white w-full mt-6 py-3 rounded-md">
                  <Link href="/checkout">Proceed to Checkout</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
