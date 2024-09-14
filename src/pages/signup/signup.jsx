import React from "react";
import {  useNavigate } from "react-router-dom";

export const Signup = () => {
    const navigate =useNavigate()
  return (
    <div className="pt-[150px] pb-10">
      <div className="h-[70vh] w-full  flex flex-col gap-10 pl-[200px]">
      <div className='text-3xl font-thin '>Creat Account</div>
                    <div className='font-medium text-[#888888]'>Your Personnal Details</div>
                    <div className='flex flex-col'>
                    <label >UserName</label>
                    <input className='pl-3 h-[50px] w-[90%] border-[#e3e3e3] bordersolid border-[1px]' placeholder='First Name' type="text" />
                    </div>
                    <div className='flex flex-col'>
                    <label >LastName</label>
                    <input className='pl-3 h-[50px] w-[90%] border-[#e3e3e3] bordersolid border-[1px]' placeholder='Last Name' type="text" />
                    </div>
                    <div className='flex flex-col'>
                    <label >Email</label>
                    <input className='pl-3 h-[50px] w-[90%] border-[#e3e3e3] bordersolid border-[1px]' placeholder='Email' type="email" />
                    </div>
                    <div className='flex flex-col'>
                    <label >Password</label>
                    <input className='pl-3 h-[50px] w-[90%] border-[#e3e3e3] bordersolid border-[1px]' placeholder='Password' type="password" />

                    </div>
                    <div className="flex gap-5  items-center"><div  className='h-[50px] w-[150px] flex justify-center bg-[#292929] text-white items-center '>Creat Account</div><div onClick={()=>{navigate("/")}} className="hover:text-red-500 text-xl font-thin cursor-pointer hover:duration-300">Or Return To The Store</div></div>
                

      </div>
    </div>
  );
};
