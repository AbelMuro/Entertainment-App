import React from 'react';
import SearchBar from './SearchBar';
import Trending from './Trending';
import Recommended from './Recommended';
import styles from './styles.module.css'

function Home() {
    return(
            <section className={styles.content}>
                <SearchBar/>
                <Trending/>
                <Recommended/>
            </section>
        )
}

export default Home;