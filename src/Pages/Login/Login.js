import React, {useState, useRef, useEffect} from 'react';
import styles from './styles.module.css';
import assets from '../../Common/Assets';
import Input from '../../Components/Input';
import {useNavigate, useLocation} from 'react-router-dom';
import {auth} from '../../Firebase';
import {signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';
import CircularProgress from '@mui/material/CircularProgress';

function Login() {
    const [open, setOpen] = useState(false);  
    const [loading, setLoading] = useState(false); 
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    const cameFromRegisterPage = useLocation();
    const email = useRef();
    const password = useRef();
    const overlay = useRef();
    const dialog = useRef();

    const handleClick = () => {
        navigate('/register');
    }

    const handleDialog = () => {
        setOpen(false);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userEmail = email.current.state;
        const userPassword = password.current.state;

        try{
            setLoading(true)
            await signInWithEmailAndPassword(auth, userEmail, userPassword);
            setLoading(false);
            navigate('/home');
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        if(cameFromRegisterPage)
            setOpen(true);
    }, [])

    useEffect(() => {
        if(open){
            overlay.current.style.display = 'block';
            setTimeout(() => {
                dialog.current.style.opacity = '1';
                overlay.current.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
            }, 100)
        }    
        else{
            overlay.current.style.backgroundColor = '';
            dialog.current.style.opacity = '';
            setTimeout(() => {
                overlay.current.style.display = '';
            }, 200)            
        }

    }, [open])


    useEffect(() => {
        if(isLoggedIn)
            navigate('/home');
    }, [isLoggedIn])


    onAuthStateChanged(auth, (user) => {
        if(user)
            setIsLoggedIn(true);
    })


    return(
        <main className={styles.loginContainer}>
            <img src={assets['logo']} className={styles.logo}/>
            <form className={styles.loginBox} onSubmit={handleSubmit}>
                <h1 className={styles.loginBox_title}>
                    Login
                </h1>
                <Input type='email' placeholder='Email address' typeMismatchMessage='Invalid email' ref={email}/>
                <Input type='password' placeholder='Password' ref={password}/>
                <button type='submit' value={'Login to your account'}className={styles.loginBox_submit}>
                    {loading ? <CircularProgress size={'30px'}/> : 'Login to your account'}
                </button>
                <p className={styles.loginBox_createAccount}>
                    Don't have an account?&nbsp;
                    <a onClick={handleClick}>Sign Up</a>
                </p>
            </form>
            <div className={styles.overlay} ref={overlay}>
                <dialog open={open} className={styles.dialog} ref={dialog}>
                    Account has been created. Please log in
                    <button onClick={handleDialog} className={styles.dialogButton}>
                        OK
                    </button>
                </dialog>
            </div>

        </main>
    )
}

export default Login;