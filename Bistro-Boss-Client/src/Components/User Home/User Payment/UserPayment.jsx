import React from 'react';
import useCartData from '../../../Hooks/useCartData';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';

const UserPayment = () => {
    const headerStyle = {
        fontFamily: "'Cinzel', serif"
    };
    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);

    let [cartData, refetch] = useCartData();
    let totalPrice = cartData?.reduce((acc, item) => acc + item.price, 0);

    return (
        <div className='w-[80%] mx-auto flex justify-center items-center flex-col'>
            <h2 style={headerStyle} className='text-2xl text-[#151515] font-bold'>Total Payable Amount: ${totalPrice}</h2>
            <div>
                <h1 style={headerStyle} className='text-3xl text-[#151515] font-bold mt-12'>PAYMENT</h1>
            </div>
            <div className='w-[80%] mt-8 mx-auto'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm />
                </Elements>
            </div>
        </div>
    );
};

export default UserPayment;