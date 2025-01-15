import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SignUp = () => {
  return (
    <div className='flex justify-between p-5 pt-12'>
      <div>
        <Image src='/images/signup.png' alt='image' height={600} width={800} />
      </div>
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        {/* Heading */}
        <h1 className="text-2xl font-bold text-gray-900 text-center mb-2">
          Create an account
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Enter your details below
        </p>

        {/* Form */}
        <form>
          {/* Name */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              
            </label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="mt-1 block w-full px-4 py-2 border-b border-gray-300 focus:ring-0 focus:border-blue-500 text-gray-900"
              required
            />
          </div>

          {/* Email or Phone */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
             
            </label>
            <input
              type="text"
              id="email"
              placeholder="Email or Phone Number"
              className="mt-1 block w-full px-4 py-2 border-b border-gray-300 focus:ring-0 focus:border-blue-500 text-gray-900"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
             
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="mt-1 block w-full px-4 py-2 border-b border-gray-300 focus:ring-0 focus:border-blue-500 text-gray-900"
              required
            />
          </div>

          {/* Create Account Button */}
          <button
            type="submit"
            className="w-full bg-red-500 text-white text-sm font-medium py-2 rounded-sm hover:bg-red-600 transition"
          >
            Create Account
          </button>
        </form>

        {/* Sign up with Google */}
        <div className="mt-6 flex items-center justify-center">
          <button
            type="button"
            className="flex items-center w-full justify-center border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition"
          >
            <Image src='/images/google.webp' alt='google' height={30} width={30} />
            <span className="text-gray-700 text-sm">Sign up with Google</span>
          </button>
        </div>

        {/* Already have an account */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{' '}
          <Link
            href="/login"
            className="text-blue-500 hover:underline"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
