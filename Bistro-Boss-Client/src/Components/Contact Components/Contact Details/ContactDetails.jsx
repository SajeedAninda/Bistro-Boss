import React from 'react';
import SectionHeader from '../../Shared/Section Header/SectionHeader';
import { IoCallOutline } from "react-icons/io5";
import { CiLocationArrow1 } from "react-icons/ci";
import { IoIosTimer } from "react-icons/io";


const ContactDetails = () => {
    return (
        <div className='w-[70%] mx-auto'>
            <SectionHeader primaryText={"OUR LOCATION"} seconddaryText={"---Visit Us---"}></SectionHeader>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                <div className='border'>
                    <div className='w-full bg-[#D1A054] flex justify-center items-center py-4'>
                        <IoCallOutline className='text-white font-bold text-3xl' />
                    </div>
                    <div className='bg-white px-4 pb-4 '>
                        <div className='bg-[#F3F3F3]  h-[250px] flex justify-center items-center flex-col gap-2 px-8 py-12'>
                            <h2 className='text-xl text-[#151515] font-semibold'>PHONE</h2>
                            <h4 className='text-base text-[#444] font-semibold'>+38 (012) 34 56 789</h4>
                        </div>
                    </div>
                </div>



                <div className='border'>
                    <div className='w-full bg-[#D1A054] flex justify-center items-center py-4'>
                        <CiLocationArrow1 className='text-white font-bold text-3xl' />
                    </div>
                    <div className='bg-white px-4 pb-4 '>
                        <div className='bg-[#F3F3F3] h-[250px] flex justify-center items-center flex-col gap-2 px-8 py-12'>
                            <h2 className='text-xl text-[#151515] font-semibold'>ADDRESS</h2>
                            <h4 className='text-base text-[#444] font-semibold text-center'>Sixth Street, Erlinghton District, Chopping Lane, Bradfordshire, England, UK</h4>
                        </div>
                    </div>
                </div>



                <div className='border'>
                    <div className='w-full bg-[#D1A054] flex justify-center items-center py-4'>
                        <IoIosTimer className='text-white font-bold text-3xl' />
                    </div>
                    <div className='bg-white px-4 pb-4 '>
                        <div className='bg-[#F3F3F3] h-[250px] flex justify-center items-center flex-col gap-2 px-8 py-12'>
                            <h2 className='text-xl text-[#151515] font-semibold'>WORKING HOURS</h2>
                            <h4 className='text-base text-[#444] font-semibold text-center'>Mon - Fri: 08:00 - 22:00 <br />
                                Sat - Sun: 10:00 - 23:00</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactDetails;