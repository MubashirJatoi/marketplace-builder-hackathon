"use client";
import { useState } from "react";
import Image from "next/image";
import Nike from "../../public/Images/nike-logo.png";
import Like from "../../public/Images/like.png";
import Buy from "../../public/Images/buy.png";
import Search from "../../public/Images/search.png";
import Link from "next/link";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex w-[100%] h-[60px] items-center">
      <div className="flex items-center justify-around h-[60px] w-[95%] m-auto">
        <div
          className="flex items-center gap-6 md:hidden cursor-pointer"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
          <Link href={"/"}>
            <Image className="cursor-pointer" src={Nike} alt="nike"></Image>
          </Link>
        </div>
        <div>
          <Link href={"/"}>
            <Image
              className="cursor-pointer hidden md:block"
              src={Nike}
              alt="nike"
            ></Image>
          </Link>
        </div>
        <div className="hidden md:flex text-[15px] ml-[130px] font-[600] gap-6">
          <Link href={"#"} className="cursor-pointer hover:underline">New & Featured</Link>
          <Link href={"#"} className="cursor-pointer hover:underline">Men</Link>
          <Link href={"#"} className="cursor-pointer hover:underline">Women</Link>
          <Link href={"#"} className="cursor-pointer hover:underline">Kids</Link>
          <Link href={"#"} className="cursor-pointer hover:underline">Sale</Link>
          <Link href={"#"} className="cursor-pointer hover:underline">SNKRS</Link>
        </div>
        {/* Menu Items - Hidden on Mobile */}
        <div className={`md:hidden text-[15px] mt-[60px] bg-black text-white p-10 font-[600] gap-10 w-[100%] absolute top-10 left-0 z-10 ${menuOpen ? 'block' : 'hidden'}`}>
                    <Link href={"#"} className="cursor-pointer hover:underline">New & Featured</Link>
                    <Link href={"#"} className="cursor-pointer hover:underline">Men</Link>
                    <Link href={"#"} className="cursor-pointer hover:underline">Women</Link>
                    <Link href={"#"} className="cursor-pointer hover:underline">Kids</Link>
                    <Link href={"#"} className="cursor-pointer hover:underline">Sale</Link>
                    <Link href={"#"} className="cursor-pointer hover:underline">SNKRS</Link>
                </div>
        <div className="hidden md:block mt-[-10px] mr-[-120px]">
          <Image
            className="cursor-pointer relative top-[29px] left-[15px]"
            src={Search}
            alt="search"
          ></Image>
          <input
            className="w-[180px] pl-[50px] bg-[#F5F5F5] h-[40px] rounded-[100px]"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="flex gap-5">
          <Image
            className="md:hidden cursor-pointer relative"
            src={Search}
            alt="search"
          ></Image>
          <Image
            className="cursor-pointer hover:rounded-[4px] hover:bg-[#dddbdb]"
            src={Like}
            alt="like"
          ></Image>
          <Link href={"/cart"}>
            <Image
              className="cursor-pointer hover:rounded-[4px] hover:bg-[#dddbdb]"
              src={Buy}
              alt="buy"
            ></Image>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;