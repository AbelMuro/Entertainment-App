import React, {useState, useRef, useEffect} from 'react';
import styles from './styles.module.css';
import assets from '../../Common/icons';
import Input from '../../Components/Input';
import {useNavigate} from 'react-router-dom';
import {auth} from '../../Firebase';
import {signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';
import CircularProgress from '@mui/material/CircularProgress';


function Login() {
    const [loading, setLoading] = useState(false); 
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    const email = useRef();
    const password = useRef();
    const submitButton = useRef();
    const errorMessage = useRef();

    const handleClick = () => {
        navigate('/register');
    }

    const handleSkipLogin = () => {
        navigate('/user');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        errorMessage.current.style.display = '';
        submitButton.current.style.marginTop = '';
        const userEmail = email.current.state;
        const userPassword = password.current.state;

        try{
            setLoading(true)
            await signInWithEmailAndPassword(auth, userEmail, userPassword);
            setLoading(false);
            navigate('/user');
        }
        catch(error){
            setLoading(false);
            errorMessage.current.style.display = 'block';
            submitButton.current.style.marginTop = '0px';
        }
    }


    useEffect(() => {
        if(isLoggedIn)
            navigate('/user');
    }, [isLoggedIn])


    onAuthStateChanged(auth, (user) => {
        if(user)
            setIsLoggedIn(true);
    })


    return(
        <div className={styles.loginContainer}>
            <img src={assets['logo']} className={styles.logo}/>
            <form className={styles.loginBox} onSubmit={handleSubmit}>
                <a className={styles.skipLogin} onClick={handleSkipLogin}>
                    Skip Login
                </a>
                <h1 className={styles.loginBox_title}>
                    Login
                </h1>
                <Input type='email' placeholder='Email address' typeMismatchMessage='Invalid email' ref={email}/>
                <Input type='password' placeholder='Password' ref={password}/>
                <div className={styles.errorMessage} ref={errorMessage}>Invalid Email or Password</div>
                <button type='submit' value={'Login to your account'}className={styles.loginBox_submit} ref={submitButton}>
                    {loading ? <CircularProgress size='30px'/> : 'Login to your account'}
                </button>
                <p className={styles.loginBox_createAccount}>
                    Don't have an account?&nbsp;
                    <a onClick={handleClick}>Sign Up</a>
                </p>
            </form>
        </div>
    )
}

export default Login;