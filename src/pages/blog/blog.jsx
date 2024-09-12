import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";

export const Blog = () => {
    return (
        <div>
            <div className='flex  bg-blog bg-cover bg-center  text-white font-extrabold text-5xl justify-center items-center h-[220px] bg-blue-50'>
                <div>News</div>
            </div>
            <div className='bg-red-50  flex  mt-[50px] '>
                <div className='bg-red-500 w-[70%] flex flex-col gap-y-[30px] justify-center items-center'>
                    <div className='h-[600px] w-[70%] overflow-hidden '><div className='h-[100%] w-[100%] bg-blog2 bg-cover bg-center hover:scale-[1.05] hover:duration-300'></div></div>
                    <div className='h-[600px] w-[70%] flex flex-col gap-[20px] '>
                        <div className='font-bold text-2xl hover:text-[#e65540] hover:duration-300'>Black Friday Guide: Best Sales & Discount Codes</div>
                        <div className=' text-[#888888]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</div>
                        <div className='font-serif hover:text-[#e65540] hover:duration-300 flex gap-4 items-center'><div>Continue Reading </div><div className='text-xl'><FaLongArrowAltRight /></div></div>

                    </div>
                    <div>hh</div>
                    

                    

                </div>
                <div className='bg-blue-400 w-[30%] '></div>
            </div>
        </div>
    );
};

