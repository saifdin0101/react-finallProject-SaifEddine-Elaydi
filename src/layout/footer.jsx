import React from 'react';
import { FaFacebookF, FaGoogle, FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa";
export const Footer = () => {
    return (
        <div className='h-[400px] w-[100%] bg-[#f0f0f0] flex'>

            <div className='h-[100%] w-[33%]  flex flex-col gap-10 justify-center items-center'>
                <div className='h-[100%] w-[70%] pt-[125px]'>
                <div className='text-xl'>GET IN TOUCH</div>
                <div className='text-[#888888] font-thin'>Any questions? Let us know in store at 8th floor, 379 Hudson St, <br />New York, NY 10018 or call us on (+1) 96 716 6879</div>
                <div className='flex gap-3 text-[#888888]'><div><FaFacebookF /></div><div><FaTwitter /></div><div><FaPinterest /></div><div><div><FaGoogle /></div></div><div><FaInstagram /></div></div>
                </div>
            </div>
            <div className='h-[100%] w-[34%]  flex items-center gap-20 justify-center '>
                <div className='flex flex-col gap-[2px]'>
                    <div className=' text-xl pb-7'>CATEGORIES</div>
                    <div className='font-thin'>men</div>
                    <div className='font-thin'>women</div>
                    <div className='font-thin'>Dresses</div>
                    <div className='font-thin'>sunglasses</div>
                </div>
                <div className='flex flex-col gap-[2px]'>
                    <div className=' text-xl pb-7'>LINKS</div>
                    <div className='font-thin'>men</div>
                    <div className='font-thin'>women</div>
                    <div className='font-thin'>Dresses</div>
                    <div className='font-thin'>sunglasses</div>
                </div>
                <div className='flex flex-col gap-[2px]'>
                    <div className=' text-xl pb-7'>HEPLS</div>
                    <div className='font-thin'>men</div>
                    <div className='font-thin'>women</div>
                    <div className='font-thin'>Dresses</div>
                    <div className='font-thin'>sunglasses</div>
                </div>
               

            </div>
            <div className='h-[100%] w-[33%]  flex flex-col gap-5 justify-center itec pr-10'>
                <div className=' text-xl'>New Slitter</div>
                <input className='h-[45] w-[400px] bg-[#f0f0f0] btmborder p-3 brb'placeholder='Email Adress' type="text" />
                <div className='text-white h-[50px] w-[200px] text-xl bg-black flex justify-center items-center rounded-[30px]'>Subsucrib</div>
            </div>

            
        </div>
    );
};

