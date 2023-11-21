import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import SectionHeader from '../../Shared/Section Header/SectionHeader';
import { ImSpoonKnife } from "react-icons/im";
import useAxiosInstance from '../../../Hooks/UseAxiosInstance';
import axios from 'axios';
import toast from 'react-hot-toast';

const UpdateItem = () => {
    let menuItem = useLoaderData();
    let { _id, name, recipe, image, category, price } = menuItem;

    let [selectedImage, setSelectedImage] = useState(null);

    let axiosInstance = useAxiosInstance();
    let navigate = useNavigate();

    let handleImageChange = (event) => {
        setSelectedImage(event.target.files[0]);
    };

    let handleUpdateItems = async (e) => {
        e.preventDefault();
        let recipeName = e.target.recipeName.value;
        let category = e.target.category.value;
        let price = e.target.price.value;
        let recipeDetails = e.target.recipeDetails.value;


        try {
            let formData = new FormData();
            formData.append('image', selectedImage);

            let response = await axios.post('https://api.imgbb.com/1/upload', formData, {
                params: {
                    key: "cbd289d81c381c05afbab416f87e8637",
                },
            });
            let imageUrl = response.data.data.url;
            let itemData = { name: recipeName, recipe: recipeDetails, image: imageUrl, category: category, price: price }

            let res = await axiosInstance.patch(`/menu/${_id}`, itemData);

            if (res.data.modifiedCount > 0) {
                toast.success("Updated Item Successfully");
                navigate("/admin/manageItems")
            } else {
                toast.error("Failed to add item. Please try again.");
            }

        } catch (error) {
            console.error('Error uploading image:', error);
        }
    }





    return (
        <div className='w-[80%] '>
            <SectionHeader primaryText={'UPDATE AN ITEM'} seconddaryText={"---What's new?---"}></SectionHeader>
            <div>
                <form onSubmit={handleUpdateItems} className='bg-[#F3F3F3] w-[75%] mx-auto my-8 py-14 px-14'>
                    <div className='w-full'>
                        <div className=''>
                            <label className='text-lg font-semibold text-[#444]' htmlFor="recipeName">Recipe Name*</label> <br />
                            <input defaultValue={name} name='recipeName' className='py-3 px-2 w-full bg-white rounded-md mt-2' type="text" placeholder='Recipe Name' required />
                        </div>
                    </div>
                    <div className='flex gap-4 mt-4'>
                        <div className='flex-1'>
                            <label className='text-lg font-semibold text-[#444]' htmlFor="category">Category*</label> <br />
                            <select value={category} className='w-full mt-2 py-3 px-2 bg-white rounded text-[#444] placeholder:text-[#444]' name="category" id="category">
                                <option disabled selected>Category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soups</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>

                        <div className='flex-1'>
                            <label className='text-lg font-semibold text-[#444]' htmlFor="price">Price*</label> <br />
                            <input defaultValue={price} name='price' className='py-3 px-2 w-full bg-white rounded-md mt-2' type="number" step="0.01" placeholder='Price' required />
                        </div>
                    </div>
                    <div>
                        <div className='mt-3'>
                            <label className='text-lg font-semibold text-[#444]' htmlFor="recipeDetails">Recipe Details*</label> <br />
                            <input defaultValue={recipe} name='recipeDetails' className='pt-3 pb-32 px-2 w-full bg-white rounded-md mt-2' type="text" placeholder='Recipe Details' required />
                        </div>
                    </div>

                    <div className='mt-3'>
                        <input
                            onChange={handleImageChange}
                            type="file"
                            required
                        />
                    </div>

                    <div className='mt-5 flex justify-center items-center'>
                        <button type='submit' className='px-5 py-2 bg-[#B58130] border-2 border-[#B58130] text-white font-bold hover:bg-transparent hover:text-[#B58130] flex gap-2 justify-center items-center'>
                            <p>Update Item</p>
                            <ImSpoonKnife className='text-2xl' />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;