import React from 'react';
import UseMenu from '../../../Hooks/UseMenu';
import { FaRegTrashAlt } from "react-icons/fa";
import SectionHeader from '../../Shared/Section Header/SectionHeader';
import Swal from 'sweetalert2';
import useAxiosInstance from '../../../Hooks/UseAxiosInstance';
import toast from 'react-hot-toast';
import { FaEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';


const ManageItems = () => {
    const headerStyle = {
        fontFamily: "'Cinzel', serif"
    };

    let [menuItems, refetch] = UseMenu();
    let axiosInstance = useAxiosInstance();



    let handleDeleteFromMenu = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Once Deleted, you cannot revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Delete!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosInstance.delete(`/menu/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            console.log(res.data);
                            toast.success("User Deleted Succesfully")
                        }
                    })
                    .catch(error => {
                        console.error("Error :", error);
                        toast.error('Error', 'Failed to delete Item');
                    });
            }
        });
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
                        <Link to={`/admin/updateItems/${items?._id}`}>
                            <button className='col-span-1 flex justify-center w-[50%] mx-auto  py-3 text-white bg-[#D1A054] rounded-lg'>
                                <FaEdit />
                            </button>
                        </Link>
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