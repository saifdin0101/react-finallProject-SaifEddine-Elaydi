import React from 'react';

export const Shop = () => {
    return (
        <div className='pt-[100px]'>
            <header className='flex bg-blog bg-cover bg-center text-white font-extrabold text-5xl justify-center items-center h-[220px] bg-blue-50'>
                <div>Products</div>
            </header>
            <div className='h-[200vh] w-[100%] flex justify-center items-center gap-10'>
                <div className='h-[150vh] w-[250px] bg-blue-300'></div>
                <div className='h-[150vh] w-[70vw] bg-blue-900'></div>
            </div>
            
        </div>
    );
};

