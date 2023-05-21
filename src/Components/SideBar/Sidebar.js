import React from 'react';
import styles from './styles.module.css';
import assets from '../../Common/Assets';

function Sidebar() {

    return (
        <aside className={styles.sidebar}>
            <div className={styles.sidebar_icons}>
                <img src={assets['logo']} className={styles.sidebar_logo} alt={'company logo'}/>
      
                <ul className={styles.sidebar_links}>
                    <li className={styles.sidebar_link}></li>          
                    <li className={styles.sidebar_link}></li>
                    <li className={styles.sidebar_link}></li>
                    <li className={styles.sidebar_link}></li>
                </ul>
            </div>
            <img src={assets['imageAvatar']} className={styles.userImage} alt={'user profile image'}/>
            
        </aside>
    )



}

export default Sidebar;