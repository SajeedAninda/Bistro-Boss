import React, { useEffect, useState } from 'react';
import useAxiosInstance from '../../../Hooks/UseAxiosInstance';
import SectionHeader from '../../Shared/Section Header/SectionHeader';
import { FaRegTrashAlt } from 'react-icons/fa';

const AllUsers = () => {
    const headerStyle = {
        fontFamily: "'Cinzel', serif"
    };

    let axiosInstance = useAxiosInstance();
    let [users, setUser] = useState([]);
    useEffect(() => {
        axiosInstance.get("/registeredUsers")
            .then(res => setUser(res.data));
    }, [])

    let handleDeleteUser = () => {

    }

    return (
        <div className='w-[80%] bg-[#F6F6F6]'>
            <SectionHeader primaryText={"MANAGE ALL USERS"} seconddaryText={"---How many??---"} />
            <div className='bg-white px-8 py-8 w-[80%] mx-auto'>
                <div className='flex justify-between items-center'>
                    <h2 style={headerStyle} className='text-2xl text-[#151515] font-bold'>Total Users: {users?.length}</h2>
                </div>

                <div className='bg-[#D1A054] px-10 py-4 rounded-t-2xl mt-6 grid grid-cols-9'>
                    <h2 className='text-white font-semibold col-span-1'>#SL</h2>
                    <h2 className='text-white font-semibold col-span-3'>NAME</h2>
                    <h3 className='text-white font-semibold col-span-3'>EMAIL</h3>
                    <h3 className='text-white font-semibold col-span-1'>ROLE</h3>
                    <h3 className='text-white font-semibold col-span-1'>ACTION</h3>
                </div>

                {users?.map((user, index) =>
                    <div key={user._id} className='px-10 py-4 rounded-t-2xl  grid grid-cols-9 items-center border-b border-[]'>
                        <h2 className='text-black font-semibold col-span-1'>{index + 1}</h2>
                        <h3 className='text-[#737373] font-semibold col-span-3'>{user?.name}</h3>
                        <h3 className='text-[#737373] font-semibold col-span-3'>{user?.email}</h3>
                        <h3 className='text-[#737373] font-semibold col-span-1 capitalize'>{user?.role}</h3>
                        <button onClick={() => handleDeleteUser(user?._id)} className='col-span-1 flex justify-center w-[50%] mx-auto  py-3 text-white bg-[#B91C1C] rounded-lg'>
                            <FaRegTrashAlt />
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
};

export default AllUsers;