import axios from 'axios';
import UseAuth from './UseAuth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const instance = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
});
const useAxiosInstance = () => {
    let { logOut } = UseAuth();
    const navigate = useNavigate();

    useEffect(() => {
        instance.interceptors.response.use(res => {
            return res;
        }, error => {
            if (error.response.status == 401) {
                logOut()
                    .then(() => {
                        navigate("/login");
                        console.log("Logged Out Successfully");
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        })
    }, [])

    return instance;
};

export default useAxiosInstance;
