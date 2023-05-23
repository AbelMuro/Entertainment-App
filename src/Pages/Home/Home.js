import React from 'react';
import Sidebar from '../../Components/SideBar';
import SearchBar from './SearchBar';
import Trending from './Trending';
import Recommended from './Recommended';
import styles from './styles.module.css'

function Home() {
    return(
            <main className={styles.container}>
                <Sidebar/>
                <section className={styles.content}>
                    <SearchBar/>
                    <Trending/>
                    <Recommended/>
                </section>
            </main>
        )
}

export default Home;