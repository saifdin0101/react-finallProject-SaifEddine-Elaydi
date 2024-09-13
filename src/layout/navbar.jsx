import React from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';


export const Navbar = () => {
    const navigate =useNavigate()
    return (
        <nav className='h-[100px]  w-[100%] z-30 bg-white  flex justify-center items-center gap-[400px] fixed'>
            <div className='font-bold text-3xl'>Fashe <span className='text-[#e65540]'>.</span></div>
            <div className=' gap-10 flex justify-center items-center'>
                <div onClick={()=>{navigate('/')}} className='bgb'>Home</div>
                <div onClick={()=>{navigate('/shop')}}>Shop</div>
                <div onClick={()=>{navigate('/blog')}}>Blog</div>
                <div onClick={()=>{navigate('/about')}}>About</div>
                <div onClick={()=>{navigate('/contact')}}>Contact</div>

            </div>
            <div className='flex justify-center items-center gap-10 text-2xl text-[#d0d0d0]'>
                <div><FaRegUserCircle /></div>
                <div className='bgl pl-[50px] flex relative'><RiShoppingCart2Line /><div className='text-xs h-[15px] w-[15px] flex justify-center items-center rounded-full absolute bg-red-500 right-[-8px]'>0</div></div>
            </div>
            
            
        </nav>
    );
};

