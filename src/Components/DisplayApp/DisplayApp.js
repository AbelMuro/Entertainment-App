import React from 'react';
import SideBar from '../../Components/SideBar';
import {Outlet} from 'react-router-dom'
import styles from './styles.module.css';
import DialogBookmark from '../DialogBookmark';
import SearchBar from '../../Components/SearchBar';

function DisplayApp () {
    return(
        <>
            <DialogBookmark/>           
            <main className={styles.grid}>
                <SideBar/>
                <section className={styles.innerContainer}>
                    <SearchBar/>
                    <Outlet/>
                </section>
            </main>   
        </>

        )
}

export default DisplayApp;