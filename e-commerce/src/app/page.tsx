"use client"
import Image from "next/image";
import Shoe from "../../public/Images/shoe.png"
import Left from "../../public/Images/left.png"
import Right from "../../public/Images/right.png"
import Shoe1 from "../../public/Images/shoe1.png"
import Shoe2 from "../../public/Images/shoe2.png"
import Shoe3 from "../../public/Images/shoe3.png"
import Shoe4 from "../../public/Images/shoe4.png"
import Image1 from "../../public/Images/Image1.png"
import Men1 from "../../public/Images/men1.png"
import Men2 from "../../public/Images/men2.png"
import Women1 from "../../public/Images/women1.png"
import Women2 from "../../public/Images/women2.png"
import Image2 from "../../public/Images/Image2.png"
import Pic1 from "../../public/Images/pic1.png"
import Pic2 from "../../public/Images/pic2.png"
import Pic3 from "../../public/Images/pic3.png"
import Link from "next/link";

export default function Home() {
    return(
      <div className="mt-[5px]">
        <div className="bg-[#F5F5F5] pt-[10px] pb-[10px]">
          <h3 className="text-[15px] text-center text-[#111111] font-[600]">Hello Nike App</h3>
          <p className="text-[11px] text-center text-[#111111] font-[500] mt-[7px]">Download the app to access everything Nike. <strong className="underline cursor-pointer hover:no-underline">Get Your Great</strong></p>
        </div>
        <div className="w-[95%] m-auto mb-[50px]">
          <Image src={Shoe} alt="shoe"></Image>
        </div>
        <div>
          <p className="font-[600] text-[15px] text-center">First Look</p>
          <h1 className="font-[600] text-[30px] md:text-[56px] text-center mt-[-10px]">NIKE AIR MAX PULSE</h1>
          <p className="font-[500] text-[10px] px-4 md:text-[15px] text-center m-auto mt-[10px] md:w-[525px] h-[48px] leading-[24px]">Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse designed to push you past your limits and help you go to the max.</p>
          <div className="flex mt-[30px] gap-2 justify-center">
            <button className="bg-[#111111] w-[110.58px] h-[39px] text-[15px] transition-transform duration-[0.3s] ease-in-out hover:transform hover:scale-105 text-center text-[#FFFFFF] rounded-[30px]">Notify Me</button>
            <Link href={"/shop"}>
            <button className="bg-[#111111] w-[138.16px] h-[39px] text-[15px] transition-transform duration-[0.3s] ease-in-out hover:transform hover:scale-105 text-center text-[#FFFFFF] rounded-[30px]">Shop Air Max</button>
            </Link>
          </div>
        </div>
        <div className="flex gap-2 justify-between mt-[100px] px-6 md:px-12 item-center">
          <p className="font-[800px] text-[20px] md:text-[22px] ">Best of Air Max</p>
          <div className="flex items-center gap-2">
            <p className="mr-[10px] text-[12px] md:text-[15px] text-[#111111]">Shop</p>
            <div className="rounded-full cursor-pointer  transition-transform duration-[0.3s] ease-in-out hover:transform hover:scale-105 bg-[#E5E5E5] w-[30px] md:w-[48px] h-[30px] md:h-[48px]">
              <Image className="relative bottom-[-7px] md:bottom-[-15px] left-[9px] md:left-[17px]" src={Left} alt="left"></Image>
            </div>
            <div className="rounded-full cursor-pointer  transition-transform duration-[0.3s] ease-in-out hover:transform hover:scale-105 bg-[#E5E5E5] w-[30px] md:w-[48px] h-[30px] md:h-[48px]">
              <Image className="relative bottom-[-7px] md:bottom-[-15px] left-[11px] md:left-[17px]" src={Right} alt="right"></Image>
            </div>
          </div>
        </div>
        <div className="flex px-4 md:ml-[50px] mt-[20px] gap-2 md:h-[540.36px]">
          <div className="w-[441.36px]  transition-transform duration-[0.3s] ease-in-out hover:transform hover:scale-105 md:h-[510.36px] cursor-pointer">
            <Link href={"/shop"}>
            <Image src={Shoe1} alt="shoe1"></Image>
            </Link>
            <div className="flex flex-col md:flex-row gap-1 justify-between pr-[20px] mb-[3px] mt-[20px]">
              <p className="text-[9px] font-semibold md:text-[15px]">Nike Air Max Pulse</p>
              <p className="text-[12px] md:text-[15px] text-left md:text-right">₹ 13 995</p>
            </div>
            <p className="text-[#757575] text-[12px] md:text-[15px] font-[400]">Women&apos;s Shoes</p>
          </div>
          <div className="w-[441.36px] transition-transform duration-[0.3s] ease-in-out hover:transform hover:scale-105 md:h-[510.36px] cursor-pointer">
          <Link href={"/shop"}>
            <Image src={Shoe2} alt="shoe2"></Image>
            </Link>
            <div className="flex flex-col md:flex-row gap-1 justify-between pr-[20px] mb-[3px] mt-[20px]">
              <p className="text-[9px] font-semibold md:text-[15px]">Nike Air Max Pulse</p>
              <p className="text-[12px] md:text-[15px] text-left md:text-right">₹ 13 995</p>
            </div>
            <p className="text-[#757575] text-[12px] md:text-[15px] font-[400]">Men&apos;s Shoes</p>
          </div>
          <div className="w-[441.36px] transition-transform duration-[0.3s] ease-in-out hover:transform hover:scale-105md: md:h-[510.36px] cursor-pointer">
          <Link href={"/shop"}>
            <Image src={Shoe3} alt="shoe3"></Image>
            </Link>
            <div className="flex flex-col md:flex-row gap-1 justify-between pr-[20px] mb-[3px] mt-[20px]">
              <p className="text-[9px] font-semibold md:text-[15px]">Nike Air Max Pulse</p>
              <p className="text-[12px] md:text-[15px] text-left md:text-right">₹ 13 995</p>
            </div>
            <p className="text-[#757575] text-[12px] md:text-[15px] font-[400]">Men&apos;s Shoes</p>
          </div>
          <div className="hidden md:block md:h-[510.36px] transition-transform duration-[0.3s] ease-in-out hover:transform hover:scale-105 cursor-pointer">
          <Link href={"/shop"}>
            <Image src={Shoe4} alt="shoe4"></Image>
            </Link>
            <div className="mb-[3px] mt-[20px]">
                <p className="text-[15px]">Nike</p>
                <p className="text-[#757575] text-[15px] font-[400]">Wo</p>
            </div>
          </div>
        </div>
        <div className="w-[92%] mt-[50px] m-auto">
          <h3 className="text-[23px] font-[600] mb-[20px]">Featured</h3>
          <Image src={Image1} alt="image"></Image>
          <h1 className="text-[20px] md:text-[56px] font-[600] text-center mt-[30px] mb-[20px]">STEP INTO WHAT FEELS GOOD</h1>
          <p className="text-[12px] md:text-[15px] font-[400] mb-[30px] text-center">Cause everyone should know the feeling of running in that perfect pair.</p>
          <div className="flex justify-center">
          <Link href={"/shop"}>
            <button className="bg-[#111111] w-[152.42px] transition-transform duration-[0.3s] ease-in-out hover:transform hover:scale-105 h-[39px] text-[15px] text-center text-[#FFFFFF] rounded-[30px]">Find Your Shoe</button>
            </Link>
          </div>
        </div>
        <div className="w-[95%] mt-[50px] md:mt-[80px] m-auto">
        <h3 className="pl-1 md:pl-0 text-[23px] font-[600] mb-[20px]">Gear Up</h3>
        <div className="flex flex-col md:flex-row gap-5 px-x md:px-0">
          <div className="md:ml-[40px]">
            <div className="flex items-center md:pr-[50px] justify-end gap-4 md:gap-2">
              <p className="md:mr-[10px] text-[15px] text-[#111111]">Shop Men&apos;s</p>
              <div className="rounded-full cursor-pointer  transition-transform duration-[0.3s] ease-in-out hover:transform hover:scale-105 bg-[#E5E5E5] w-[30px] md:w-[48px] h-[30px] md:h-[48px]">
              <Image className="relative bottom-[-7px] md:bottom-[-15px] left-[9px] md:left-[17px]" src={Left} alt="left"></Image>
            </div>
            <div className="rounded-full cursor-pointer  transition-transform duration-[0.3s] ease-in-out hover:transform hover:scale-105 bg-[#E5E5E5] w-[30px] md:w-[48px] h-[30px] md:h-[48px]">
              <Image className="relative bottom-[-7px] md:bottom-[-15px] left-[11px] md:left-[17px]" src={Right} alt="right"></Image>
            </div>
              </div>
              <div className="flex mt-[20px] gap-3">
                <div className="cursor-pointer transition-transform duration-[0.3s] ease-in-out hover:transform hover:scale-105">
                <Link href={"/shop"}>
                <Image src={Men1} alt="men1"></Image>
                </Link>
                <div className="flex flex-col md:flex-row justify-between md:pr-[20px] mb-[3px] mt-[20px]">
                  <p className="text-[10px] md:text-[13px]">Nike Dri-FIT ADV TechKnit Ultra</p>
                  <p className="text-[13px] text-left md:text-right">₹ 3895</p>
                </div>
                <p className="text-[#757575] text-[10px] md:text-[13px] font-[400]">Men&apos;s Short-Sleeve</p>
                <p className="text-[#757575] text-[10px] md:text-[13px] font-[400]">Running Top</p>
                </div>
                <div className="cursor-pointer transition-transform duration-[0.3s] ease-in-out hover:transform hover:scale-105">
                <Link href={"/shop"}>
                <Image src={Men2} alt="men2"></Image>
                </Link>
                <div className="flex flex-col md:flex-row justify-between md:pr-[20px] mb-[3px] mt-[20px]">
                  <p className="text-[10px] md:text-[13px]">Nike Dri-FIT Challenger</p>
                  <p className="text-[13px] text-left md:text-right">₹ 2495</p>
                </div>
                <p className="text-[#757575] text-[10px] md:text-[13px] font-[400]">Men&apos;s 18cm (approx.) 2-</p>
                <p className="text-[#757575] text-[10px] md:text-[13px] font-[400]">in-1 Versatile Shorts</p>
                </div>
              </div>
          </div>
          <div className="md:ml-[60px]">
            <div className="flex items-center md:pr-[50px] justify-end gap-4 md:gap-2">
              <p className="md:mr-[10px] text-[15px] text-[#111111]">Shop Women&apos;s</p>
              <div className="rounded-full cursor-pointer  transition-transform duration-[0.3s] ease-in-out hover:transform hover:scale-105 bg-[#E5E5E5] w-[30px] md:w-[48px] h-[30px] md:h-[48px]">
              <Image className="relative bottom-[-7px] md:bottom-[-15px] left-[9px] md:left-[17px]" src={Left} alt="left"></Image>
            </div>
            <div className="rounded-full cursor-pointer  transition-transform duration-[0.3s] ease-in-out hover:transform hover:scale-105 bg-[#E5E5E5] w-[30px] md:w-[48px] h-[30px] md:h-[48px]">
              <Image className="relative bottom-[-7px] md:bottom-[-15px] left-[11px] md:left-[17px]" src={Right} alt="right"></Image>
            </div>
            </div>
              <div className="flex mt-[20px] md:mr-[20px] gap-3">
                <div className="cursor-pointer transition-transform duration-[0.3s] ease-in-out hover:transform hover:scale-105">
                <Link href={"/shop"}>
                <Image src={Women1} alt="women1"></Image>
                </Link>
                <div className="flex flex-col md:flex-row justify-between md:pr-[20px] mb-[3px] mt-[20px]">
                  <p className="text-[10px] md:text-[13px]">Nike Dri-FIT ADV Run Division</p>
                  <p className="text-[13px] text-left md:text-right">₹ 5295</p>
                </div>
                <p className="text-[#757575] text-[10px] md:text-[13px] font-[400]">Women&apos;s Long-Sleeve</p>
                <p className="text-[#757575] text-[10px] md:text-[13px] font-[400]">Running Top</p>
                </div>
                <div className="cursor-pointer transition-transform duration-[0.3s] ease-in-out hover:transform hover:scale-105">
                <Link href={"/shop"}>
                <Image src={Women2} alt="women2"></Image>
                </Link>
                <div className="flex flex-col md:flex-row justify-between md:pr-[20px] mb-[3px] mt-[20px]">
                  <p className="text-[10px] md:text-[13px]">Nike Fast</p>
                  <p className="text-[13px] text-left md:text-right">₹ 3795</p>
                </div>
                <p className="text-[#757575] text-[10px] md:text-[13px] font-[400]">Women&apos;s Mid-Rise 7/8 Running</p>
                <p className="text-[#757575] text-[10px] md:text-[13px] font-[400]">Leggings with Pockets</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[92%] mt-[60px] md:mt-[100px] m-auto">
          <h3 className="text-[23px] font-[600] mb-[20px]">Don&apos;t Miss</h3>
          <Image src={Image2} alt="image2"></Image>
          <h1 className="text-[25px] md:text-[52px] font-[600] text-center mt-[30px] mb-[20px]">FLIGHT ESSENTIALS</h1>
          <p className="text-[12px] md:text-[15px] font-[400] mb-[30px] text-center">Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>
          <div className="flex justify-center">
          <Link href={"/shop"}>
            <button className="bg-[#111111] w-[80.38px] h-[39px] transition-transform duration-[0.3s] ease-in-out hover:transform hover:scale-105 text-[15px] text-center text-[#FFFFFF] rounded-[30px]">Shop</button>
            </Link>
          </div>
        </div>
        <div className="w-[92%] mt-[40px] md:mt-[80px] m-auto">
          <h3 className="text-[23px] font-[600] mb-[20px]">The Essentials</h3>
          <div className="flex flex-col md:flex-row gap-3">
            <div className=" transition-transform duration-[0.3s] ease-in-out hover:transform hover:scale-105">
            <Link href={"/shop"}>
              <Image src={Pic1} alt="pic1"></Image>
              <button className="bg-white text-black w-[85.19px] text-[15px] h-[39px] rounded-[30px] relative bottom-[80px] left-[45px]">Men&apos;s</button>
              </Link>
            </div>
            <div className=" transition-transform duration-[0.3s] ease-in-out hover:transform hover:scale-105">
            <Link href={"/shop"}>
              <Image src={Pic2} alt="pic2"></Image>
              <button className="bg-white text-black w-[85.19px] text-[15px] h-[39px] rounded-[30px] relative bottom-[80px] left-[45px]">Women&apos;s</button>
              </Link>
            </div>
            <div className=" transition-transform duration-[0.3s] ease-in-out hover:transform hover:scale-105">
            <Link href={"/shop"}>
              <Image src={Pic3} alt="pic3"></Image>
              <button className="bg-white text-black w-[85.19px] text-[15px] h-[39px] rounded-[30px] relative bottom-[80px] left-[45px]">Kid&apos;s</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-[15px] md:mt-[50px] mb-[50px] w-[85%] m-auto md:h-[192px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-[200px]">
          <div className="text-[10px] md:text-[15px] mt-[20px] text-[#757575] font-[500] leading-6 md:leading-8 px-3 md:px-0">
            <p className="text-black mb-2 md:mb-4">Icons</p>
            <p className="cursor-pointer hover:text-[black]">Air Force 1</p>
            <p className="cursor-pointer hover:text-[black]">Huarache</p>
            <p className="cursor-pointer hover:text-[black]">Air Max 90</p>
            <p className="cursor-pointer hover:text-[black]">Air Max 95</p>
          </div>
          <div className="text-[10px] md:text-[15px] mt-[20px] text-[#757575] font-[500] leading-6 md:leading-8 px-3 md:px-0">
            <p className="text-black mb-2 md:mb-4">Shoes</p>
            <p className="cursor-pointer hover:text-[black]">All Shoes</p>
            <p className="cursor-pointer hover:text-[black]">Custom Shoes</p>
            <p className="cursor-pointer hover:text-[black]">Jordan Shoes</p>
            <p className="cursor-pointer hover:text-[black]">Running Shoes</p>
          </div>
          <div className="text-[10px] md:text-[15px] mt-[20px] text-[#757575] font-[500] leading-6 md:leading-8 px-3 md:px-0">
            <p className="text-black mb-2 md:mb-4">Clothing</p>
            <p className="cursor-pointer hover:text-[black]">All Clothing</p>
            <p className="cursor-pointer hover:text-[black]">Modest Wear</p>
            <p className="cursor-pointer hover:text-[black]">Hoodies & Pullovers</p>
            <p className="cursor-pointer hover:text-[black]">Shirts & Tops</p>
          </div>
          <div className="text-[10px] md:text-[15px] mt-[20px] text-[#757575] font-[500] leading-6 md:leading-8 px-3 md:px-0">
            <p className="text-black mb-2 md:mb-4">Kid&apos;s</p>
            <p className="cursor-pointer hover:text-[black]">Infant & Toddler Shoes</p>
            <p className="cursor-pointer hover:text-[black]">Kid&apos;s Shoes</p>
            <p className="cursor-pointer hover:text-[black]">Kid&apos;s Jordan Shoes</p>
            <p className="cursor-pointer hover:text-[black]">Kid&apos;s Basketball Shoes</p>
          </div>
          </div>
        </div>
      </div>
    );
};