import React, {useRef} from 'react';
import styles from './styles.module.css';
import assets from '../../Common/Assets';
import Input from '../../Common/Components/Input';

function Login() {
    const email = useRef();
    const password = useRef();

    return(
        <main className={styles.loginContainer}>
            <img src={assets['logo']} className={styles.logo}/>
            <form className={styles.loginBox}>
                <h1 className={styles.loginBox_title}>
                    Login
                </h1>
                <Input type='email' placeholder='Email address' ref={email}/>
                <Input type='password' placeholder='Password' ref={password}/>
                <input type='submit' value={'Login to your account'}className={styles.loginBox_submit}/>
                <p className={styles.loginBox_createAccount}>
                    Don't have an account?&nbsp;
                    <a>Sign Up</a>
                </p>
            </form>
        </main>
    )
}

export default Login;