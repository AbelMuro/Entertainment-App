import React from 'react';
import SideBar from '../../Components/SideBar';
import {Outlet} from 'react-router-dom'
import styles from './styles.module.css';

function DisplayApp () {
    return(
        <main className={styles.container}>
            <SideBar/>
            <Outlet/>
        </main>
        )
}

export default DisplayApp;