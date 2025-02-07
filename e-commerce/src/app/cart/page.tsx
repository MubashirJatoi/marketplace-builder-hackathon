"use client"
import Image from "next/image";
import dustbin from "../../../public/Images/dustbin.png";
import like from "../../../public/Images/like.png";
import { useEffect, useState } from "react";
import { Product } from "../../../types/products";
import { getCartItems, removeFromCart, updateCartQuantity } from "../actions/actions";
import Swal from "sweetalert2";
import { urlFor } from "@/sanity/lib/image";
import { useRouter } from "next/navigation";

const Cart = () => {

    const [cartItems, setCartItems] = useState<Product[]>([])

    useEffect(() => {
        setCartItems(getCartItems())
    }, [])

    const handleRemove =(id : string) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to remove this item from cart!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, remove it!'
          }).then((result) => {
            if (result.isConfirmed) {
                removeFromCart(id)
                setCartItems(getCartItems())
                Swal.fire("Remove!", "Item has been removed from cart.", "success")
            }
        })
    }

    const handleQuantityChange = (id : string, quantity : number) => {
        updateCartQuantity(id, quantity);
        setCartItems(getCartItems())
    }

    const handleIncreament = (id : string) => {
        const product = cartItems.find((item) => item._id === id);
        if(product) {
            handleQuantityChange(id, product.inventory + 1)
        }
    }

    const handleDecreament = (id : string) => {
        const product = cartItems.find((item) => item._id === id);
        if(product && product.inventory > 1) {
            handleQuantityChange(id, product.inventory - 1)
        }
    }

    const CalculatedTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.inventory, 0)
    }

    const router = useRouter()
    const handleProceed = () => {
        Swal.fire({
            title: 'Proceed to Checkout?',
            text: "Please Review your cart before checkout!",
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Proceed!'
          }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("Proceed!", "You have been proceed to checkout.", "success")
                router.push("/checkout")
                setCartItems([])
            }
        })
        }

  return (
    <div className="w-[75%] flex mt-[50px] gap-[20px] m-auto mb-[100px]">
        <div>
            <div className="w-[717.33px] bg-[#F7F7F7] pl-[14px] pt-[15px] mb-[10px]">
                <p className="w-[88px] h-[14px] text-[13px] leading-[14px] text-[#111111]">Free Delivery</p>
                <p className="text-[11px] leading-[24px] text-[#111111] ">Applies to orders of ₹ 14 000.00 or more.<span className="text-[11px]  ml-[20px] leading-[24px] text-[#111111] underline hover:no-underline cursor-pointer">View details</span></p>
            </div>
            <div>
                <h1 className="text-[22px] leading-[33px] text-[#111111]">Bag</h1>
                {cartItems.length > 0 ? (
                cartItems.map((item) => (
                <div key={item._id} className="flex items-center w-[717.33px] h-[218px] py-[24px] gap-[30px]">
                    {item.image && (
                        <Image className="mt-[-22px]" src={urlFor(item.image).url()} alt="image"  width={150} height={150}></Image>
                    )}
                    <div>
                        <div className="flex w-[500px] justify-between">
                            <p className="text-[15px] leading-[28px] text-[#111111]">{item.productName}</p>
                            <p className="text-[15px] leading-[28px] text-[#111111]">MRP: ₹ {item.price}</p>
                        </div>
                        <p className="text-[15px] leading-[28px] text-[#757575]">{item.category}</p>
                        <p className="text-[15px] leading-[28px] text-[#757575]">{item.colors}</p>
                        <div className="mb-[24px] mt-[10px]">
                            <button onClick={() => handleDecreament(item._id)} className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded mr-[30px]" >-</button>
                            <span>{item.inventory}</span>
                            <button onClick={() => handleIncreament(item._id)} className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded ml-[30px]" >+</button>
                        </div>
                        <div className="flex gap-[20px] items-center">
                            <Image className="cursor-pointer" src={like} alt="like"  width={24} height={24}></Image>
                            <Image onClick={() => handleRemove(item._id)} className="cursor-pointer hover:bg-slate-300 hover:rounded-[50%]" src={dustbin} alt="dustbin"  width={24} height={24}></Image>
                        </div>
                    </div>
                </div>
                ))
            ) : (
              <p className="text-gray-600 text-center">Your cart is empty.</p>
            )}
            </div>
        </div>
        <div className="w-[350.67px]">
            <p className="text-[21px] mb-[20px] leading-[33px] text-[#111111]">Summary</p>
            <div className="flex justify-between mb-[5px]">
                <p className="text-[15px] leading-[28px] text-[#111111]">Subtotal</p>
                <p className="text-[14px] leading-[28px] text-[#111111]">₹ {CalculatedTotal().toFixed(2)}</p>
            </div>
            <div className="flex justify-between mb-[20px]">
                <p className="text-[15px] leading-[28px] text-[#111111]">Estimated Delivery & Handling</p>
                <p className="text-[15px] leading-[28px] text-[#111111]">Free</p>
            </div>
            <div className="flex justify-between border-t-[1px] mb-[20px] border-b-[1px] border-[#E5E5E5] py-[10px]">
                <p className="text-[14px] leading-[28px] text-[#111111]">Total</p>
                <p className="text-[14px] leading-[28px] text-[#111111]">₹ {CalculatedTotal().toFixed(2)}</p>
            </div>
            <div className="flex justify-center">
                    <button onClick={handleProceed} className="w-[334.67px] h-[60px] rounded-[30px] bg-[#111111] text-[white] text-center text-[15px]">Member Checkout</button>
            </div>
        </div>
    </div>
  )
}

export default Cart;