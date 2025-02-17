import Image from "next/image";
import Logo from "../../public/Images/logo.png"
import Link from "next/link";

function Header() {


    return(
        <div className="w-[100%] h-[36px] items-center bg-[#F5F5F5] flex justify-between pl-[48px] pr-[48px] mx-auto">
            <div className="cursor-pointer">
                <Link href={"/"}>
                    <Image src={Logo} alt="logo"></Image>
                </Link>
            </div>
            <div className="hidden sm:hidden md:block">
            <Link href={"/shop"}>
                <p className="text-[13px] cursor-pointer flex items-center pb-[3px] justify-center hover:rounded-[8px] w-[146.86px] h-[26px] hover:bg-black text-center hover:text-[#FFFFFF] bg-[#FFFFFF] ml-[400px] font-[500] text-[#111111]">Skip to main content</p>
            </Link>
            </div>
            <div className="flex gap-3 md:gap-5">
                <Link href={"/location"}>
                    <p className="text-[11px] font-[500] text-[#111111] cursor-pointer hover:underline">Find a Store</p>
                </Link>
                <p className="w-[3px] h-[14px] text-[#111111] font-[400] text-[12px] ml-[-2px] mt-[-2px]">|</p>
                <Link href={"/help"}>
                    <p className="text-[11px] font-[500] text-[#111111] cursor-pointer hover:underline">Help</p>
                </Link>
                <p className="w-[3px] h-[14px] text-[#111111] font-[400] text-[12px] ml-[-2px] mt-[-2px]">|</p>
                <Link href={"/joinUs"}>
                    <p className="text-[11px] font-[500] text-[#111111] cursor-pointer hover:underline">Join Us</p>
                </Link>
                <p className="w-[3px] h-[14px] text-[#111111] font-[400] text-[12px] ml-[-2px] mt-[-2px]">|</p>
                <Link href={"signIn"}>
                    <p className="text-[11px] font-[500] text-[#111111] cursor-pointer hover:underline">Sign In</p>
                </Link>
            </div>
        </div>
    );
};

export default Header;