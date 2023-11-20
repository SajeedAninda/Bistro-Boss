import React from 'react';
import SectionHeader from '../../Shared/Section Header/SectionHeader';
import UseAuth from '../../../Hooks/UseAuth';
import useAxiosInstance from '../../../Hooks/UseAxiosInstance';
import { useQuery } from '@tanstack/react-query';

const PaymentHistory = () => {
    const headerStyle = {
        fontFamily: "'Cinzel', serif"
    };
    let { loggedInUser } = UseAuth();
    let currentUserEmail = loggedInUser?.email;

    let axiosInstance = useAxiosInstance();
    const { data: paymentData, refetch } = useQuery({
        queryKey: ['paymentData', currentUserEmail],
        queryFn: async () => {
            const response = await axiosInstance.get(`/paymentHistory/${currentUserEmail}`);
            return response.data;
        }
    })


    return (
        <div className='w-[80%] bg-[#F6F6F6]'>
            <SectionHeader primaryText={"PAYMENT HISTORY"} seconddaryText={"---At a Glance!---"} />
            <div className='bg-white px-8 py-8 w-[80%] mx-auto'>
                <div className='flex justify-between items-center'>
                    <h2 style={headerStyle} className='text-2xl text-[#151515] font-bold'>Total Payments: {paymentData?.length}</h2>
                </div>

                <div className='bg-[#D1A054] px-10 py-4 rounded-t-2xl mt-6 grid grid-cols-11'>
                    <h2 className='text-white font-semibold col-span-1'>#SL</h2>
                    <h2 className='text-white font-semibold col-span-3'>EMAIL</h2>
                    <h3 className='text-white font-semibold col-span-2'>CATEGORY</h3>
                    <h3 className='text-white font-semibold col-span-2'>TOTAL PRICE</h3>
                    <h3 className='text-white font-semibold col-span-3'>PAYMENT DATE</h3>
                </div>

                {paymentData?.map((item, index) =>
                    <div key={item._id} className='px-10 py-4 rounded-t-2xl  grid grid-cols-11 items-center border-b border-[] justify-center'>
                        <h2 className='text-black font-semibold col-span-1'>{index + 1}</h2>
                        <h3 className='text-[#737373] font-semibold col-span-3'>{item?.email}</h3>
                        <h3 className='text-[#737373] font-semibold col-span-2'>{item?.category}</h3>
                        <h3 className='text-[#737373] font-semibold col-span-2'>$ {(item?.price).toFixed(2)}</h3>
                        <h3 className='text-[#737373] font-semibold col-span-3'>
                            {new Date(item?.date).toLocaleDateString('en-US', {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric'
                            })}
                        </h3>
                    </div>
                )}

            </div>
        </div>
    );
};

export default PaymentHistory;