import React, {useState, useRef, useImperativeHandle, forwardRef} from 'react';
import styles from './styles.module.css';

const Input = forwardRef(({type, placeholder, typeMismatchMessage, ...rest}, ref) => {
    const [text, setText] = useState('');
    const input = useRef();
    const errorMessage = useRef();
    const errorTypeMessage = useRef();

    const handleChange = (e) => {
        errorMessage.current.style.display = '';
        input.current.style.borderBottom = '';
        errorTypeMessage.current.style.display = '';  
        setText(e.target.value);              
    }

    const handleBlur = (e) => {
        const isValid = e.target.checkValidity();
        const typeMismatch = e.target.validity.typeMismatch;

        if(typeMismatch){
            errorTypeMessage.current.style.display = 'block';
            input.current.style.borderBottom = '1px solid var(--error)';
        }
        else if(!isValid){
            errorMessage.current.style.display = 'block';
            input.current.style.borderBottom = '1px solid var(--error)';
        }
    }

    useImperativeHandle(ref, () => ({
        get state() {
            return text;
        }
    }))


    return(
        <fieldset className={styles.inputContainer}>
            <input 
                type={type}
                className={styles.input}
                value={text}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder={placeholder}
                ref={input}
                {...rest}
                required
            />
            <div className={styles.errorMessage} ref={errorMessage}>
                Can't be empty
            </div>
            <div className={styles.errorMessage} ref={errorTypeMessage}>
                {typeMismatchMessage}
            </div>
        </fieldset>
)
})

export default Input;