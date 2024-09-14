import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import images from '../../constant/images';
import { useEffect, useState } from 'react';
export const Home = () => {
    const cars = [images.item1, images.item2, images.item3]; 

    const getRandomCar = () => {
      const randomIndex = Math.floor(Math.random() * cars.length);
      return cars[randomIndex];
    };
  
    const [currentCar, setCurrentCar] = useState('');
  
    useEffect(() => {
      setCurrentCar(getRandomCar());
    }, []);

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
        
        <SwiperSlide className='relative'>
            <div className='flex justify-center items-center gap-5 flex-wrap'>
                <div className='relative h-[500px] w-[300px]  flex flex-col cartparent  '>
                    <img className='h-[80%] w-full object-cover hover:brightness-50 hover:duration-300 ' src={images.cars1}  alt="Car 1" />
                    <div className='absolute bottom-[120px] right-[55px] addcart bg-black font-thin text-xl text-white px-10 py-2 rounded-[30px] cursor-pointer hover:bg-red-500 hover:duration-300 '>add to cart</div>

                    <div className='h-[20%] w-full  flex pt-5 font-thin text-lg flex-col'><div className='hover:text-red-600 hover:duration-300'>Boxy7 T-Shert with roll sleeve</div><div>$20</div></div>
                </div>
                <div className='relative cartparent h-[500px] w-[300px]  flex flex-col'>
                    <img className='h-[80%] w-full object-cover hover:brightness-50 hover:duration-300' src={images.cars2} alt="Car 2" />
                    <div className='h-[20%] w-full  pt-5 font-thin text-lg flex-col flex '><div className='hover:text-red-600 hover:duration-300'>Boxy7 T-Shert with roll sleeve</div><div>$20</div></div>
                    <div className='absolute bottom-[120px] right-[55px] addcart bg-black font-thin text-xl text-white px-10 py-2 rounded-[30px] cursor-pointer hover:bg-red-500 hover:duration-300 '>add to cart</div>

                </div>
                <div className='relative cartparent h-[500px] w-[300px]  flex flex-col'>
                    <img className='h-[80%] w-full object-cover hover:brightness-50 hover:duration-300' src={images.cars3} alt="Car 3" />
                    <div className='h-[20%] w-full  pt-5 font-thin text-lg flex-col flex '><div className='hover:text-red-600 hover:duration-300'>Boxy7 T-Shert with roll sleeve</div><div>$20</div></div>
                    <div className='absolute bottom-[120px] right-[55px] addcart bg-black font-thin text-xl text-white px-10 py-2 rounded-[30px] cursor-pointer hover:bg-red-500 hover:duration-300 '>add to cart</div>

                </div>
                <div className='relative cartparent h-[500px] w-[300px]  flex flex-col'>
                    <img className='h-[80%] w-full object-cover hover:brightness-50 hover:duration-300' src={images.cars1} alt="Car 1" />
                    <div className='h-[20%] w-full  pt-5 font-thin text-lg flex-col flex '><div className='hover:text-red-600 hover:duration-300'>Boxy7 T-Shert with roll sleeve</div><div>$20</div></div>
                    <div className='absolute bottom-[120px] right-[55px] addcart bg-black font-thin text-xl text-white px-10 py-2 rounded-[30px] cursor-pointer hover:bg-red-500 hover:duration-300 '>add to cart</div>
                </div>
            </div>
        </SwiperSlide>

       
        <SwiperSlide className='relative'>
        <div className='flex justify-center items-center gap-5 flex-wrap'>
                <div className='relative cartparent h-[500px] w-[300px]  flex flex-col'>
                    <img className='h-[80%] w-full object-cover hover:brightness-50 hover:duration-300' src={images.cars1} alt="Car 1" />
                    <div className='h-[20%] w-full  flex pt-5 font-thin text-lg flex-col'><div>Boxy7 T-Shert with roll sleeve</div><div>$20</div></div>
                    <div className='absolute bottom-[120px] right-[55px] addcart bg-black font-thin text-xl text-white px-10 py-2 rounded-[30px] cursor-pointer hover:bg-red-500 hover:duration-300 '>add to cart</div>
                </div>
                <div className='relative cartparent h-[500px] w-[300px]  flex flex-col'>
                    <img className='h-[80%] w-full object-cover hover:brightness-50 hover:duration-300' src={images.cars2} alt="Car 2" />
                    <div className='h-[20%] w-full  pt-5 font-thin text-lg flex-col flex '><div>Boxy7 T-Shert with roll sleeve</div><div>$20</div></div>
                    <div className='absolute bottom-[120px] right-[55px] addcart bg-black font-thin text-xl text-white px-10 py-2 rounded-[30px] cursor-pointer hover:bg-red-500 hover:duration-300 '>add to cart</div>
                </div>
                <div className='relative cartparent h-[500px] w-[300px]  flex flex-col'>
                    <img className='h-[80%] w-full object-cover hover:brightness-50 hover:duration-300' src={images.cars3} alt="Car 3" />
                    <div className='h-[20%] w-full  pt-5 font-thin text-lg flex-col flex '><div>Boxy7 T-Shert with roll sleeve</div><div>$20</div></div>
                    <div className='absolute bottom-[120px] right-[55px] addcart bg-black font-thin text-xl text-white px-10 py-2 rounded-[30px] cursor-pointer hover:bg-red-500 hover:duration-300 '>add to cart</div>
                </div>
                <div className='relative cartparent h-[500px] w-[300px]  flex flex-col'>
                    <img className='h-[80%] w-full object-cover hover:brightness-50 hover:duration-300' src={images.cars1} alt="Car 1" />
                    <div className='h-[20%] w-full  pt-5 font-thin text-lg flex-col flex '><div>Boxy7 T-Shert with roll sleeve</div><div>$20</div></div>
                    <div className='absolute bottom-[120px] right-[55px] addcart bg-black font-thin text-xl text-white px-10 py-2 rounded-[30px] cursor-pointer hover:bg-red-500 hover:duration-300 '>add to cart</div>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide className='relative'>
        <div className='flex justify-center items-center gap-5 flex-wrap'>
                <div className='relative cartparent h-[500px] w-[300px]  flex flex-col'>
                    <img className='h-[80%] w-full object-cover hover:brightness-50 hover:duration-300' src={images.cars1} alt="Car 1" />
                    <div className='h-[20%] w-full  flex pt-5 font-thin text-lg flex-col'><div>Boxy7 T-Shert with roll sleeve</div><div>$20</div></div>
                    <div className='absolute bottom-[120px] right-[55px] addcart bg-black font-thin text-xl text-white px-10 py-2 rounded-[30px] cursor-pointer hover:bg-red-500 hover:duration-300 '>add to cart</div>
                </div>
                <div className='relative cartparent h-[500px] w-[300px]  flex flex-col'>
                    <img className='h-[80%] w-full object-cover hover:brightness-50 hover:duration-300' src={images.cars2} alt="Car 2" />
                    <div className='h-[20%] w-full  pt-5 font-thin text-lg flex-col flex '><div>Boxy7 T-Shert with roll sleeve</div><div>$20</div></div>
                    <div className='absolute bottom-[120px] right-[55px] addcart bg-black font-thin text-xl text-white px-10 py-2 rounded-[30px] cursor-pointer hover:bg-red-500 hover:duration-300 '>add to cart</div>
                </div>
                <div className='relative cartparent h-[500px] w-[300px]  flex flex-col'>
                    <img className='h-[80%] w-full object-cover hover:brightness-50 hover:duration-300' src={images.cars3} alt="Car 3" />
                    <div className='h-[20%] w-full  pt-5 font-thin text-lg flex-col flex '><div>Boxy7 T-Shert with roll sleeve</div><div>$20</div></div>
                    <div className='absolute bottom-[120px] right-[55px] addcart bg-black font-thin text-xl text-white px-10 py-2 rounded-[30px] cursor-pointer hover:bg-red-500 hover:duration-300 '>add to cart</div>
                </div>
                <div className='relative cartparent h-[500px] w-[300px]  flex flex-col'>
                    <img className='h-[80%] w-full object-cover hover:brightness-50 hover:duration-300' src={images.cars1} alt="Car 1" />
                    <div className='h-[20%] w-full  pt-5 font-thin text-lg flex-col flex '><div>Boxy7 T-Shert with roll sleeve</div><div>$20</div></div>
                    <div className='absolute bottom-[120px] right-[55px] addcart bg-black font-thin text-xl text-white px-10 py-2 rounded-[30px] cursor-pointer hover:bg-red-500 hover:duration-300 '>add to cart</div>
                </div>
            </div>
        </SwiperSlide>

    </Swiper>
</div>
<div className='w-[100%] h-[75vh] bg-[#f2f2f2] gap-10 flex justify-center items-center'>
   <div className='h-[450px] w-[570px] overflow-hidden relative justify-center items-center'> <img className='h-full w-full hover:scale-[1.05] transition-transform transform hover:hover:duration-500  bg-cover bg-center object-cover ' src={images.cars3} alt="" /><div className='absolute top-[140px] left-[150px] text-3xl  gap-y-3 text-white flex justify-center items-center flex-col'>
    <div className='font-extrabold text-3xl'>The Beauty
    </div>
    <div className='font-bold text-5xl'>LOOKBOOK</div>
    <div className='font-thin text-xl hover:brb'>VIEW COLLECTION</div>
    
    
    </div></div>
    <div className='h-[450px] w-[570px] bg-white flex justify-center items-center flex-col'>
      <div className='h-[70%] w-[95%]  '>
        {currentCar ? (
          <img className='h-full w-full  bg-cover ' src={currentCar} alt="Random" />
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className='h-[20%] w-[70%] flex justify-center items-center flex-col'>
        <div className='font-thin text-xl hover:text-red-600 hover:duration-300'>
          Boxy2 T-Shirt with Roll Sleeve
        </div>
        <div>$20</div>
      </div>
      <div className='h-[20%] w-[70%] flex justify-center items-center gap-5'>
        <div className='h-[50px] w-[80px] border-black border-[1px] border-solid flex justify-center items-center flex-col'>
          -2083 <br /><span className='text-gray-600 font-thin'>days</span>
        </div>
        <div className='h-[50px] w-[80px] border-black border-[1px] border-solid flex justify-center items-center flex-col'>
          -11 <br /><span className='text-gray-600 font-thin'>h</span>
        </div>
        <div className='h-[50px] w-[80px] border-black border-[1px] border-solid flex justify-center items-center flex-col'>
          -10 <br /><span className='text-gray-600 font-thin'>min</span>
        </div>
        <div className='h-[50px] w-[80px] border-black border-[1px] border-solid flex justify-center items-center flex-col'>
          -26 <br /><span className='text-gray-600 font-thin'>sec</span>
        </div>
      </div>
    </div>
    
</div>
        <div className='h-[90vh] w-full  flex justify-center items-center flex-col gap-5'>
            <div className='h-[10%] w-[100%]  flex text-3xl font-bold justify-center items-center'>OUR BLOG</div>
            <div className='h-[75%] w-[100%]  flex gap-5 justify-center items-center'>
                <div className='h-[100%] w-[25%] '>
                    <div className='h-[60%] w-full bg-red-50 overflow-hidden'><div className='bg-blog2  hover:scale-110 transition-transform hover:duration-700 h-full w-full bg-cover bg-center'></div></div>
                    <div className='h-[40%] w-full  flex flex-col justify-center items-start gap-3'>
                        <div className='text-xl font-thin'>Black Friday Guide: Best Sales a & Discount <br /> Codes</div>
                        <div><span className='text-gray-700 font-thin'>by </span>fashe-theme Admin <span className='text-gray-700'>on </span>dec 28,2017</div>
                        <div className='font-thin text-gray-700 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Etiam sed turpis sed lorem dignissim vulputate nec <br />cursus ante. Nunc sit...</div>
                    </div>

                </div>
                <div className='h-[100%] w-[25%] '>
                    <div className='h-[60%] w-full  overflow-hidden'><div className='bg-blog3  hover:scale-110 transition-transform hover:duration-700 h-full w-full bg-cover bg-center'></div></div>
                    <div className='h-[40%] w-full   flex flex-col justify-center items-start gap-3'>
                        <div className='text-xl font-thin'>Black Friday Guide: Best Sales a & Discount <br /> Codes</div>
                        <div><span className='text-gray-700 font-thin'>by </span>fashe-theme Admin <span className='text-gray-700'>on </span>dec 28,2017</div>
                        <div className='font-thin text-gray-700 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Etiam sed turpis sed lorem dignissim vulputate nec <br />cursus ante. Nunc sit...</div>
                    </div>

                </div>
                <div className='h-[100%] w-[25%] '>
                    <div className='h-[60%] w-full  overflow-hidden'><div className='bg-blog4  hover:scale-110 transition-transform hover:duration-700 h-full w-full bg-cover bg-center'></div></div>
                    <div className='h-[40%] w-full   flex flex-col justify-center items-start gap-3'>
                        <div className='text-xl font-thin'>Black Friday Guide: Best Sales a & Discount <br /> Codes</div>
                        <div><span className='text-gray-700 font-thin'>by </span>fashe-theme Admin <span className='text-gray-700'>on </span>dec 28,2017</div>
                        <div className='font-thin text-gray-700 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Etiam sed turpis sed lorem dignissim vulputate nec <br />cursus ante. Nunc sit...</div>
                    </div>

                </div>
            </div>

        </div>
        <div className='h-[60vh] w-[100%] flex justify-center items-center gap-[90px] flex-col'>
            <div className='font-bold text-3xl text-[#222222]'>@ FOLLOW US ON INSTAGRAM</div>
            <div className='h-[30%] w-[100%]  flex justify-center items-center'>
            <div className='h-[100%] w-[33%] rightborder    flex justify-center flex-col items-center'>
                <div className='font-thin text-xl'>Free Delivery Worldwide</div>
                <div className='text-[#888888] text-sm'>Mirum est notare quam littera gothica</div>
            </div>
            <div className='h-[100%] w-[33%] rightborder   flex justify-center flex-col items-center'>
                <div className='font-thin text-xl'>30 DAYS RETURN</div>
                <div className='text-[#888888] text-sm'>Mirum est notare quam littera gothica</div>
            </div>
            <div className='h-[100%] w-[33%]    flex justify-center flex-col items-center'>
                <div className='font-thin text-xl'>STORE OPENING</div>
                <div className='text-[#888888] text-sm'>Mirum est notare quam littera gothica</div>
            </div>

            </div>

        </div>
        </div>
    );
};

