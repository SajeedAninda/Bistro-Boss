import React from 'react';
import SectionHeader from '../Shared/Section Header/SectionHeader';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from "../../assets/home/slide1.jpg"
import slide2 from "../../assets/home/slide2.jpg"
import slide3 from "../../assets/home/slide3.jpg"
import slide4 from "../../assets/home/slide4.jpg"
import slide5 from "../../assets/home/slide5.jpg"

const OrderOnline = () => {
    const headerStyle = {
        fontFamily: "'Cinzel', serif",
    };
    return (
        <div className='w-[70%] mx-auto'>
            <SectionHeader primaryText={"ORDER ONLINE"} seconddaryText={"---From 11:00am to 10:00pm---"}></SectionHeader>

            <div>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='flex justify-center items-center flex-col'>
                            <img src={slide1} alt="" />
                            <h2 className='text-2xl text-white text-center -mt-16' style={headerStyle}>Salads</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex justify-center items-center flex-col'>
                            <img src={slide2} alt="" />
                            <h2 className='text-2xl text-white text-center -mt-16' style={headerStyle}>Soups</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex justify-center items-center flex-col'>
                            <img src={slide3} alt="" />
                            <h2 className='text-2xl text-white text-center -mt-16' style={headerStyle}>Pizza</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex justify-center items-center flex-col'>
                            <img src={slide4} alt="" />
                            <h2 className='text-2xl text-white text-center -mt-16' style={headerStyle}>Deserts</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex justify-center items-center flex-col'>
                            <img src={slide5} alt="" />
                            <h2 className='text-2xl text-white text-center -mt-16' style={headerStyle}>Vegetables</h2>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default OrderOnline;