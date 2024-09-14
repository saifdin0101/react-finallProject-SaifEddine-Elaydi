import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate()
    return (
        <div className='h-[70vh] w-full flex gap-10 justify-center items-center pt-[200px]' >
            <div className=' w-[50%] h-full flex justify-end'>
                <div className='border-[#e3e3e3] bordersolid border-[1px] h-[65%] w-[80%] pt-3 flex flex-col gap-5 pl-10 '> 
                    <div className='text-3xl font-thin '>New Customer</div>
                    <div className='font-medium text-[#888888]'>Register Account</div>
                    <div className='font-thin text-[#888888]'>By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.</div>
                    <div onClick={()=>{navigate('/signup')}} className='h-[50px] w-[150px] flex justify-center bg-black text-white items-center'>Continue</div>
                </div>
            </div>
            <div className=' w-[50%] h-full'>
            <div className='border-[#e3e3e3] bordersolid border-[1px] h-[93%] pt-3 w-[80%] flex flex-col gap-5 pl-10 '> 
                    <div className='text-3xl font-thin '>Returning Customer</div>
                    <div className='font-medium text-[#888888]'>I am a returning customer</div>
                    <div className='flex flex-col'>
                    <label >Email</label>
                    <input className='pl-3 h-[50px] w-[90%] border-[#e3e3e3] bordersolid border-[1px]' placeholder='Email' type="email" />
                    </div>
                    <div className='flex flex-col'>
                    <label >Password</label>
                    <input className='pl-3 h-[50px] w-[90%] border-[#e3e3e3] bordersolid border-[1px]' placeholder='Password' type="password" />
                    <div className='text-[#888888]'>Forget Your Password?</div>
                    </div>
                    <div  className='h-[50px] w-[150px] flex justify-center bg-black text-white items-center'>Login</div>
                </div>
            </div>

            
        </div>
    );
};

