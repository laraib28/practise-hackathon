import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Login = () => {
  return (
    <div  className='flex justify-between p-5 pt-12'>
      <div>
              <Image src='/images/signup.png' alt='image' height={600} width={800} />
            </div>
            <div className="w-full max-w-md bg-white p-6 pt-40">
        {/* Heading */}
        <h1 className="text-2xl font-semibold text-gray-900 text-center mb-2">
          Log in to Exclusive
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Enter your details below
        </p>
        <form>
          {/* Name */}
          <div className="mb-4">
          
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
          </form>
          {/* Create Account Button */}
          <div className='flex justify-between'>
          <button
            type="submit"
            className="w-24 h-12 bg-red-500 text-white  font-medium py-2 rounded-sm hover:bg-red-600 transition"
          >
            Log in
          </button>
        
        <Link
            href=""
            className="text-red-500 pt-4"
          >
            Forgot Password
          </Link>
          </div>
          </div>
    </div>
  )
}

export default Login
