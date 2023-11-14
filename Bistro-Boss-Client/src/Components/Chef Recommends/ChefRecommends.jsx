import React from 'react';
import SectionHeader from '../Shared/Section Header/SectionHeader';
import recommend from "../../../src/assets/home/banner.jpg"

const ChefRecommends = () => {
    return (
        <div className='w-[70%] mx-auto pb-12'>
            <div>
                <SectionHeader primaryText={"CHEF RECOMMENDS"} seconddaryText={"---Should Try---"}></SectionHeader>
            </div>
            <div className='grid grid-cols-3 gap-6'>
                <div>
                    <img className='h-[200px] object-cover' src={recommend} alt="" />
                    <div className='bg-[#F3F3F3] flex justify-center items-center flex-col text-center py-8'>
                        <h2 className='text-lg text-[#151515] font-semibold'>Caeser Salad</h2>
                        <p className='text-[#151515] mt-2'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    </div>
                </div>

                <div>
                    <img className='h-[200px] object-cover' src={recommend} alt="" />
                    <div className='bg-[#F3F3F3] flex justify-center items-center flex-col text-center py-8'>
                        <h2 className='text-lg text-[#151515] font-semibold'>Caeser Salad</h2>
                        <p className='text-[#151515] mt-2'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    </div>
                </div>

                <div>
                    <img className='h-[200px] object-cover' src={recommend} alt="" />
                    <div className='bg-[#F3F3F3] flex justify-center items-center flex-col text-center py-8'>
                        <h2 className='text-lg text-[#151515] font-semibold'>Caeser Salad</h2>
                        <p className='text-[#151515] mt-2'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default ChefRecommends;