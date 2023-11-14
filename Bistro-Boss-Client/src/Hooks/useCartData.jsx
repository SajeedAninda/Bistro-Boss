import useAxiosInstance from './UseAxiosInstance';
import { useQuery } from '@tanstack/react-query';
import UseAuth from './UseAuth';

const useCartData = () => {
    let { loggedInUser } = UseAuth();
    let currentUserEmail = loggedInUser?.email;

    let axiosInstance = useAxiosInstance();
    const { data: cartData, refetch } = useQuery({
        queryKey: ['cartData', currentUserEmail],
        queryFn: async () => {
            const response = await axiosInstance.get(`/cart/${currentUserEmail}`);
            return response.data;
        }
    })

    return [cartData, refetch];
};

export default useCartData;