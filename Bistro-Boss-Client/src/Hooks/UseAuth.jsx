import React, { useContext } from 'react';
import { AuthContext } from '../Components/Authentication/AuthenticationProvider';

const UseAuth = () => {
    let auth = useContext(AuthContext)
    return auth;
};

export default UseAuth;