import Link from "next/link";

function Order () {
    return(
        <div className="flex justify-center mb-[200px] mt-[100px]">
            <div className="w-[304px]">
                <h3 className="w-[246.65px] h-[22px] text-[#111111] text-center ml-[30px] text-[19px] mb-[10px] font-[600] leading-[24px]">View or Manage Your Order</h3>
                <p className="w-[281.12px] h-[56px] text-[14px] text-center ml-[10px] mb-[30px] leading-[20px]">To check the status of your order, or to start a return, please enter your order number and email address.</p>
                <input className="w-[304px] h-[56px] rounded-[8px] text-[#757575] mb-[25px] text-[16px] leading-[24px] pl-[15px] pt-[25px] border border-[#757575]" type="text" placeholder="Order Number*"/>
                <input className="w-[304px] h-[56px] rounded-[8px] mb-[40px] text-[#757575] text-[16px] leading-[24px] pl-[15px] pt-[25px] border border-[#757575]" type="email" placeholder="Email address*"/>
                <button className="bg-[#E5E5E5] rounded-[30px] mb-[20px] w-[304px] h-[60px] text-[#757575] text-[15px] text-center focus:bg-[black]">Submit</button>
                <p className="text-[12px] text-[#111111] text-center">Already a member? <Link href={"/signIn"}><span className="text-[black] underline hover:no-underline cursor-pointer">Sign in</span></Link> </p>
            </div>
        </div>
    );
};

export default Order;