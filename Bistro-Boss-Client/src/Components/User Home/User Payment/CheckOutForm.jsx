import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements || loading) {
            return;
        }

        setLoading(true);

        const card = elements.getElement(CardElement);

        if (!card) {
            setLoading(false);
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.error('[error]', error);
            setError(error.message || "An error occurred");
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError("");
            toast.success("Payment successful!");
        }

        setLoading(false);
    };


    return (
        <form className='border-2 border-[#D1A054] p-8' onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '24px',
                            color: '#D1A054',
                            '::placeholder': {
                                color: '#D1A054',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <div className="flex justify-center items-center mt-4">
                <button
                    className="bg-[#D1A054] text-white rounded-md hover:bg-white border-2 border-[#D1A054] hover:text-[#D1A054] font-bold px-12 py-3"
                    type="submit"
                    disabled={!stripe || loading}
                >
                    {loading ? "Processing..." : "Pay"}
                </button>
            </div>
            <div className="mt-4 flex justify-center items-center">
                <h2 style={{ fontFamily: "'Cinzel', serif" }} className="text-xl text-red-600 font-bold">
                    {error}
                </h2>
            </div>
        </form>
    );
};

export default CheckOutForm;