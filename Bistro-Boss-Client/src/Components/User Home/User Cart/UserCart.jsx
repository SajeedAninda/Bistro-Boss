import React from 'react';
import SectionHeader from '../../Shared/Section Header/SectionHeader';
import { FaRegTrashAlt } from "react-icons/fa";


const UserCart = () => {
    const headerStyle = {
        fontFamily: "'Cinzel', serif"
    };
    return (
        <div className='w-[80%] bg-[#F6F6F6]'>
            <SectionHeader primaryText={"WANNA ADD MORE?"} seconddaryText={"---My Cart---"}></SectionHeader>
            <div className='bg-white px-8 py-8 w-[80%] mx-auto'>
                <div className='flex justify-between items-center'>
                    <h2 style={headerStyle} className='text-2xl text-[#151515] font-bold'>Total orders: 6</h2>
                    <h2 style={headerStyle} className='text-2xl text-[#151515] font-bold'>Total price: $88.2</h2>
                    <button style={headerStyle} className='px-5 text-white font-bold py-3 rounded-lg bg-[#D1A054] border-2 border-[#D1A054] hover:bg-white hover:text-[#D1A054]'>Pay</button>
                </div>

                <div className='bg-[#D1A054] px-10 py-4 rounded-t-2xl mt-6 grid grid-cols-9'>
                    <h2 className='text-white font-semibold col-span-1'>#SL</h2>
                    <h2 className='text-white font-semibold col-span-2'>ITEM IMAGE</h2>
                    <h3 className='text-white font-semibold col-span-4'>ITEM NAME</h3>
                    <h3 className='text-white font-semibold col-span-1'>PRICE</h3>
                    <h3 className='text-white font-semibold col-span-1'>ACTION</h3>
                </div>

                <div className='px-10 py-4 rounded-t-2xl  grid grid-cols-9 items-center border-b border-[]'>
                    <h2 className='text-black font-semibold col-span-1'>1</h2>
                    <h2 className='text-[#737373] font-semibold col-span-2'>ITEM IMAGE</h2>
                    <h3 className='text-[#737373] font-semibold col-span-4'>Chicken and Walnut Salad</h3>
                    <h3 className='text-[#737373] font-semibold col-span-1'>$ 14.5</h3>
                    <button className='col-span-1 flex justify-center w-[50%] mx-auto  py-3 text-white bg-[#B91C1C] rounded-lg'>
                    <FaRegTrashAlt /> 
                    </button>
                </div>

            </div>
        </div>
    );
};

export default UserCart;