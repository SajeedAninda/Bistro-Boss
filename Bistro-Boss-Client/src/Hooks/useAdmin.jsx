import React from 'react';
import UseAuth from './UseAuth';
import useAxiosInstance from './UseAxiosInstance';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
    let { loggedInUser } = UseAuth();
    let currentUserEmail = loggedInUser?.email;

    let axiosInstance = useAxiosInstance();
    const { data: adminData, isPending:isAdminLoading } = useQuery({
        queryKey: ['adminData', currentUserEmail],
        queryFn: async () => {
            const response = await axiosInstance.get(`/checkAdmin/${currentUserEmail}`);
            return response.data;
        },
        enabled: !!currentUserEmail,

    })

    return [adminData,isAdminLoading];
};

export default useAdmin;