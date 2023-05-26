import React, {useState, useRef} from 'react';
import styles from './styles.module.css';
import assets from '../../Common/icons';
import Input from '../../Components/Input';
import {useNavigate} from 'react-router-dom';
import {auth} from '../../Firebase';
import {createUserWithEmailAndPassword, signOut} from 'firebase/auth';
import CircularProgress from '@mui/material/CircularProgress';
import Dialog from './Dialog';

function Register() {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const email = useRef();
    const password = useRef();
    const confirmPassword = useRef();
    const passwordErrorMessage = useRef();
    const invalidEmailMessage = useRef();

    const handleNavigate = () => {
        navigate('/');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userEmail = email.current.state;
        const userPassword = password.current.state;
        const userConfirmPassword = confirmPassword.current.state;

        invalidEmailMessage.current.style.display = '';

        if(userPassword !== userConfirmPassword){
            passwordErrorMessage.current.style.display = 'block'
            return;
        }
        try{
           passwordErrorMessage.current.style.display = ''
           setLoading(true);
           await createUserWithEmailAndPassword(auth, userEmail, userPassword); 
           await signOut(auth);
           setLoading(false);           
           setOpen(true)                    //this will open the dialog that displays a message to the user
        }
        catch(error){
            setLoading(false);
            invalidEmailMessage.current.style.display = 'block';
        }
    }

    return(
        <section className={styles.container}>
            <img src={assets['logo']} className={styles.container_icon}/>

            <form className={styles.inputContainer} onSubmit={handleSubmit}>
                <h1 className={styles.inputContainer_title}>
                    Sign Up
                </h1>
                <Input type='email' placeholder='Email' typeMismatchMessage='Invalid email' ref={email}/>              
                <Input type='password' placeholder='Password' ref={password}/>     
                <Input type='password' placeholder='Repeat password' ref={confirmPassword}/>  
                <div className={styles.errorMessage} ref={passwordErrorMessage}>
                    Passwords don't match
                </div>
                <div className={styles.errorMessage} ref={invalidEmailMessage}>
                    Email is already registered
                </div>
                <button className={styles.inputContainer_submit}>
                    {loading ? <CircularProgress size={'30px'}/> : 'Create an account'}
                </button>
                <p className={styles.inputContainer_login}>
                    Already have an account?&nbsp;
                    <a className={styles.loginLink} onClick={handleNavigate}>
                        Login
                    </a>
                </p>
            </form>
            <Dialog openDialog={open}/>
        </section>
    )
}

export default Register;