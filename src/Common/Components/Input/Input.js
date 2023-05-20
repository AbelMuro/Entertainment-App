import React, {useState, useImperativeHandle, forwardRef} from 'react';
import styles from './styles.module.css';

const Input = forwardRef(({type, placeholder}, ref) => {
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    }

    useImperativeHandle(ref, () => ({
        get state() {
            return text;
        }
    }))


    return(
        <input 
            type={type}
            className={styles.input}
            value={text}
            onChange={handleChange}
            placeholder={placeholder}

        />)
})

export default Input;