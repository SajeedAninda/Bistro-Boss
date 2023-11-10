import React, { useEffect, useState } from 'react';
import SectionHeader from '../Shared/Section Header/SectionHeader';
import axios from 'axios';
import { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rating } from '@smastrom/react-rating'
import { FaQuoteRight } from 'react-icons/fa';


import '@smastrom/react-rating/style.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

const Testimonial = () => {
    let [reviews, setReviews] = useState([]);
    useEffect(() => {
        axios.get("./reviews.json")
            .then(res => setReviews(res.data));
    }, [])

    return (
        <div className='w-[70%] mx-auto'>
            <div>
                <SectionHeader primaryText={"TESTIMONIALS"} seconddaryText={"---What Our Clients Say---"}></SectionHeader>
            </div>

            <div className='py-6'>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(review =>
                            <div>

                                <SwiperSlide>
                                    <div className='w-[70%] mx-auto text-center flex justify-center items-center flex-col gap-3'>
                                        <Rating
                                            style={{ maxWidth: 180 }}
                                            value={review.rating}
                                            readOnly
                                        />
                                        <FaQuoteRight className='text-4xl text-[#151515]'></FaQuoteRight>
                                        <p className='text-[#444]'>{review.details}</p>
                                        <p className='text-[#CD9003] text-2xl mt-3'>{review.name}</p>
                                    </div>
                                </SwiperSlide>
                            </div>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;