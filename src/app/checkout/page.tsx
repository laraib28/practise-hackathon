import React from 'react';
import Image from 'next/image';

const Checkout = () => {
  return (
    <div className=" min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-8">
          <span>Account / My Account / Product / View Cart / </span>
          <span className="text-gray-800 font-semibold">CheckOut</span>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Billing Details */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Billing Details</h2>
            <form className="space-y-4">
              {/* Input Fields */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">First Name</label>
                <input
                  type="text"
                  className="w-full  bg-gray-100 rounded-md px-4 py-2 focus:outline-none"
                 
                />
              </div>
              <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Company Name</label>
                <input
                  type="text"
                  className="w-full  bg-gray-100 rounded-md px-4 py-2 focus:outline-none "
                 
                />
              </div>
              <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Street Address</label>
                <input
                  type="text"
                  className="w-full  bg-gray-100 rounded-md px-4 py-2 focus:outline-none"
                 
                />
              </div>
              <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Appartment floor etc.(optional)</label>
                <input
                  type="text"
                  className="w-full  bg-gray-100 rounded-md px-4 py-2 focus:outline-none"
                 
                />
              </div>
              <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Town/City</label>
                <input
                  type="text"
                  className="w-full  bg-gray-100 rounded-md px-4 py-2 focus:outline-none"
                 
                />
              </div>
              <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Phone Number</label>
                <input
                  type="text"
                  className="w-full  bg-gray-100 rounded-md px-4 py-2 focus:outline-none"
                 
                />
              </div>
              <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                <input
                  type="text"
                  className="w-full  bg-gray-100 rounded-md px-4 py-2 focus:outline-none"
                 
                />
              </div>
              <div className="flex items-center mt-4">
                <input
                  type="checkbox"
                  id="save-info"
                  className="w-5 h-5 text-red-500 border-gray-300 rounded"
                />
                <label htmlFor="save-info" className="ml-2 text-sm text-gray-600">
                  Save this information for faster check-out next time
                </label>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              {/* Order Items */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Image
                      src="/images/gaming.png" // Replace with your image path
                      alt="LCD Monitor"
                      height={50}
                      width={50}
                      className="rounded"
                    />
                    <span className="text-gray-700">LCD Monitor</span>
                  </div>
                  <span className="text-gray-700">$650</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Image
                      src="/images/design.jpg" // Replace with your image path
                      alt="Gamepad"
                      height={50}
                      width={50}
                      className="rounded"
                    />
                    <span className="text-gray-700">Hi Gamepad</span>
                  </div>
                  <span className="text-gray-700">$1100</span>
                </div>
              </div>
              {/* Subtotal and Total */}
              <div className="mt-6 border-t pt-4 space-y-2">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal:</span>
                  <span>$1750</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Shipping:</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between text-lg font-semibold text-gray-900">
                  <span>Total:</span>
                  <span>$1750</span>
                </div>
              </div>

              {/* Payment Method */}
              <div className="mt-6">
                <h3 className="text-gray-700 font-medium mb-4">Payment Method</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="bank"
                      name="payment"
                      className="w-5 h-5 text-red-500 border-gray-300 focus:ring focus:ring-red-400"
                    />
                    <label htmlFor="bank" className="ml-2 text-gray-600">
                      Bank
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="cod"
                      name="payment"
                      className="w-5 h-5 text-red-500 border-gray-300 focus:ring focus:ring-red-400"
                    />
                    <label htmlFor="cod" className="ml-2 text-gray-600">
                      Cash on delivery
                    </label>
                  </div>
                </div>
              </div>

              {/* Coupon Code */}
              <div className="mt-6 flex items-center space-x-4">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-red-400"
                />
                <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">
                  Apply Coupon
                </button>
              </div>

              {/* Place Order Button */}
              <button className="bg-red-500 text-white w-full mt-6 py-3 rounded-md hover:bg-red-600 transition">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
