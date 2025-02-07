import Image from "next/image";
import Map from "../../../public/Images/map.png"
import Searrch from "../../../public/Images/searrch.png"
import Filoter from "../../../public/Images/filoter.png"

function Location () {
    return(
        <div className="flex">
            <div className="w-[480px] ml-[20px] mt-[20px]">
                <h3 className="text-[27px] leading-[32px] mb-[20px] font-[600]">Find a Nike Store</h3>
                <div>
                    <input className="w-[416px] h-[56px] text-[15px] pl-[40px] leading-[24px] text-[#757575] border border-[#757575] rounded-[8px] " type="text" placeholder="Search Location"/>
                    <Image className="cursor-pointer relative bottom-9 left-3" src={Searrch} alt="searrch"></Image>
                </div>
                <div className="flex justify-between mb-[10px] items-center">
                    <p className="text-[#757575] text-[14px] ">15 Stores Near You</p>
                    <div className="flex justify-center cursor-pointer items-center gap-2 w-[110.56px] mr-[28px] h-[39px] rounded-[30px] border border-[#CCCCCC]">
                        <p className="text-[#111111] text-[15px]">Filter</p>
                        <Image className="mt-[2px]" src={Filoter} alt="filoter"></Image>
                    </div>
                </div>
                <div className="pt-[20px] pb-[20px] border border-t-[#CCCCCC] border-b-[#CCCCCC] border-l-[white]">
                    <p className="font-[600] text-[15px] leading-[24px]">Nike NYC - House of Innovation 000</p>
                    <p className="text-[15px] leading-[24px] text-[#757575]">650 5th Ave.</p>
                    <p className="text-[16px] leading-[24px] text-[#757575]">New York, NY, 10019, US</p>
                    <p className="text-[#757575] text-[15px] leading-[24px]"><span className="text-[#D43F21] text-[15px] leading-[24px]">Closed </span>• Opens at 11:00 am</p>
                </div>
                <div className="pt-[20px] pb-[20px] border border-t-[white] border-b-[#CCCCCC] border-l-[white]">
                    <p className="font-[600] text-[15px] leading-[24px]">Nike By Upper East Side</p>
                    <p className="text-[15px] leading-[24px] text-[#757575]">1131 3rd Ave.</p>
                    <p className="text-[16px] leading-[24px] text-[#757575]">New York, NY, 10065, US</p>
                    <p className="text-[#757575] text-[15px] leading-[24px]"><span className="text-[#D43F21] text-[15px] leading-[24px]">Closed </span>• Opens at 11:00 am</p>
                </div>
                <div className="pt-[20px] pb-[20px] border border-t-[white] border-b-[#CCCCCC] border-l-[white]">
                    <p className="font-[600] text-[15px] leading-[24px]">Nike By Flatiron</p>
                    <p className="text-[15px] leading-[24px] text-[#757575]">156 Fifth Ave.</p>
                    <p className="text-[16px] leading-[24px] text-[#757575]">New York, NY, 10010, US</p>
                    <p className="text-[#757575] text-[15px] leading-[24px]"><span className="text-[#D43F21] text-[15px] leading-[24px]">Closed </span>• Opens at 11:00 am</p>
                </div>
                <div className="mt-[15px]">
                    <p className="text-[#111111] cursor-pointer text-[15px] underline font-[600] hover:no-underline">View All Stores</p>
                </div>
            </div>
            <div>
                <Image className="cursor-pointer" src={Map} alt="map"></Image>
            </div>
        </div>
    );
};

export default Location;