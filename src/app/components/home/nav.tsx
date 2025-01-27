"use client"
import Link from "next/link";
import React from "react";
import { CiSearch, CiHeart } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { UseSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { useSelector } from "react-redux";
import { Provider } from "react-redux";



function Nav() {
  const item = useSelector((state: RootState) => state.cart);
  
  return (
    
    <nav className="flex items-center justify-between px-4 py-4 bg-white shadow">
      {/* Brand Name */}
      <div className="text-black font-bold text-2xl pl-16">Exclusive</div>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex gap-10 text-gray-900 font-medium">
        <li className="hover:underline transition-all duration-300 hover:border-gray-500">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:underline transition-all duration-300">
          <Link href="/contact">Contact</Link>
        </li>
        <li className="hover:underline transition-all duration-300">
          <Link href="/about">About</Link>
        </li>
        <li className="hover:underline transition-all duration-300">
          <Link href="/sign-up">Sign Up</Link>
        </li>
   
      </ul>

      {/* Search Bar */}
      <div className="relative hidden md:block">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="w-full text-sm bg-gray-100 rounded-md border-gray-200 px-4 pr-36 py-2"
        />
        <CiSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 text-lg" />
      </div>

      {/* Icons */}
      <div className="hidden md:flex gap-6 mr-16">
        <Link href='/wishlist'>
        <CiHeart className="text-gray-900 text-2xl cursor-pointer hover:text-black" />
        </Link>
        <Link href="/cart">
          <BsCart3 className="text-gray-900 text-2xl cursor-pointer hover:text-black" />
        </Link>
        <Link href='/sign-up'>
        <Image src='/images/login.png' alt="login" height={25} width={25}/>
        </Link>
        
      </div>

      {/* Mobile Dropdown Menu */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="p-2 md:hidden">
            <MenuIcon className="h-6 w-6" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem>
            <Link href="/">Home</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/about">About</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/contact">Contact</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/sign-up">Sign Up</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/cart">Cart</Link> 
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/wishlist">Wish List</Link> 
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}

export default Nav;
