import React from 'react';
import AdminHomeSidebar from './AdminHomeSidebar';
import { Outlet } from 'react-router-dom';

const AdminHome = () => {
    return (
        <div className='flex'>
            <AdminHomeSidebar></AdminHomeSidebar>
            <Outlet></Outlet>
        </div>
    );
};

export default AdminHome;