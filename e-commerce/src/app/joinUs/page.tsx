"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Niekee from "../../../public/Images/niekeee.png"
import Link from "next/link";
import { client } from "@/sanity/lib/client";

function JoinUs () {

    const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    age: "",
  });

  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.age) {
      setError("All fields are required.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Invalid email format.");
      return;
    }
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    try {
      // Save user data in Sanity
      const response = await client.create({
        _type: "user",
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password, // Ideally, hash password before saving
        age: parseInt(formData.age),
      });

      if (response._id) {
        router.push("/signIn"); // Redirect to sign-in page
      }
    } catch (error) {
      console.error("Error saving user:", error);
      setError("Something went wrong. Try again later.");
    }
  };

    return(
        <div>
            <div className="flex justify-center items-center mb-[100px] mt-[50px]">
                <div className="w-[325px]">
                    <Image className="mb-[30px]" src={Niekee} alt="niekee"></Image>
                    <div className="w-[220.5px] ml-[50px] h-[57px] text-center text-[18px] font-[700] leading-[26px]">
                        <h3>BECOME A NIKE MEMBER</h3>
                    </div>
                    <p className="text-[#8D8D8D] ml-[30px] w-[260.08px] text-[14px] leading-[22px] text-center">Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.</p>
                    <div className="mt-[20px]">
                    {error && <p className="text-red-500">{error}</p>}
                    <form onSubmit={handleSubmit}>
                    <input className="w-[324px] h-[40px] rounded-[3px] pl-[20px] mb-[20px] text-[14px] border border-[#E5E5E5]" name="email" onChange={handleChange} type="email" placeholder="Email address" />
                    <input className="w-[324px] h-[40px] rounded-[3px] pl-[20px] mb-[20px] text-[14px] border border-[#E5E5E5]" name="password"  onChange={handleChange} type="password" placeholder="Password" />
                    <input className="w-[324px] h-[40px] rounded-[3px] pl-[20px] mb-[20px] text-[14px] border border-[#E5E5E5]" name="firstName" onChange={handleChange} type="text" placeholder="First Name" />
                    <input className="w-[324px] h-[40px] rounded-[3px] pl-[20px] mb-[20px] text-[14px] border border-[#E5E5E5]" name="lastName" onChange={handleChange} type="text" placeholder="Last Name" />
                    <input className="w-[324px] h-[40px] rounded-[3px] pl-[20px] pr-[10px] mb-[5px] text-[14px] border border-[#E5E5E5]" name="age" onChange={handleChange} type="number" placeholder="Age" />
                    <p className="text-[#8D8D8D] mb-[10px] text-[11px] text-center">Get a Nike Member Reward every year on your Birthday.</p>
                    
                    
                    <p className="text-center ml-[25px] mt-[20px] w-[270.31px] text-[12px] text-[#8D8D8D]">By creating an account, you agree to Nike's <span className="text-[12px] underline hover:no-underline cursor-pointer">Privacy Policy</span> and <span className="text-[12px] underline hover:no-underline cursor-pointer">Terms of Use.</span></p>
                    <button type="submit" className="w-[324px] mb-[20px] h-[40px] mt-[30px] bg-[#000000] rounded-[3px] text-[#FFFFFF] text-[11px] text-center hover:relative hover:top-1 hover:pt-[3px]">JOIN US</button>
                    </form>
                    <div>
                        <p className="text-[12px] text-[#8D8D8D]  text-center">Already a Member? <Link href={"/signIn"}><span className="text-[black] underline hover:no-underline cursor-pointer">Sign In.</span></Link> </p>
                    </div>
                    </div>
                </div>
            </div>       
        </div>
    );
};

export default JoinUs;