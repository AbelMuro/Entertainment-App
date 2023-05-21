import React from 'react';
import Sidebar from '../../Components/SideBar';
import SearchBar from './SearchBar';
import styles from './styles.module.css'

function Home() {
    return(
            <main className={styles.container}>
                <Sidebar/>
                <section className={styles.content}>
                    <SearchBar/>
                </section>
            </main>
        )
}

export default Home;