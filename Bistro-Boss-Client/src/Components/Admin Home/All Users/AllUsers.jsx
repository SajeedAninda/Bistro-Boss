import React, { useEffect, useState } from 'react';
import SectionHeader from '../../Shared/Section Header/SectionHeader';
import Admins from './Admins';
import Users from './Users';

const AllUsers = () => {
    return (
        <div className='w-[80%] bg-[#F6F6F6] pb-12'>
            <SectionHeader primaryText={"MANAGE ALL USERS"} seconddaryText={"---How many??---"} />

            {/* FOR ADMINS  */}
            <Admins></Admins>

            {/* FOR USERS  */}
            <Users></Users>
        </div>
    );
};

export default AllUsers;