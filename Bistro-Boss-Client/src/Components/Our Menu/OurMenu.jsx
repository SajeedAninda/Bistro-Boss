import React from 'react';
import featured from "../../assets/home/featured.jpg"
import "./menu.css"

const OurMenu = () => {
    const currentDate = new Date();
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const month = monthNames[currentDate.getMonth()];
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();

    const formattedDate = `${month} ${day}, ${year}`;
    console.log(formattedDate);


    return (
        <div className='bg'>

            <div className='py-12 textDiv'>
                <div className='pt-12 pb-6 w-[40%] mx-auto text-center z-50'>
                    <h3 className='text-[#D99904] pb-2'><em>---Check it out---</em></h3>
                    <h2 className='text-3xl py-2 text-white border-y-2 border-white'>FROM OUR MENU</h2>
                </div>
                <div className='flex w-[70%] mx-auto justify-center items-center gap-10 z-50'>
                    <img className='w-[400px]' src={featured} alt="" />
                    <div>
                        <h3 className='text-white space-y-2'>
                            {formattedDate} <br />
                            WHERE CAN I GET SOME? <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurMenu;
