import React, {useContext, useEffect, useRef} from 'react';
import styles from './styles.module.css';
import {Context} from '../../Context';

function DialogBookmark() {
    const {openBookmarkDialog, setOpenBookmarkDialog} = useContext(Context);
    const dialog = useRef();

    useEffect(() => {
        if(openBookmarkDialog.open){
            setTimeout(() => {
                dialog.current.style.top = '10px';
            }, 10)
            setTimeout(() => {
                dialog.current.style.top = '';
            }, 1000)   
            setTimeout(() => {
                setOpenBookmarkDialog({open: false, dialog: ''});
            }, 1200)         
        }

    }, [openBookmarkDialog.open])

    useEffect(() => {
        if(openBookmarkDialog.dialog === 'add')
            dialog.current.style.backgroundColor = 'blue';
        
        else 
            dialog.current.style.backgroundColor = 'red';

    })

    return(   
        <dialog open={openBookmarkDialog.open} className={styles.dialog} ref={dialog}>
            {openBookmarkDialog.dialog === 'add' ? 'Successfully added to bookmarks!' : 'Successfully removed from bookmarks!'}
        </dialog>
    )
}

export default DialogBookmark;