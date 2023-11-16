import React, { useEffect, useState } from 'react';
import useAxiosInstance from '../../../Hooks/UseAxiosInstance';
import { FaRegTrashAlt } from 'react-icons/fa';
import { FaUsers } from "react-icons/fa6";
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import { useQuery,useQueryClient } from '@tanstack/react-query';

const Users = () => {
    const headerStyle = {
        fontFamily: "'Cinzel', serif"
    };

    let axiosInstance = useAxiosInstance();

    const { data: users, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const response = await axiosInstance.get(`/registeredUsers`);
            return response.data;
        }
    })
    const queryClient = useQueryClient();  

    let handleUpdateUserRole = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Once made admin, you cannot revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, make admin!'
        }).then((result) => {
            if (result.isConfirmed) {
                // User confirmed, make the API request
                axiosInstance.patch(`/updateUserRole/${id}`)
                    .then(res => {
                        queryClient.invalidateQueries(['users']);
                        queryClient.invalidateQueries(['admins']);
                        toast.success("Made Admin Succesfully")
                    })
                    .catch(error => {
                        console.error("Error updating user role:", error);
                        // Show SweetAlert for error
                        toast.error('Error', 'Failed to update user role', 'error');
                    });
            }
        });
    }

    let handleDeleteUser = (id) => {
        console.log(id)
    }

    return (
        <div className='bg-white px-8 py-8 w-[80%] mx-auto'>
            <div className='flex justify-between items-center'>
                <h2 style={headerStyle} className='text-2xl text-[#151515] font-bold'>Total Users: {users?.length}</h2>
            </div>

            <div className='bg-[#D1A054] px-10 py-4 rounded-t-2xl mt-6 grid grid-cols-9'>
                <h2 className='text-white font-semibold col-span-1'>#SL</h2>
                <h2 className='text-white font-semibold col-span-3'>NAME</h2>
                <h3 className='text-white font-semibold col-span-3'>EMAIL</h3>
                <h3 className='text-white font-semibold col-span-1 text-center'>ROLE</h3>
                <h3 className='text-white font-semibold col-span-1 text-center'>ACTION</h3>
            </div>

            {users?.map((user, index) =>
                <div key={user._id} className='px-10 py-4 rounded-t-2xl  grid grid-cols-9 items-center border-b border-[]'>
                    <h2 className='text-black font-semibold col-span-1'>{index + 1}</h2>
                    <h3 className='text-[#737373] font-semibold col-span-3'>{user?.name}</h3>
                    <h3 className='text-[#737373] font-semibold col-span-3'>{user?.email}</h3>
                    <button onClick={() => handleUpdateUserRole(user?._id)} className='col-span-1 flex justify-center w-[50%] mx-auto  py-3 text-white bg-[#D1A054] rounded-lg text-xl'>
                        <FaUsers></FaUsers>
                    </button>
                    <button onClick={() => handleDeleteUser(user?._id)} className='col-span-1 flex justify-center w-[50%] mx-auto  py-3 text-white bg-[#B91C1C] rounded-lg'>
                        <FaRegTrashAlt />
                    </button>
                </div>
            )}

        </div>
    );
};

export default Users;