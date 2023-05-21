import React, {useState, useRef} from 'react';
import styles from './styles.module.css';
import assets from '../../Common/Assets';
import Input from '../../Components/Input';
import {useNavigate} from 'react-router-dom';
import {auth} from '../../Firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import CircularProgress from '@mui/material/CircularProgress';

function Register() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const email = useRef();
    const password = useRef();
    const confirmPassword = useRef();

    const handleNavigate = () => {
        navigate('/');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userEmail = email.current.state;
        const userPassword = password.current.state;
        const userConfirmPassword = confirmPassword.current.state;

        if(userPassword !== userConfirmPassword){
            alert("Passwords don't match");
            return;
        }
        try{
           setLoading(true);
           await createUserWithEmailAndPassword(auth, userEmail, userPassword); 
           setLoading(false)
           navigate('/', {state: true});
        }
        catch(error){
            console.log(error);
        }
    }

    return(
        <main className={styles.container}>
            <img src={assets['logo']} className={styles.container_icon}/>

            <form className={styles.inputContainer} onSubmit={handleSubmit}>
                <h1 className={styles.inputContainer_title}>
                    Sign Up
                </h1>
                <Input type='email' placeholder='Email' typeMismatchMessage='Invalid email' ref={email}/>              
                <Input type='password' placeholder='Password' ref={password}/>     
                <Input type='password' placeholder='Repeat password' ref={confirmPassword}/>  
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

        </main>
    )
}

export default Register;