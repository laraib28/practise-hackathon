import Link from 'next/link';
import React from 'react';


function Header() {
  return (
    <header className=" w-full bg-black text-gray-300 flex items-center justify-center">
      <div className="text-center text-lg font-medium px-4 ">
        <h1>
        Summer Side For All Swim And Free Delivery - OFF 50%!
        
        <Link href='/' className='underline'>  ShopNow</Link>
        </h1>
        </div>
        <div className="flex items-center space-x-1">
        <span className="text-sm ml-56">English</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-gray-300 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
       
       
     
    </header>
  );
}

export default Header;
