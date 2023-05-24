import React, {useState, useEffect, useRef, memo} from 'react';
import styles from './styles.module.css';
import {useNavigate} from 'react-router-dom';


function Dialog({openDialog}) {
    const [open, setOpen] = useState(false);  
    const navigate = useNavigate();
    const overlay = useRef();
    const dialog = useRef();
    
    const handleDialog = () => {
        setOpen(false);
        navigate('/');
    }

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
        if(openDialog)
            setOpen(openDialog)
    }, [openDialog])

    return (            
        <div className={styles.overlay} ref={overlay}>
            <dialog open={open} className={styles.dialog} ref={dialog}>
                Account has been created. Please log in
                <button onClick={handleDialog} className={styles.dialogButton}>
                    OK
                </button>
            </dialog>
        </div>
    )
}

export default memo(Dialog);