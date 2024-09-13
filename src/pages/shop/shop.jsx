import React from 'react';
import { JsonData } from '../../constant';


export const Shop = () => {
    return (
        <div className='pt-[100px]'>
            <header className='flex bg-blog bg-cover bg-center text-white font-extrabold text-5xl justify-center items-center h-[220px] bg-blue-50'>
                <div>Products</div>
            </header>
            <div className=' w-[100%] flex justify-center pt-[100px] gap-10'>
                <div className=' w-[250px]  flex flex-col gap-20 p-4'>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='text-2xl font-medium mb-4'>Categories</div>
                        <div>
                            <label className='container '>
                                <input type='radio' name='category' value='sell' />
                                <span className='checkmark'></span>
                                <span className='ml-2 text-lg '>Sell</span>
                            </label>
                            <label className='container block mt-2'>
                                <input type='radio' name='category' value='sold' />
                                <span className='checkmark'></span>
                                <span className='ml-2 text-lg'>Sold</span>
                            </label>
                            <label className='container block mt-2'>
                                <input type='radio' name='category' value='new' />
                                <span className='checkmark'></span>
                                <span className='ml-2 text-lg'>New</span>
                            </label>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='text-2xl font-medium mb-4'>Color</div>
                        <div>
                            <label className='container'>
                                <input type='radio' name='color' value='black' />
                                <span className='checkmark'></span>
                                <span className='ml-2 text-lg'>Black</span>
                            </label>
                            <label className='container block mt-2'>
                                <input type='radio' name='color' value='white' />
                                <span className='checkmark'></span>
                                <span className='ml-2 text-lg'>White</span>
                            </label>
                            <label className='container block mt-2'>
                                <input type='radio' name='color' value='blue' />
                                <span className='checkmark'></span>
                                <span className='ml-2 text-lg'>Blue</span>
                            </label>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='text-2xl font-medium mb-4'>Price</div>
                        <div>
                            <label className='container'>
                                <input type='radio' name='price' value='0-5' />
                                <span className='checkmark'></span>
                                <span className='ml-2 text-lg'>$0 - $5</span>
                            </label>
                            <label className='container block mt-2'>
                                <input type='radio' name='price' value='5-10' />
                                <span className='checkmark'></span>
                                <span className='ml-2 text-lg'>$5 - $10</span>
                            </label>
                            <label className='container block mt-2'>
                                <input type='radio' name='price' value='10-20' />
                                <span className='checkmark'></span>
                                <span className='ml-2 text-lg'>$10 - $20</span>
                            </label>
                        </div>
                    </div>
                </div>
                
                <div className=' w-[70vw] bg-blue-900 flex justify-center items-center gap-10 flex-wrap'>
                {JsonData.products.map((e,i)=>{
                    <div>
                    <img className='h-[400px] w-[300px] bg-red-500' src={e.image} alt="" />
                    <div className='h-[100px] w-[300px] bg-red-600'>{e.Product}</div>
                </div>
                    
                })}
                    


                    

                </div>
            </div>
        </div>
    );
};
