import React from 'react';
import UseAuth from '../../../Hooks/UseAuth';
import useAxiosInstance from '../../../Hooks/UseAxiosInstance';
import toast from 'react-hot-toast';
import useCartData from '../../../Hooks/useCartData';

const TabCard = ({ tabItem }) => {
    let [, refetch] = useCartData();
    let axiosInstance = useAxiosInstance();
    let { loggedInUser } = UseAuth();
    let currentUserEmail = loggedInUser?.email;
    let prevId = tabItem._id;
    let { name, recipe, image, category, price } = tabItem;

    let handleAddToCart = async () => {
        let cartItem = { name, recipe, image, category, price, prevId, currentUserEmail }
        try {
            const response = await axiosInstance.post("/cart", cartItem, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.data.insertedId) {
                refetch();
                toast.success(`${name} added to Cart`)
            };
        } catch (error) {
            if (error.response && error.response.status === 400) {
                toast.error("Product already exists in the cart");
            } else {
                console.error(error);
                toast.error("Error adding product to cart");
            }
        }
    }


    return (
        <div className='mt-6 flex flex-col'>
            <img className='h-[200px] object-cover' src={tabItem.image} alt="" />
            <div className='bg-[#F3F3F3] flex justify-between items-center flex-col text-center py-8 h-[250px]'>
                <h2 className='text-lg text-[#151515] font-semibold'>{tabItem.name}</h2>
                <p className='text-[#151515] mt-2'>{tabItem.recipe}</p>
                <button onClick={handleAddToCart} className='px-4 py-3 mt-3 text-[#BB8506] bg-[#E8E8E8] rounded-md border-b-2 border-[#BB8506] hover:bg-[#1F2937] hover:border-[#1F2937]'>Add to Cart</button>
            </div>
        </div>
    );
};

export default TabCard;