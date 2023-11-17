import React from 'react';
import SectionHeader from '../../Shared/Section Header/SectionHeader';
import { ImSpoonKnife } from "react-icons/im";

const AddItems = () => {
    return (
        <div className='w-[80%] '>
            <SectionHeader primaryText={'ADD AN ITEM'} seconddaryText={"---What's new?---"}></SectionHeader>
            <div>
                <form className='bg-[#F3F3F3] w-[75%] mx-auto my-8 py-14 px-14'>
                    <div className='w-full'>
                        <div className=''>
                            <label className='text-lg font-semibold text-[#444]' htmlFor="recipeName">Recipe Name*</label> <br />
                            <input name='recipeName' className='py-3 px-2 w-full bg-white rounded-md mt-2' type="text" placeholder='Recipe Name' required />
                        </div>
                    </div>
                    <div className='flex gap-4 mt-4'>
                        <div className='flex-1'>
                            <label className='text-lg font-semibold text-[#444]' htmlFor="category">Category*</label> <br />
                            <select className='w-full mt-2 py-3 px-2 bg-white rounded text-[#444] placeholder:text-[#444]' name="category" id="category">
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
                            <input name='price' className='py-3 px-2 w-full bg-white rounded-md mt-2' type="number" placeholder='Price' required />
                        </div>
                    </div>
                    <div>
                        <div className='mt-3'>
                            <label className='text-lg font-semibold text-[#444]' htmlFor="recipeDetails">Recipe Details*</label> <br />
                            <input name='recipeDetails' className='pt-3 pb-32 px-2 w-full bg-white rounded-md mt-2' type="text" placeholder='Recipe Details' required />
                        </div>
                    </div>

                    <div className='mt-3'>
                        <input 
                            type="file"
                        />
                    </div>

                    <div className='mt-5 flex justify-center items-center'>
                        <button type='submit' className='px-5 py-2 bg-[#B58130] border-2 border-[#B58130] text-white font-bold hover:bg-transparent hover:text-[#B58130] flex gap-2 justify-center items-center'>
                            <p>Add Item</p>
                            <ImSpoonKnife className='text-2xl' />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItems;