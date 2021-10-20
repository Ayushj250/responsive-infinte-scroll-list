import React, { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Input from '../components/Input';

import * as paths from '../constants/paths';
import { load, toggleLogin } from '../store/actions/userLogin';
import './Login.css';

function Login(props) {
    const userLogin = useSelector(state => state.userLogin);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const dispatchAction = useDispatch();

    useEffect(()=>{
        dispatchAction(load());
    },[dispatchAction]);

    useEffect(() => {
        if (userLogin.isLoggedIn) {
            props.history.push(paths.HOME);
        }
    }, [userLogin, props]);

    const handleOnClick = (e) => {
        if (username === 'foo' && password === 'bar') {
            setError('');
            dispatchAction(toggleLogin());
        } else {
            setError("Please enter a valid username and password");
            setTimeout(()=> setError(''),5000);
        }
    }

    return (
        <div className='container'>
            <div className='loginForm'>
                <Input
                    label='Username'
                    type='text'
                    value={username}
                    onChange={setUsername}
                    placeholder='Username'
                />
                <Input
                    label='Password'
                    type='password'
                    value={password}
                    onChange={setPassword}
                    placeholder="Password"
                />
                {error ? <span className='error'>{error}</span> : ''}
                <button className="btn" onClick={handleOnClick}>Log in</button>
            </div>
        </div>
    )
}

export default withRouter(Login);
