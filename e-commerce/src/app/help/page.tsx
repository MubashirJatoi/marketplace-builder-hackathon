import Image from "next/image"
import searchIcon from "..//..//../public/Images/searchicon.png"
import thumbup from "..//..//../public/Images/upthumb.png"
import thumbdown from "..//..//../public/Images/downthumb.png"
import Mobile from "..//..//../public/Images/mobile.png"
import SMS from "..//..//../public/Images/sms.png"
import Mail from "..//..//../public/Images/mail.png"
import Locator from "..//..//../public/Images/locator.png"
import Link from "next/link"

const Help = () => {
  return (
    <div className="mt-[50px] mb-[50px]">
        <div>
            <h1 className="text-[32px] leading-[36px] text-[#111111] text-center mb-[20px]">GET HELP</h1>
            <div className="flex items-center justify-center mb-[20px]">
                <input className="w-[457.33px] h-[56px] rounded-[8px] border border-[#757575] px-[20px]" type="text"  placeholder="What can we help you with?"/>
                <Image className="absolute left-[870px] cursor-pointer" src={searchIcon} alt="searchIcon" width={24} height={18}/>
            </div>
        </div>
        <div className="w-[85%] m-auto flex gap-[50px] mt-[40px]">
            <div className="w-[939.75px]">
                <h1 className="text-[28px] leading-[32px] text-[#111111] mb-[20px] font-semibold">WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h1>
                <div>
                    <p className="text-[15px] leading-[28px] text-[#111111] mb-[20px]">We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:</p>
                    <div className="ml-[30px]">
                        <p className="text-[16px] leading-[28px] text-[#111111] mb-[10px]">Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</p>
                        <p className="text-[15px] leading-[28px] text-[#111111] mb-[10px]">If you enter your PAN information at checkout, you'll be able to pay for your order with PayTM or a local credit or debit card.</p>
                        <p className="text-[16px] leading-[28px] text-[#111111] mb-[10px]">Apple Pay</p>
                    </div>
                    <div>
                        <p className="text-[16px] leading-[28px] text-[#111111] mb-[10px]"><span className="underline hover:no-underline font-bold">Nike Members</span> can store multiple debit or credit cards in their profile for faster checkout. If you're not already a Member, join us today.</p>
                        <div className="flex gap-[15px] mb-[20px]">
                            <Link href={"/joinUs"}>
                                <button className="bg-[#111111] text-[#FFFFFF] rounded-[30px] w-[106.13px] h-[39px] hover:relative hover:top-1 transition-transform ease-in-out">JOIN US</button>
                            </Link>
                            <Link href={"/shop"}>
                                <button className="bg-[#111111] text-[#FFFFFF] rounded-[30px] w-[129.84px] h-[39px] hover:relative hover:top-1 transition-transform ease-in-out">SHOP NIKE</button>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-[20px] leading-[24px] text-[#111111] font-semibold mb-[10px]">FAQs</h3>
                        <div className="mb-[15px]">
                            <p className="text-[16px] leading-[28px] text-[#111111] font-bold">Does my card need international purchases enabled?</p>
                            <p className="text-[16px] leading-[28px] text-[#111111]">Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.</p>
                        </div>
                        <p className="text-[15px] leading-[28px] text-[#111111] mb-[15px]">Please note, some banks may charge a small transaction fee for international orders.</p>
                    </div>
                    <div>
                        <p className="text-[16px] leading-[28px] text-[#111111] font-bold">Can I pay for my order with multiple methods?</p>
                        <p className="text-[16px] leading-[28px] text-[#111111] mb-[15px]">No, payment for Nike orders can't be split between multiple payment methods.</p>
                    </div>
                    <div>
                        <p className="text-[16px] leading-[28px] text-[#111111] font-bold">What payment method is accepted for SNKRS orders?</p>
                        <p className="text-[16px] leading-[28px] text-[#111111] mb-[15px]">You can use any accepted credit card to pay for your SNKRS order.</p>
                    </div>
                    <div>
                        <p className="text-[16px] leading-[28px] text-[#111111] font-bold">Why don't I see Apple Pay as an option?</p>
                        <p className="text-[16px] leading-[28px] text-[#111111] mb-[20px]">To see Apple Pay as an option in the Nike App or on Nike.com, you'll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you'll need to use Safari to use Apple Pay on Nike.com.</p>
                    </div>
                    <div>
                        <p className="text-[16px] leading-[28px] text-[#111111]">Was this answer helpful?</p>
                        <div className="flex gap-[10px] mb-[10px]">
                            <Image className="cursor-pointer" src={thumbup} alt="thumbup" width={18.34} height={22.5}/>
                            <Image className="cursor-pointer" src={thumbdown} alt="thumbdown" width={18.34} height={22.5}/>
                        </div>
                        <div>
                            <p className="text-[16px] leading-[28px] text-[#757575] mb-[10px]">RELATED</p>
                            <div className="ml-[30px]">
                                <p className="text-[16px] leading-[28px] text-[#111111] font-bold underline hover:no-underline cursor-pointer">WHAT ARE NIKE'S DELIVERY OPTIONS?</p>
                                <p className="text-[16px] leading-[28px] text-[#111111] font-bold underline hover:no-underline cursor-pointer">HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[313.25px]">
                <h1 className="text-[28px] leading-[32px] text-[#111111] text-center mb-[30px]">CONTACT US</h1>
                <div>
                    <div className="mb-[60px]">
                        <div className="flex items-center justify-center mb-[30px]">
                            <Image className="mb-[20px]" src={Mobile} alt="mobile" width={64} height={64}/>
                        </div>
                        <div>
                            <p className="text-[16px] leading-[24px] text-[#111111] text-center font-semibold">000 800 919 0566</p>
                            <p className="text-[16px] leading-[28px] text-[#111111] w-[263.15px] text-center">Products & Orders: 24 hours a day, <br />7 days a week <br />Company Info & Enquiries: 07:30 - 16:30, Monday - Friday</p>
                        </div>
                    </div>
                    <div className="mb-[60px]">
                        <div className="flex items-center justify-center">
                            <Image className="mb-[20px]" src={SMS} alt="SMS" width={64} height={64}/>
                        </div>
                        <div>
                            <p className="text-[15px] leading-[24px] text-[#111111] text-center font-semibold">24 hours a day</p>
                            <p className="text-[15px] leading-[28px] text-[#111111] text-center">7 days a week</p>
                        </div>
                    </div>
                    <div className="mb-[60px]">
                        <div className="flex items-center justify-center">
                            <Image className="mb-[20px]" src={Mail} alt="mail" width={64} height={64}/>
                        </div>
                        <div>
                            <p className="text-[15px] leading-[24px] text-[#111111] text-center font-semibold">We'll reply within</p>
                            <p className="text-[15px] leading-[28px] text-[#111111] text-center">five business days</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-center">
                            <Image className="mb-[20px]" src={Locator} alt="locator" width={64} height={64}/>
                        </div>
                        <div>
                            <p className="text-[16px] leading-[24px] text-[#111111] text-center font-semibold">STORE LOCATOR</p>
                            <p className="text-[16px] leading-[28px] text-[#111111] text-center">Find Nike retail stores near you</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Help