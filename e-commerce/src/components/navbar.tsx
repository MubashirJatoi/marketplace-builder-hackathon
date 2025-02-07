import Image from "next/image";
import Nike from "../../public/Images/nike-logo.png"
import Like from "../../public/Images/like.png"
import Buy from "../../public/Images/buy.png"
import Search from "../../public/Images/search.png"
import Link from "next/link";

function Navbar() {
    return(
        <div className="flex w-[100%] h-[60px] items-center">
            <div className="flex items-center justify-around h-[60px] w-[95%] m-auto">
            <div>
            <Link href={"/"}>
                <Image className="cursor-pointer" src={Nike} alt="nike"></Image>
            </Link>
            </div>
            <div className="flex text-[15px] ml-[130px] font-[600] gap-6">
                <p className="cursor-pointer hover:underline">New & Featured</p>
                <p className="cursor-pointer hover:underline">Men</p>
                <p className="cursor-pointer hover:underline">Women</p>
                <p className="cursor-pointer hover:underline">Kids</p>
                <p className="cursor-pointer hover:underline">Sale</p>
                <p className="cursor-pointer hover:underline">SNKRS</p>
            </div>
            <div className="mt-[-10px] mr-[-120px]">
                <Image className="cursor-pointer relative top-[29px] left-[15px]" src={Search} alt="search"></Image>
                <input className="w-[180px] pl-[50px] bg-[#F5F5F5] h-[40px] rounded-[100px]" type="text" placeholder="Search"/>
            </div>
            <div className="flex gap-5">
            <Image className="cursor-pointer hover:rounded-[4px] hover:bg-[#dddbdb]" src={Like} alt="like"></Image>
            <Link href={"/cart"}>
                <Image className="cursor-pointer hover:rounded-[4px] hover:bg-[#dddbdb]" src={Buy} alt="buy"></Image>
            </Link>
            </div>
            </div>
        </div>
    );
};

export default Navbar;