import React from 'react';
import UseMenu from '../../../Hooks/UseMenu';
import { FaRegTrashAlt } from "react-icons/fa";
import SectionHeader from '../../Shared/Section Header/SectionHeader';

const ManageItems = () => {
    const headerStyle = {
        fontFamily: "'Cinzel', serif"
    };

    let menuItems = UseMenu();

    let handleUpdateMenu=(id)=>{

    }

    let handleDeleteFromMenu = (id) => {
        
    }

    return (
        <div className='w-[80%] bg-[#F6F6F6]'>
            <SectionHeader primaryText={"MANAGE ALL ITEMS?"} seconddaryText={"---Hurry Up!---"} />
            <div className='bg-white px-8 py-8 w-[80%] mx-auto'>
                <div className='flex justify-between items-center'>
                    <h2 style={headerStyle} className='text-2xl text-[#151515] font-bold'>Total Items: {menuItems?.length}</h2>
                </div>

                <div className='bg-[#D1A054] px-10 py-4 rounded-t-2xl mt-6 grid grid-cols-10'>
                    <h2 className='text-white font-semibold col-span-1'>#SL</h2>
                    <h2 className='text-white font-semibold col-span-2'>ITEM IMAGE</h2>
                    <h3 className='text-white font-semibold col-span-4'>ITEM NAME</h3>
                    <h3 className='text-white font-semibold col-span-1'>PRICE</h3>
                    <h3 className='text-white font-semibold col-span-1'>ACTION</h3>
                    <h3 className='text-white font-semibold col-span-1'>ACTION</h3>
                </div>

                {menuItems?.map((items, index) =>
                    <div key={items._id} className='px-10 py-4 rounded-t-2xl  grid grid-cols-10 items-center border-b border-[]'>
                        <h2 className='text-black font-semibold col-span-1'>{index + 1}</h2>
                        <div className='text-[#737373] font-semibold col-span-2 w-[65px] h-[65px]'>
                            <img src={items?.image} alt="" />
                        </div>
                        <h3 className='text-[#737373] font-semibold col-span-4'>{items?.name}</h3>
                        <h3 className='text-[#737373] font-semibold col-span-1'>$ {items?.price}</h3>
                        <button onClick={() => handleUpdateMenu(items?._id)} className='col-span-1 flex justify-center w-[50%] mx-auto  py-3 text-white bg-[#D1A054] rounded-lg'>
                            Edit
                        </button>
                        <button onClick={() => handleDeleteFromMenu(items?._id)} className='col-span-1 flex justify-center w-[50%] mx-auto  py-3 text-white bg-[#B91C1C] rounded-lg'>
                            <FaRegTrashAlt />
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
};

export default ManageItems;