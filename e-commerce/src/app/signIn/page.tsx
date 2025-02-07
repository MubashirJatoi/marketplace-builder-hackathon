"use client"
import Image from "next/image";
import Niekee from "../../../public/Images/niekeee.png"
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { useRouter } from "next/navigation";
import { useState } from "react";


 function SignIn () {


    const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.email || !formData.password) {
      setError("Both fields are required.");
      return;
    }

    try {
      // Fetch user data from Sanity
      const query = `*[_type == "user" && email == $email && password == $password][0]`;
      const user = await client.fetch(query, {
        email: formData.email,
        password: formData.password, // Directly matching plain text password
      });

      if (!user) {
        setError("email or password incorrect. Please try again.");
        return;
      }
      router.push("/shop"); // Redirect to shop page after login
    } catch (error) {
      console.error("Error logging in:", error);
      setError("Something went wrong. Try again later.");
    }
  };

    return(
        <div className="flex justify-center items-center mb-[100px] mt-[50px]">
            <div className="w-[325px]">
                <Image className="mb-[30px]" src={Niekee} alt="niekee"></Image>
                <div className="w-[170.5px] ml-[70px] h-[57px] text-center text-[18px] font-[700] leading-[26px]">
                    <h3>YOUR ACCOUNT FOR EVERYTHING NIKE</h3>
                </div>
                
                <form onSubmit={handleSubmit}>
                <div className="mt-[50px] mb-[15px]">
                    <input className="w-[324px] h-[40px] rounded-[3px] pl-[20px] mb-[20px] text-[14px] border border-[#E5E5E5]" onChange={handleChange} name="email" type="email" placeholder="Email address" />
                    <input className="w-[324px] h-[40px] rounded-[3px] pl-[20px] text-[14px]  border border-[#E5E5E5]" onChange={handleChange} name="password" type="password" placeholder="Password" />
                </div>
                <div>
                    <div className="flex justify-center">
                    <p className="text-[12px] hover:underline cursor-pointer mt-[5px] text-[#8D8D8D]">Forgotten your password?</p>
                    </div>
                    
                <p className="text-center ml-[25px] mt-[20px] w-[270.31px] text-[12px] text-[#8D8D8D]">By logging in, you agree to Nike's <span className="text-[12px] underline hover:no-underline cursor-pointer">Privacy Policy</span> and <span className="text-[12px] underline hover:no-underline cursor-pointer">Terms of Use.</span></p>
                    {error && <p className="text-red-500">{error}</p>}
                    <button className="w-[324px] mb-[20px] h-[40px] mt-[30px] bg-[#000000] rounded-[3px] text-[#FFFFFF] text-[11px] text-center  hover:relative hover:top-1 hover:pt-[3px]">SIGN IN</button>
                    
                    <div>
                        <p className="text-[12px] text-[#8D8D8D]  text-center">Not a Member?<Link href={"/joinUs"}><span className="text-[black] underline hover:no-underline cursor-pointer">Join Us.</span></Link> </p>
                    </div>
                </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;