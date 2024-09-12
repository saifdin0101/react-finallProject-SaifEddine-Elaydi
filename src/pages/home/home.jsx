import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import images from '../../constant/images';
export const Home = () => {
    return (
        <div>
            <div className='pt-[100px]'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide className='relative '>
                        <img className='bg-cover bg-center h-[600px]' src={images.cars1} alt="ccc" />
                        <div className='absolute top-[10rem] flex flex-col gap-5 left-[34rem]  text-center justify-center items-center  text-white'>
                            <h5 className='text-xl'>women collection 2018</h5>
                            <h1 className='text-7xl font-bold'>NEW ARRIVALS</h1>
                            <button className='h-[50px] w-[200px] bg-white font-thin text-black rounded-[30px]'>shop now</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='relative'>
                    <img className='bg-cover bg-center h-[600px]' src={images.cars2} alt="ccc" />
                        <div className='absolute top-[10rem] flex flex-col gap-5 left-[34rem]  text-center justify-center items-center  text-white'>
                            <h5 className='text-xl'>women collection 2018</h5>
                            <h1 className='text-7xl font-bold'>NEW ARRIVALS</h1>
                            <button className='h-[50px] w-[200px] bg-white font-thin text-black rounded-[30px]'>shop now</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='relative'>
                    <img className='bg-cover bg-center h-[600px]' src={images.cars1} alt="ccc" />
                        <div className='absolute top-[10rem] flex flex-col gap-5 left-[34rem]  text-center justify-center items-center  text-white'>
                            <h5 className='text-xl'>women collection 2018</h5>
                            <h1 className='text-7xl font-bold'>NEW ARRIVALS</h1>
                            <button className='h-[50px] w-[200px] bg-white font-thin text-black rounded-[30px]'>shop now</button>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
            <div className='h-[100vh] my-10 flex'>
    <div className='h-[100%] w-[35%] flex justify-center items-end flex-col overflow-hidden'>
        <div className='relative w-[65%] h-[60%] overflow-hidden'>
            <div className='h-[100%] w-[100%] bg-item1 bg-cover bg-center relative flex justify-center items-center transition-transform duration-500 transform hover:scale-105'>
                <button className='absolute bottom-[30px] h-[50px] text-xl w-[200px] bg-white bg-opacity-70 hover:bg-[#e65540] hover:text-white hover:duration-300 sshadow font-thin'>
                    Dresses
                </button>
            </div>
        </div>
        <div className='relative w-[65%] h-[37%] overflow-hidden mt-5'>
            <div className='h-[100%] w-[100%] bg-item2 bg-cover bg-center relative flex justify-center items-center transition-transform duration-500 transform hover:scale-105'>
                <button className='absolute bottom-[30px] h-[50px] text-xl w-[200px] bg-white bg-opacity-70 hover:bg-[#e65540] hover:text-white hover:duration-300 sshadow font-thin'>
                    Dresses
                </button>
            </div>
        </div>
    </div>
    <div className='h-[100%] w-[35%] flex justify-center items-center flex-col'>
        <div className='relative w-[65%] h-[37%] overflow-hidden'>
            <div className='h-[100%] w-[100%] bg-item3 bg-cover bg-center relative flex justify-center items-center transition-transform duration-500 transform hover:scale-105'>
                <button className='absolute bottom-[30px] h-[50px] text-xl w-[200px] bg-white bg-opacity-70 hover:bg-[#e65540] hover:text-white hover:duration-300 sshadow font-thin'>
                    Dresses
                </button>
            </div>
        </div>
        <div className='relative w-[65%] h-[60%] overflow-hidden mt-5'>
            <div className='h-[100%] w-[100%] bg-item4 bg-cover bg-center relative flex justify-center items-center transition-transform duration-500 transform hover:scale-105'>
                <button className='absolute bottom-[30px] h-[50px] text-xl w-[200px] bg-white bg-opacity-70 hover:bg-[#e65540] hover:text-white hover:duration-300 sshadow font-thin'>
                    Dresses
                </button>
            </div>
        </div>
    </div>
    <div className='h-[100%] w-[35%] flex justify-center items-start flex-col'>
        <div className='relative w-[65%] h-[60%] overflow-hidden'>
            <div className='h-[100%] w-[100%] bg-item1 bg-cover bg-center relative flex justify-center items-center transition-transform duration-500 transform hover:scale-105'>
                <button className='absolute bottom-[30px] h-[50px] text-xl w-[200px] bg-white bg-opacity-70 hover:bg-[#e65540] hover:text-white hover:duration-300 sshadow font-thin'>
                    Dresses
                </button>
            </div>
        </div>
        <div className='relative w-[65%] h-[37%] overflow-hidden mt-5'>
            <div className='h-[100%] w-[100%] bg-item5 bg-cover bg-center relative flex justify-center items-center transition-transform duration-500 transform hover:scale-105'>
                <button className='absolute bottom-[30px] h-[50px] text-xl w-[200px] bg-white bg-opacity-70 hover:bg-[#e65540] hover:text-white hover:duration-300 sshadow font-thin'>
                    Dresses
                </button>
            </div>
        </div>
    </div>
</div>

        </div>
    );
};

