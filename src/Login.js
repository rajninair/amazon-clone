

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import amazonLogo from './assets/amazon_white_bg.png';
import { auth } from "./firebase";

import './login.css';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then((response) => {
                navigate('/')
                sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
            })
            .catch(error => alert(error.message))

    }
    const register = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then((auth) => {
                console.log("auth", auth)
                if (auth) {
                    navigate('/')
                }
            }
            )
            .catch(error => alert(error.message))
    }

    createUserWithEmailAndPassword(auth, email, password).then((i) => console.log(i))



    return (
        <div className='login'>
            <Link to='/'>
                <img className='login__logo' src={amazonLogo} alt="Amazon logo" />
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button type="submit" className='login__signInButton' onClick={signIn}>Sign In</button>
                </form>

                <p>
                    By signin-in you agree to the AMAZON FAKE CLONE Condition of Use  Sale. Please see our Privacy Notice, our Cookies Notice and our Interest Bsed Ads Notice
                </p>

                <button className='login__registerButton' onClick={register}>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login