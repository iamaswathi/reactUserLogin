import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginStart, loginSuccess, loginFailure } from '../redux/authSlice';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch;
    const { status, error } = useSelector((state) => state.auth)

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(loginStart());
        try {
            const user = {username, details: 'Some user details'};
            dispatch(loginSuccess(user));
        } catch {
            dispatch(loginFailure('Login Failed.'));
        }
    };

    return (

        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Username: </label>
                    <input type='text' value= {username} onChange={(e)=>setUsername(e.target.value)} />
                </div>
                <div>
                    <label>Password: </label>
                    <input type='password' value= {password} onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <button type='submit' disable={status === 'loading'}>{status === 'loading' ? 'Logging in..' : 'Login'}</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
};

export default Login;