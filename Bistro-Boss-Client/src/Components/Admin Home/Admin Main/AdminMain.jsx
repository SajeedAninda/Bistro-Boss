import React from 'react';
import UseAuth from '../../../Hooks/UseAuth';
import { RiTruckFill } from "react-icons/ri";
import { GiChefToque } from "react-icons/gi";
import { PiUsersFourFill } from "react-icons/pi";
import { GiWallet } from "react-icons/gi";
import useAxiosInstance from '../../../Hooks/UseAxiosInstance';
import { useQuery } from '@tanstack/react-query';


const AdminMain = () => {
    const headerStyle = {
        fontFamily: "'Cinzel', serif"
    };
    let { loggedInUser } = UseAuth();

    let axiosInstance = useAxiosInstance();
    const { data: stats, refetch } = useQuery({
        queryKey: ['stats'],
        queryFn: async () => {
            const response = await axiosInstance.get(`/adminStats`);
            return response.data;
        }
    })


    return (
        <div className='bg-[#F6F6F6] w-full'>
            <div className='w-[95%] mx-auto my-8'>
                <h1 style={headerStyle} className='text-3xl font-semibold text-[#151515]'>Hi, {loggedInUser?.displayName}</h1>

                <div className='grid grid-cols-4 gap-6 my-6'>
                    <div className='bg-gradient-to-r from-[#BB34F5] rounded-lg gap-3 to-[#FCDBFF] flex justify-center items-center p-6'>
                        <div>
                            <GiWallet className='text-white text-5xl' />
                        </div>
                        <div className='flex flex-col justify-start items-start'>
                            <h3 className=' text-white text-3xl font-extrabold'>{(stats?.revenue)?.toFixed(2)}</h3>
                            <h3 className='text-white'>Revenue</h3>
                        </div>
                    </div>

                    <div className='bg-gradient-to-r from-[#D3A256] rounded-lg gap-3 to-[#FDE8C0] flex justify-center items-center p-6'>
                        <div>
                            <PiUsersFourFill className='text-white text-5xl' />
                        </div>
                        <div className='flex flex-col justify-start items-start'>
                            <h3 className=' text-white text-3xl font-extrabold'>{stats?.users}</h3>
                            <h3 className='text-white'>Customers</h3>
                        </div>
                    </div>


                    <div className='bg-gradient-to-r from-[#FE4880] rounded-lg gap-3 to-[#FECDE9] flex justify-center items-center p-6'>
                        <div>
                            <GiChefToque className='text-white text-5xl' />
                        </div>
                        <div className='flex flex-col justify-start items-start'>
                            <h3 className=' text-white text-3xl font-extrabold'>{stats?.products}</h3>
                            <h3 className='text-white'>Products</h3>
                        </div>
                    </div>


                    <div className='bg-gradient-to-r from-[#6AAEFF] rounded-lg gap-3 to-[#B6F7FF] flex justify-center items-center p-6'>
                        <div>
                            <RiTruckFill className='text-white text-5xl' />
                        </div>
                        <div className='flex flex-col justify-start items-start'>
                            <h3 className='text-white text-3xl font-extrabold'>{stats?.orders}</h3>
                            <h3 className='text-white'>Orders</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminMain;