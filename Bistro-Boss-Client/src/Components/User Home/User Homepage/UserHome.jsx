import React from 'react';
import UserHomeSidebar from './UserHomeSidebar';
import { Outlet } from 'react-router-dom';

const UserHome = () => {
    return (
        <div className='flex'>
            <UserHomeSidebar></UserHomeSidebar>
            <Outlet></Outlet>
        </div>
    );
};

export default UserHome;