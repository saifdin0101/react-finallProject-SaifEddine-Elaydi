import React from 'react';
import images from '../../constant/images';

export const About = () => {
    return (
        <div className='pt-[100px]'>
            <header className='flex bg-blog bg-cover bg-center text-white font-extrabold text-5xl justify-center items-center h-[220px] bg-blue-50'>
                <div>About</div>
            </header>
            <div className='h-[80vh] w-[100%]  flex justify-center pt-10 gap-10'>
                <div className='h-[90%] w-[22%] bg-gl4 bg-cover bg-center'></div>
                <div className='h-[90%] w-[50%]  flex justify-center items-start gap-10 flex-col font-thin text-lg'>
                    <div className='text-2xl font-thin'>OUR STORY</div>
                    <div className='text-[#888888]'>Phasellus egestas nisi nisi, lobortis ultricies risus semper nec. Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque porta est ac neque bibendum viverra. Vivamus lobortis magna ut interdum laoreet. Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices orci.</div>
                    <div className='pl-[30px] leftborder text-[#888888]'>Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.

- Steve Job’s</div>
                </div>

            </div>
            
        </div>
    );
};

