import React from 'react';
import { Images } from '../../constant';

export const Contact = () => {
    return (
        <div className='pt-[100px]'>
            <header className='flex bg-blog bg-cover bg-center text-white font-extrabold text-5xl justify-center items-center h-[220px] bg-blue-50'>
                <div>Contact</div>
            </header>
            <div className='mt-10 flex justify-center items-center'>
               <img  className='h-[450px] ' src={Images.googlemaps} alt="" />
                <div className='ml-10 h-[600px] w-[700px] flex flex-col justify-start items-start gap-10 '>
                    <div className='text-3xl  '>Send your Message</div>
                    <input placeholder='Name' className='h-[50px] pl-5 w-[550px] border-[#e6e6e6] border-solid border-[1px]' type="text" />
                    <input placeholder='Search' className='h-[50px] pl-5 w-[550px] border-[#e6e6e6] border-solid border-[1px]' type="search" />
                    <input placeholder='Phone' className='h-[50px] pl-5 w-[550px] border-[#e6e6e6] border-solid border-[1px]' type="tel" />
                    <textarea placeholder='Message' className=' pl-5 border-[#e6e6e6] border-solid border-[1px]' cols={70} rows={7} name="" id=""></textarea>
                </div>
            </div>
        </div>
    );
};

