"use client"
import Image from "next/image"
import deliver from "../../../public/Images/deliver.png";
import { useEffect, useState } from "react";
import { Product } from "../../../types/products";
import { getCartItems } from "../actions/actions";
import Link from "next/link";
import { CgChevronRight } from "react-icons/cg";
import { urlFor } from "@/sanity/lib/image";
import Swal from "sweetalert2";
import { client } from "@/sanity/lib/client";



const Checkout = () => {

    const [cartItems, setCartItems] = useState<Product[]>([]);
    const [formValues, setFormValues] = useState({
      firstName: "",
      lastName: "",
      address: "",
      postalCode: "",
      city: "",
      email: "",
      phone: "",
    });

    const [formErrors, setFormErrors] = useState({
        firstName: false,
        lastName: false,
        address: false,
        postalCode: false,
        city: false,
        email: false,
        phone: false,
      });



      useEffect(() => {
        setCartItems(getCartItems());
      }, []);
      

      const subtotal = cartItems.reduce(
        (total, item) => total + item.price * item.inventory,
        0
      );

      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        setFormValues({
            ...formValues,
            [e.target.id]: e.target.value
          })
        };

        const validateForm = () => {
          const errors = {
            firstName: !formValues.firstName,
            lastName: !formValues.lastName,
            address: !formValues.address,
            postalCode: !formValues.postalCode,
            city: !formValues.city,
            email: !formValues.email,
            phone: !formValues.phone,
          };
          setFormErrors(errors);
          return Object.values(errors).every((error) => !error);
        };



        const handlePlaceOrder = async (event: React.FormEvent) => {
          event.preventDefault();

          if (!validateForm()) {
            Swal.fire("Error!", "Please fill in all fields correctly before proceeding.", "error");
            return;
          }



          const result = await Swal.fire({
            title: "Processing your order...",
            text: "Please wait a moment.",
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Proceed",
          });
        
          if (result.isConfirmed) {
            localStorage.removeItem("appliedDiscount");
            
            await Swal.fire(
              "Success!",
              "Your order has been successfully processed!",
              "success"
            );
        
            const orderData = {
              _type: "order",
              firstName: formValues.firstName,
              lastName: formValues.lastName,
              address: formValues.address,
              postalCode: formValues.postalCode,
              city: formValues.city,
              email: formValues.email,
              phone: formValues.phone,
              cartItems: cartItems.map((item) => ({
                _type: "reference",
                _ref: item._id,
              })),
              total: subtotal,
              orderDate: new Date().toISOString(),
              status: "pending",
            };
        
            try {
              await client.create(orderData);
              localStorage.removeItem("appliedDiscount");
              window.location.reload(); // Reload only after order is successfully created
            } catch (error) {
              console.error("Error creating order:", error);
              Swal.fire("Error!", "There was an issue placing your order. Please try again.", "error");
            }
          }
        }
  
  
  
  


  return (
    <div>
        <div className="mt-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 py-4">
            <Link
              href="/cart"
              className="text-[#666666] hover:text-black transition text-sm"
            >
              Cart
            </Link>
            <CgChevronRight className="w-4 h-4 text-[#666666]" />
            <span className="text-sm">Checkout</span>
          </nav>
        </div>
      </div>
    <div className="flex flex-col-reverse md:flex-row w-[80%] md:w-[70%] m-auto gap-[60px] md:gap-[80px] mt-[30px] md:mt-[50px] mb-[100px] md:mb-[200px]">
        <div className="w-[100%] md:w-[440px] md:ml-[100px]">
            <div className="mb-[20px]">
                <p className="text-[21px] leading-[24px] text-[#111111] mb-[10px]">How would you like to get your order?</p>
                <p className="text-[15px] leading-[24px] text-[#757575]">Customs regulation for India require a copy of the recipient's KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns. If your KYC does not match your shipping address, please click the link for more information. <span className="underline hover:no-underline cursor-pointer">Learn More</span></p>
            </div>
            <div className="flex items-center mb-[40px] pl-[20px] gap-[20px] rounded-[12px] border-2 w-[100%] md:w-[440px] h-[60px] md:h-[82px] border-[#111111]">
                <Image src={deliver} alt="deliver" />
                <p className="text-[15px] leading-[24px] text-[#111111]">Deliver It</p>
            </div>
            <div>
                <form action="#">
                    <p className="text-[21px] mb-[20px] leading-[24px] text-[#111111]">Enter your  name and address:</p>
                    <div>
                    <input className="w-[100%] md:w-[440px] h-[40px] md:h-[56px] rounded-[4px] border border-[#CCCCCC] text-[15px] md:text-[16px] leading-[24px] text-[#000000] placeholder:text-[#000000] py-[16px] pl-[16px]" type="text" placeholder="First Name" name="firstName" id="firstName" value={formValues.firstName} onChange={handleInputChange} />
                    {formErrors.firstName && (
                  <p className="text-sm text-red-500">
                    First name is required.
                  </p>
                )}
                </div>
                <div>
                    <input className=" mt-[20px] w-[100%] md:w-[440px] h-[40px] md:h-[56px] rounded-[4px] border border-[#CCCCCC] text-[15px] md:text-[16px] leading-[24px] text-[#000000] placeholder:text-[#000000] py-[16px] pl-[16px]" type="text" placeholder="Last Name" name="lastName" id="lastName" value={formValues.lastName}
                  onChange={handleInputChange} />
                  {formErrors.lastName && (
                  <p className="text-sm text-red-500">
                    Last name is required.
                  </p>
                )}
                </div>
                <div>
                    <input className="w-[100%] md:w-[440px] mt-[20px] h-[40px] md:h-[56px] rounded-[4px] border border-[#CCCCCC] text-[15px] md:text-[16px] leading-[24px] text-[#000000] placeholder:text-[#000000] py-[16px] pl-[16px]" type="text" placeholder="Address" id="address" name="address" value={formValues.address}
                onChange={handleInputChange} />
                {formErrors.address && (
                <p className="text-sm text-red-500">Address is required.</p>
              )}
              </div>
                    <p className="text-[11px] leading-[24px] text-[#757575] mb-[15px] ml-[16px] mt-[-3px]">We do not ship to P.O. boxes</p>
                    <div className="w-[100%] wmd:w-auto grid grid-cols-2 gap-[20px] mb-[25px]">
                        <div>
                        <input className="w-[100%] md:w-[211.19] h-[40px] md:h-[56px] rounded-[4px] border border-[#CCCCCC] text-[15px] md:text-[16px] leading-[24px] text-[#000000] placeholder:text-[#000000] py-[16px] pl-[16px]" type="text" placeholder="Postal Code" id="postalCode" name="postalCode" value={formValues.postalCode}
                onChange={handleInputChange} />
                {formErrors.postalCode && (
                <p className="text-sm text-red-500">Postal Code is required.</p>
              )}
              </div>
              <div>
                        <input className="w-[100%] md:w-[211.19] h-[40px] md:h-[56px] rounded-[4px] border border-[#CCCCCC] text-[15px] md:text-[16px] leading-[24px] text-[#000000] placeholder:text-[#000000] py-[16px] pl-[16px]" type="text" placeholder="City" id="city" name="city" value={formValues.city}
                onChange={handleInputChange} />
                {formErrors.city && (
                <p className="text-sm text-red-500">City is required.</p>
              )}
              </div>
                    </div>
                        
                        <h3 className="text-[19px] md:text-[21px] mb-[20px] leading-[24px] text-[#111111]">What's your contact information?</h3>
                        <div>
                        <input className="w-[100%] md:w-[440px] h-[40px] md:h-[56px] rounded-[4px] border border-[#CCCCCC] text-[15px] md:text-[16px] leading-[24px] text-[#000000] placeholder:text-[#000000] py-[16px] pl-[16px]" type="email" placeholder="Email" id="email" name="email" value={formValues.email}
                onChange={handleInputChange} />
                {formErrors.email && (
                <p className="text-sm text-red-500">Email is required.</p>
              )}
              </div>
                        <p className="text-[11px] leading-[24px] text-[#757575] mb-[15px] ml-[16px] mt-[-3px]">A confirmation email will be sent after checkout.</p>
                        <div>
                        <input className="w-[100%] md:w-[440px] h-[40px] md:h-[56px] rounded-[4px] border border-[#CCCCCC] text-[15px] md:text-[16px] leading-[24px] text-[#000000] placeholder:text-[#000000] py-[16px] pl-[16px] " type="number" placeholder="Phone Number" id="phone" name="phone" value={formValues.phone}
                onChange={handleInputChange} />
                {formErrors.phone && (
                <p className="text-sm text-red-500">Phone is required.</p>
              )}
              </div>
                        <p className="text-[11px] leading-[24px] text-[#757575] mb-[30px] ml-[16px] mt-[-3px]">A carrier might contact you to confirm delivery.</p>
                        <button onClick={handlePlaceOrder} className="w-[100%] md:w-[440px] mb-[30px] h-[50px] md:h-[60px] rounded-[30px] hover:bg-[#757575] hover:text-[#CCCCCC] active:bg-[black]  active:text-[white] bg-[#CCCCCC] text-[#757575] ">Continue</button>
                </form>
                <div>
                    <div className="pt-[21px] pb-[12px] mb-[18px] text-[18px] md:text-[21px] leading-[24px] text-[#111111] border-t-[1px] border-[#E5E5E5]">Delivery</div>
                    <div className="pt-[21px] pb-[4px] mb-[18px] text-[18px] md:text-[21px] leading-[24px] text-[#757575] border-t-[1px] border-[#E5E5E5]">Shipping</div>
                    <div className="pt-[21px] pb-[4px] mb-[18px] text-[18px] md:text-[21px] leading-[24px] text-[#757575] border-t-[1px] border-[#E5E5E5]">Billing</div>
                    <div className="pt-[21px] pb-[4px] text-[18px] md:text-[21px] leading-[24px] text-[#757575] border-t-[1px] border-[#E5E5E5]">Payment</div>
                </div>
            </div>
        </div>
        <div className="w-[100%] md:w-[350px]">
            <h3 className="text-[21px] leading-[24px] text-[#111111] mb-[15px]">Order Summary</h3>
            <div>
                <div className="flex justify-between mb-[15px]">
                    <p className="text-[15px] leading-[16px] text-[#8D8D8D]">Subtotal</p>
                    <p className="text-[14px] leading-[16px] text-[#8D8D8D]">₹ ${subtotal}</p>
                </div>
                <div className="flex justify-between mb-[30px]">
                    <p className="text-[15px] leading-[16px] text-[#8D8D8D]">Delivery/Shipping</p>
                    <p className="text-[15px] leading-[16px] text-[#8D8D8D]">Free</p>
                </div>
                <div className="flex justify-between mb-[30px]">
                    <p className="text-[15px] leading-[16px] text-[#111111]">Total</p>
                    <p className="text-[15px] leading-[16px] text-[#111111]">₹ ${subtotal.toFixed(2)}</p>
                </div>
                <p className="text-[9px] leading-[24px] text-[#111111] mb-[20px]">(The total reflects the price of your order, including all duties and taxes)</p>
                <h4 className="text-[15px] font-bold leading-[24px] text-[#111111] mb-[10px]">Arrives Mon, 27 Mar - Wed, 12 Apr</h4>
                {cartItems.length > 0 ? (
                cartItems.map((item) => (
                <div key={item._id} className="flex gap-2 justify-between mb-[20px]">
                    {item.image && (
                        <Image src={urlFor(item.image).url()} alt="image" width={150} height={150}></Image>
                    )}
                    <div>
                        <p className="mt-2 text-[14px] md:text-[17px] leading-[24px] text-[#111111] mb-[10px]">{item.productName}</p>
                        <p className="text-[14px] md:text-[15px] leading-[19.6px] text-[#8D8D8D]  mb-[5px]">Qty {item.inventory}</p>
                        <p className="text-[14px] md:text-[15px] leading-[19.6px] text-[#8D8D8D]">₹ ${item.price * item.inventory}</p>
                    </div>
                </div>
                ))
            ) : (
              <p className="text-sm text-gray-500">Your cart is empty.</p>
            )}
            </div>
        </div>
    </div>
    </div>
  )
}

export default Checkout