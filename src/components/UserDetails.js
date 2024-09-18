import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/authSlice';

const UserDetails = () => {
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();

    if(!user) {
        return <p>Please Login to see user details.</p>
    }
    return (
        <div>
            <h2>User Details</h2>
            <p>Username: {user.username}</p>
            <p>Details: {user.details}</p>
            <button onClick={()=>dispatch(logout())}></button>
        </div>

    );
};

export default UserDetails;