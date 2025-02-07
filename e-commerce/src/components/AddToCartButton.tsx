"use client";

import Swal from "sweetalert2";
import { Product } from "../../types/products";
import { addToCart } from "@/app/actions/actions";
import Image from "next/image";
import Buy2 from "../../public/Images/Buy 2.png"



interface AddToCartButtonProps {
    product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        Swal.fire({
            position : "top-right",
            icon : "success",
            title : `${product.productName}\nadded to cart`,
            showConfirmButton : false,
            timer : 1000
        })
        addToCart(product);
    }

    return(
        <div>
                        <button className="w-[174.42px] h-[44px] rounded-[30px] bg-[#111111] flex justify-center items-center text-[15px] text-[#FFFFFF] text-center hover:scale-110 transition-transform duration-200 ease-in-out" 
                        onClick={handleAddToCart} ><Image src={Buy2} alt="buy2" width={29} height={29}></Image><p className="ml-[10px]">Add To Cart</p></button>
                    </div>
    )
}