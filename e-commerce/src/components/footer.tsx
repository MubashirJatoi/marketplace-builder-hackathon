import Image from "next/image";
import Twitter from "../../public/Images/twitter.png"
import Facebook from "../../public/Images/facebook.png"
import Youtube from "../../public/Images/youtube.png"
import Instagram from "../../public/Images/instagram.png"
import Location from "../../public/Images/location.png"
import Link from "next/link";

function Footer() {
    return(
        <div className="bg-[#111111] h-auto pb-4">
            <div className="w-[90%] m-auto">
                <div className="grid grid-cols-2 gap-6 md:grid-cols-4 justify-center pt-[30px] pl-[30px]">
                    <div className="text-[11px] text-[#FFFFFF] font-[500] leading-[28px] md:leading-[32.67px]">
                        <p className="cursor-pointer hover:text-[#7E7E7E]">Find A Store</p>
                        <Link href={"/joinUs"}>
                        <p className="cursor-pointer hover:text-[#7E7E7E]">Become A Member</p>
                        </Link>
                        <Link href={"/joinUs"}>
                        <p className="cursor-pointer hover:text-[#7E7E7E]">Sign Up for Email</p>
                        </Link>
                        <p className="cursor-pointer hover:text-[#7E7E7E]">Send Us Feedback</p>
                        <p className="cursor-pointer hover:text-[#7E7E7E]">Student Discounts</p>
                    </div>
                    <div className="text-[#7E7E7E] text-[11px] leading-[28px]">
                        <p className="text-[#FFFFFF] text-[11px] font-[500]">About Nike</p>
                        <p className="cursor-pointer hover:text-[#FFFFFF]">News</p>
                        <p className="cursor-pointer hover:text-[#FFFFFF]">Careers</p>
                        <p className="cursor-pointer hover:text-[#FFFFFF]">Investors</p>
                        <p className="cursor-pointer hover:text-[#FFFFFF]">Sustainability</p>
                    </div>
                    <div className="text-[11px] font-[400] text-[#7E7E7E] leading-[28px] w-[15rem] md:w-auto">
                        <p className="text-[#FFFFFF] text-[11px] font-[500]">Get Help</p>
                        <Link href={"/order"}>
                            <p className="cursor-pointer hover:text-[#FFFFFF]">Order Status</p>
                        </Link>
                        <Link href={"/order"}>
                            <p className="cursor-pointer hover:text-[#FFFFFF]">Delivery</p>
                        </Link>
                        <Link href={"/order"}>
                            <p className="cursor-pointer hover:text-[#FFFFFF]">Returns</p>
                        </Link>
                        <p className="cursor-pointer hover:text-[#FFFFFF]">Payment Options</p>
                        <p className="cursor-pointer hover:text-[#FFFFFF]">Contact Us On Nike.com Inquiries</p>
                        <p className="cursor-pointer hover:text-[#FFFFFF]">Contact Us On All Other Inquiries</p>
                    </div>
                </div>
            </div>
            <div className="flex gap-3 justify-end relative bottom-[120px] md:bottom-[190px] mt-[10rem] md:mt-[0rem] right-[7rem] md:right-[90px]">
                    <Image className="cursor-pointer transition-transform duration-[0.3s] ease-in-out hover:transform hover:scale-105" src={Twitter} alt="twitter"></Image>
                    <Image className="cursor-pointer transition-transform duration-[0.3s] ease-in-out hover:transform hover:scale-105" src={Facebook} alt="facebook"></Image>
                    <Image className="cursor-pointer transition-transform duration-[0.3s] ease-in-out hover:transform hover:scale-105" src={Youtube} alt="youtube"></Image>
                    <Image className="cursor-pointer transition-transform duration-[0.3s] ease-in-out hover:transform hover:scale-105" src={Instagram} alt="instagram"></Image>
                </div>
            
            <div className="flex flex-col md:flex-row justify-between w-[95%] m-auto mt-[-5.5rem] md:mt-[0rem]">
                <div className="flex gap-10 justify-center">
                    <div className="flex gap-2">
                    <Link href={"/location"}>
                        <Image className="w-[9.38px] cursor-pointer transition-transform duration-[0.3s] ease-in-out hover:transform hover:scale-105 h-[13.12px] mt-[3px]" src={Location} alt="location"></Image>
                    </Link>
                    <Link href={"/location"}>
                        <p className="text-[#FFFFFF] hover:text-[#7E7E7E] cursor-pointer text-[12px]">India</p>
                    </Link>
                    </div>
                    <p className="text-[#7E7E7E] text-[11px] ">© 2023 Nike, Inc. All Rights Reserved</p>
                </div>
                <div className="flex gap-2 md:gap-5 justify-center text-[12px] text-[#7E7E7E] text-center">
                    <Link  href={"/help"}>
                        <p className="cursor-pointer hover:text-[#FFFFFF]">Guides</p>
                    </Link>
                    <Link  href={"/help"}>
                        <p className="cursor-pointer hover:text-[#FFFFFF]">Terms of Sale</p>
                    </Link>
                    <Link  href={"/help"}>
                        <p className="cursor-pointer hover:text-[#FFFFFF]">Terms of Use</p>
                    </Link>
                    <Link  href={"/help"}>
                        <p className="cursor-pointer hover:text-[#FFFFFF]">Nike Privacy Policy</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;