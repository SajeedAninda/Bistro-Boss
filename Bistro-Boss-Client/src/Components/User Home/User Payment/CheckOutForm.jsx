import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import useCartData from '../../../Hooks/useCartData';
import useAxiosInstance from '../../../Hooks/UseAxiosInstance';
import UseAuth from '../../../Hooks/UseAuth';
import { useNavigate } from 'react-router-dom';

const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId, setTransactionId] = useState("");
    let { loggedInUser } = UseAuth();
    let navigate = useNavigate();

    let axiosInstance = useAxiosInstance();

    let [cartData, refetch] = useCartData();
    let totalPrice = cartData?.reduce((acc, item) => acc + item.price, 0) || 0;

    useEffect(() => {
        if (totalPrice > 0) {
            axiosInstance
                .post("/create-payment-intent", { price: totalPrice })
                .then((res) => {
                    setClientSecret(res.data.clientSecret);
                })
                .catch((error) => {
                    console.error("Error creating payment intent:", error);
                });
        }

    }, [axiosInstance, totalPrice]);



    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }


        const card = elements.getElement(CardElement);

        if (!card) {
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
        }

        try {
            const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: loggedInUser?.displayName || "Anonymous",
                        email: loggedInUser?.email || "Anonymous"
                    },
                },
            });
            if (confirmError) {
                console.log(confirmError);
            } else {
                console.log(paymentIntent)
                if (paymentIntent.status === "succeeded") {
                    setTransactionId(paymentIntent.id)

                    // SAVE PAYMENT INFO IN DATABASE AFTER PAYMENT IS DONE
                    const paymentInfo = {
                        email: loggedInUser?.email,
                        name: loggedInUser?.displayName,
                        price: totalPrice,
                        TrxID: paymentIntent.id,
                        date: new Date(),
                        cartIds: cartData.map(item => item._id),
                        category: 'Food Order'
                    }

                    axiosInstance.post('/payments', paymentInfo)
                        .then(res => {
                            if (res.data?.paymentResult?.insertedId) {
                                refetch();
                                toast.success("Payment successful!");
                                // navigate('/user/paymentHistory')
                            }
                        })
                }
            }
        } catch (error) {
            console.error("Error during payment confirmation:", error);

        }
        console.log(transactionId)

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
                    disabled={!stripe || !clientSecret}
                >
                    {"Pay"}
                </button>
            </div>
            <div className="mt-4 flex justify-center items-center">
                <h2 style={{ fontFamily: "'Cinzel', serif" }} className="text-xl text-red-600 font-bold">
                    {error}
                </h2>
                {
                    transactionId &&
                    <h2 style={{ fontFamily: "'Cinzel', serif" }} className="text-md text-green-500 font-bold">
                        Payment Succeeded. TRxID: {transactionId}
                    </h2>
                }
            </div>
        </form>
    );
};

export default CheckOutForm;