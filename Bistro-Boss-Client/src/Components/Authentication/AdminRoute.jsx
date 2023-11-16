import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner';
import UseAuth from '../../Hooks/UseAuth';
import useAdmin from '../../Hooks/useAdmin';

const AdminRoute = ({ children }) => {
    let { loggedInUser, loading } = UseAuth();
    let [admin, isAdminLoading] = useAdmin();
    let location = useLocation();
    if (loading || isAdminLoading) {
        return <div className='flex justify-center min-h-screen items-center'>
            <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
        </div>
    }
    if (admin && loggedInUser) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default AdminRoute;