import useAxiosInstance from './UseAxiosInstance';
import { useQuery } from '@tanstack/react-query';

const UseMenu = () => {
    let axiosInstance = useAxiosInstance();

    const { data: menu } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const response = await axiosInstance.get('/menu');
            return response.data;
        }
    })

    return menu;
};

export default UseMenu;