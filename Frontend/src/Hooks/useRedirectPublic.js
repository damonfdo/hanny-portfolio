import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import useAuth from './useAuth';

const useRedirectPublic = () => {
    const navigate = useNavigate();
    const auth = useAuth();

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (!loggedInUser) {

            return navigate('/app');
        }
    }, [auth]);
};

export default useRedirectPublic;