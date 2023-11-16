import React, { useEffect, useState } from 'react';
import useAxiosInstance from '../../../Hooks/UseAxiosInstance';
import { RiAdminFill } from "react-icons/ri";
import { useQuery } from '@tanstack/react-query';

const Admins = () => {
    const headerStyle = {
        fontFamily: "'Cinzel', serif"
    };

    let axiosInstance = useAxiosInstance();

    const { data: admins, refetch } = useQuery({
        queryKey: ['admins'],
        queryFn: async () => {
            const response = await axiosInstance.get(`/registeredAdmins`);
            return response.data;
        }
    })
    return (
        <div className='bg-white px-8 py-8 w-[80%] mx-auto'>
            <div className='flex justify-between items-center'>
                <h2 style={headerStyle} className='text-2xl text-[#151515] font-bold'>Total Admins: {admins?.length}</h2>
            </div>

            <div className='bg-[#D1A054] px-10 py-4 rounded-t-2xl mt-6 grid grid-cols-9'>
                <h2 className='text-white font-semibold col-span-1'>#SL</h2>
                <h2 className='text-white font-semibold col-span-4'>NAME</h2>
                <h3 className='text-white font-semibold col-span-3'>EMAIL</h3>
                <h3 className='text-white font-semibold col-span-1'>ROLE</h3>
            </div>

            {admins?.map((admin, index) =>
                <div key={admin._id} className='px-10 py-4 rounded-t-2xl  grid grid-cols-9 items-center border-b border-[]'>
                    <h2 className='text-black font-semibold col-span-1'>{index + 1}</h2>
                    <h3 className='text-[#737373] font-semibold col-span-4'>{admin?.name}</h3>
                    <h3 className='text-[#737373] font-semibold col-span-3'>{admin?.email}</h3>
                    <h3 className='text-[#737373] font-semibold col-span-1 text-start text-2xl flex justify-start items-center'>
                        <RiAdminFill></RiAdminFill>
                    </h3>
                </div>
            )}

        </div>
    );
};

export default Admins;