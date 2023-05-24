import React, {useState, useEffect} from 'react';
import styles from './styles.module.css';
import assets from '../../Common/icons';
import useMediaQuery from '../../Hooks/useMediaQuery';
import { signOut } from 'firebase/auth';
import {auth} from '../../Firebase';
import { useNavigate } from 'react-router-dom';


function Sidebar() {
    const navigate = useNavigate();
    const mobile = useMediaQuery('(max-width: 768px)');
    const [navLink, setNavLink] = useState('home');

    const handleNavLink = (e) => {
        if(!e.target.matches('.' + styles.sidebar_link)) 
           return

        const currentNavLink = e.target.id;
        setNavLink(currentNavLink);
    }

    const handleSignOut = async () => {
        await signOut(auth);
        navigate('/')
    }

    useEffect(() => {
        const allNavLinks = document.querySelectorAll('.' + styles.sidebar_link)
        Array.from(allNavLinks).map((currentNavLink) => {
            currentNavLink.style.backgroundColor = '';
        })
    }, [navLink])

    useEffect(() => {
        const allNavLinks = document.querySelectorAll('.' + styles.sidebar_link)
        Array.from(allNavLinks).map((currentNavLink) => {
            if(currentNavLink.id === navLink)
                currentNavLink.style.backgroundColor = 'white';
        })
        
    }, [navLink])

    useEffect(() => {
        navigate(`/${navLink}`);
    }, [navLink])


    return (
        <aside className={styles.sidebar}>
            {
                mobile ? 
                <>
                    <img src={assets['logo']} className={styles.sidebar_logo} alt={'company logo'}/>
                    <ul className={styles.sidebar_links} onClick={handleNavLink}>
                        <li className={styles.sidebar_link} id='home'></li>          
                        <li className={styles.sidebar_link} id='movies'></li>
                        <li className={styles.sidebar_link} id='tvseries'></li>
                        <li className={styles.sidebar_link} id='bookmarks'></li>
                    </ul>
                </>
                :    
                <div className={styles.sidebar_icons}>
                    <img src={assets['logo']} className={styles.sidebar_logo} alt={'company logo'}/>
                    <ul className={styles.sidebar_links} onClick={handleNavLink}>
                        <li className={styles.sidebar_link} id='home'></li>          
                        <li className={styles.sidebar_link} id='movies'></li>
                        <li className={styles.sidebar_link} id='tvseries'></li>
                        <li className={styles.sidebar_link} id='bookmarks'></li>
                    </ul>
                </div>}
            <img 
                src={assets['imageAvatar']} 
                onClick={handleSignOut}
                className={styles.userImage} 
                alt={'user profile image'}/>
        </aside>
    )



}

export default Sidebar;