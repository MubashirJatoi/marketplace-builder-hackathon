"use client";
import Image from "next/image";
import Filter from "../../../public/Images/filter.png";
import Sort from "../../../public/Images/sort.png";
import Select from "../../../public/Images/select.png";
import Scroller from "../../../public/Images/scroller.png";
import Circlee from "../../../public/Images/circlee.png";
import { useEffect, useState } from "react";
import { allProducts } from "@/sanity/lib/queries";
import { Product } from "../../../types/products";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

function Shop() {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchproduct() {
      const fetchedProduct: Product[] = await client.fetch(allProducts);
      setProduct(fetchedProduct);
    }
    fetchproduct();
  }, []);

  return (
    <div className="mt-[30px] md:mt-[50px]">
      <div className="flex justify-between items-start mb-[30px]">
        <h3 className="hidden md:block text-[18px] md:text-[24px] ml-[15px] md:ml-[30px] font-[600px] ">
          New (500)
        </h3>
        <div className="flex mr-[30px] gap-3 ml-[9.5rem] md:ml[0rem] md:gap-6 items-center md:mr-[6.5rem]">
          <div className="flex gap-1 items-center cursor-pointer">
            <p className="text-[14px] md:text-[16px] text-center">
              Hide Filters
            </p>
            <Image className="mb-[-5px]" src={Filter} alt="filter"></Image>
          </div>
          <div className="flex gap-1 items-center cursor-pointer">
            <p className="text-[13px] md:text-[15px] text-right">Sort By</p>
            <Image className="mb-[-2px]" src={Sort} alt="sort"></Image>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="">
          <div className="md:flex hidden">
            <div className="grid grid-cols-2 gap-3 md:gap-0 px-4 md:px-0 md:grid-cols-1 w-[100%] md:w-[260px] text-[15px] mb-[50px] md:ml-[30px] md:leading-[35px]">
              <p className="cursor-pointer">Shoes</p>
              <p className="cursor-pointer">Sports Bras</p>
              <p className="cursor-pointer">Tops & T-Shirts</p>
              <p className="cursor-pointer">Hoodies & Sweatshirts</p>
              <p className="cursor-pointer">Jackets</p>
              <p className="cursor-pointer">Trousers & Tights</p>
              <p className="cursor-pointer">Shorts</p>
              <p className="cursor-pointer">Tracksuits</p>
              <p className="cursor-pointer">Jumpsuits & Rompers</p>
              <p className="cursor-pointer">Skirts & Dresses</p>
              <p className="cursor-pointer">Socks</p>
              <p className="w-[95.57px] leading-[17px] text-[16px] cursor-pointer">Accessories & Equipment</p>
            </div>
            <Image
              className="hidden md:block ml-[-10px] cursor-pointer"
              src={Scroller}
              alt="sroller"
            ></Image>
          </div>
          <div className="hidden md:block ml-[30px] w-[192px]">
            <div className="hidden md:block w-[192px]">
              <div className="flex justify-between mb-[20px] mr-[5px] pt-[10px] border-t-2 border-solid border-[#CCCCCC]">
                <p className="text-[16px]">Gender</p>
                <Image
                  className="w-[14px] h-[14px]"
                  src={Select}
                  alt="select"
                ></Image>
              </div>
            </div>
            <div>
              <input type="checkbox" />
              <label className="ml-[2px] text-[15px]" htmlFor="checkbox">
                Men
              </label>
            </div>
            <div>
              <input type="checkbox" />
              <label className="ml-[2px] text-[15px]" htmlFor="checkbox">
                Women
              </label>
            </div>
            <div>
              <input type="checkbox" />
              <label className="ml-[2px] text-[15px]" htmlFor="checkbox">
                Unisex
              </label>
            </div>
          </div>
          <div className="hidden md:block ml-[30px]">
            <div className="flex justify-between mb-[20px] w-[192px] mr-[5px] mt-[20px] pt-[10px] border-t-2 border-solid border-[#CCCCCC]">
              <p className="text-[16px]">Kids</p>
              <Image
                className="w-[14px] h-[14px]"
                src={Select}
                alt="select"
              ></Image>
            </div>
            <div>
              <input type="checkbox" />
              <label className="ml-[2px] text-[15px]" htmlFor="checkbox">
                Boys
              </label>
            </div>
            <div>
              <input type="checkbox" />
              <label className="ml-[2px] text-[15px]" htmlFor="checkbox">
                Girls
              </label>
            </div>
          </div>
          <div className="hidden md:block ml-[30px]">
            <div className="flex justify-between mb-[20px] w-[192px] mt-[20px] mr-[5px] pt-[10px] border-t-2 border-solid border-[#CCCCCC]">
              <p className="text-[16px]">Shop by Price</p>
              <Image
                className="w-[14px] h-[14px]"
                src={Select}
                alt="select"
              ></Image>
            </div>
            <div>
              <input type="checkbox" />
              <label className="ml-[2px] text-[15px]" htmlFor="checkbox">
                Under ₹ 2 500.00
              </label>
            </div>
            <div>
              <input type="checkbox" />
              <label className="ml-[2px] text-[15px]" htmlFor="checkbox">
                ₹ 2 501.00 - ₹ 7 500.00
              </label>
            </div>
          </div>
        </div>


        <div className="md:w-[1192px] w-[100%] px-1 md:px-0">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-0 px-4">
            {/* <div> */}
            {product.map((product) => (
              <div
                key={product._id}
                className="md:w-[348px] md:h-[533px] transition-transform duration-[0.3s] cursor-pointer ease-in-out hover:transform hover:scale-105"
              >
                <Link href={`/product/${product.slug.current}`}>
                  {product.image && (
                    <Image
                      src={urlFor(product.image).url()}
                      alt="image"
                      width={348}
                      height={533}
                    />
                  )}
                  <div>
                    <p className="text-[#9E3500] text-[15px] font-[600] leading-28px">
                      {product.status}
                    </p>
                    <p className="text-[15px] leading-[24px] font-[600]">
                      {product.productName}
                    </p>
                    <p className="text-[#757575] text-[15px] leading-[24px]">
                      {product.category}
                    </p>
                    <p className="text-[#757575] text-[15px] leading-[24px]">
                      {product.inventory} {product.colors}
                    </p>
                    <p className="text-[15px] leading-[28px] font-[600]">
                      MRP : ₹ {product.price}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="w-[100%] px-20 md:px-0 md:w-[1000px] h-[64px] flex justify-center pt-[32px] mb-[3rem] md:mb-[100px]">
            <Image src={Circlee} alt="circlee"></Image>
          </div>

          <h3 className="md:hidden block text-[18px] md:text-[24px] ml-[15px] md:ml-[30px] font-[600px] mb-[1rem] md:mb-[0rem] ">
          New (500)
          </h3>
          <div className="block md:hidden">
            <div className="grid grid-cols-2 gap-3 md:gap-0 px-4 md:px-0 md:grid-cols-1 w-[100%] md:w-[260px] text-[15px] mb-[50px] md:ml-[30px] md:leading-[35px]">
              <p className="cursor-pointer">Shoes</p>
              <p className="cursor-pointer">Sports Bras</p>
              <p className="cursor-pointer">Tops & T-Shirts</p>
              <p className="cursor-pointer">Hoodies & Sweatshirts</p>
              <p className="cursor-pointer">Jackets</p>
              <p className="cursor-pointer">Trousers & Tights</p>
              <p className="cursor-pointer">Shorts</p>
              <p className="cursor-pointer">Tracksuits</p>
              <p className="cursor-pointer">Jumpsuits & Rompers</p>
              <p className="cursor-pointer">Skirts & Dresses</p>
              <p className="cursor-pointer">Socks</p>
              <p className="w-[95.57px] leading-[17px] text-[16px] cursor-pointer">Accessories & Equipment</p>
            </div>
            <Image
              className="hidden md:block ml-[-50px] cursor-pointer"
              src={Scroller}
              alt="sroller"
            ></Image>
          </div>
          <div className="block md:hidden">
          <div className="w-[100%] px-4 mb-6 grid grid-cols-2 gap-2">
            <div className="block md:hidden">
              <div className="flex justify-between mb-[20px] mr-[5px] pt-[10px] border-t-2 border-solid border-[#CCCCCC]">
                <p className=" text-[16px]">Gender</p>
                <Image
                  className="w-[14px] h-[14px]"
                  src={Select}
                  alt="select"
                ></Image>
              </div>
              <div className="block md:hidden">
                <input type="checkbox" />
                <label className="ml-[2px] text-[15px]" htmlFor="checkbox">
                  Men
                </label>
              </div>
              <div className="block md:hidden">
                <input type="checkbox" />
                <label className="ml-[2px] text-[15px]" htmlFor="checkbox">
                  Women
                </label>
              </div>
              <div className="block md:hidden">
                <input type="checkbox" />
                <label className="ml-[2px] text-[15px]" htmlFor="checkbox">
                  Unisex
                </label>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-[20px] mr-[5px] pt-[10px] border-t-2 border-solid border-[#CCCCCC]">
                <p className="text-[16px]">Kids</p>
                <Image
                  className="w-[14px] h-[14px]"
                  src={Select}
                  alt="select"
                ></Image>
              </div>
              <div className="block md:hidden">
                <input type="checkbox" />
                <label className="ml-[2px] text-[15px]" htmlFor="checkbox">
                  Boys
                </label>
              </div>
              <div>
                <input type="checkbox" />
                <label className="ml-[2px] text-[15px]" htmlFor="checkbox">
                  Girls
                </label>
              </div>
            </div>
          </div>
        </div>
          <div className="mb-[5rem] md:mb-[100px] px-1 md:px-0 mt-[2rem] md:mt[0rem]">
            <h3 className="text-[19px] mb-[20px] leading-[24px] font-[600] px-1 md:px-0">
              Related Categories
            </h3>
            <div>
              <div className="grid grid-cols-2 md:grid-cols-7 gap-2">
                <div className="w-auto cursor-pointer h-[34px] rounded-[20px] flex justify-center items-center border border-gray-300 hover:bg-gray-300">
                  <p className="text-[12px]">Best Selling Products</p>
                </div>
                <div className="w-auto cursor-pointer h-[34px] rounded-[20px] flex justify-center items-center border border-gray-300 hover:bg-gray-300">
                  <p className="text-[12px]">Best Shoes</p>
                </div>
                <div className="w-auto cursor-pointer h-[34px] rounded-[20px] flex justify-center items-center border border-gray-300 hover:bg-gray-300">
                  <p className="text-[12px]">New Basketball Shoes</p>
                </div>
                <div className="w-autocursor-pointer h-[34px] rounded-[20px] flex justify-center items-center border border-gray-300 hover:bg-gray-300">
                  <p className="text-[12px]">New Football Shoes</p>
                </div>
                <div className="w-auto cursor-pointer h-[34px] rounded-[20px] flex justify-center items-center border border-gray-300 hover:bg-gray-300">
                  <p className="text-[12px]">New Men's Shoes</p>
                </div>
                <div className="w-auto cursor-pointer h-[34px] rounded-[20px] flex justify-center items-center border border-gray-300 hover:bg-gray-300">
                  <p className="text-[12px]">New Running Shoes</p>
                </div>
                <div className="w-auto cursor-pointer h-[34px] rounded-[20px] flex justify-center items-center border border-gray-300 hover:bg-gray-300">
                  <p className="text-[12px]">Best Men's Shoes</p>
                </div>
                <div className="w-auto cursor-pointer h-[34px] rounded-[20px] flex justify-center items-center border border-gray-300 hover:bg-gray-300">
                  <p className="text-[12px]">New Jordan Shoes</p>
                </div>
                <div className="w-auto cursor-pointer h-[34px] rounded-[20px] flex justify-center items-center border border-gray-300 hover:bg-gray-300">
                  <p className="text-[12px]">Best Women's Shoes</p>
                </div>
                <div className="w-auto cursor-pointer h-[34px] rounded-[20px] flex justify-center items-center border border-gray-300 hover:bg-gray-300">
                  <p className="text-[12px]">Best Training & Gym</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
