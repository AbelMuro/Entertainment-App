import React from 'react';
import styles from './styles.module.css';
import searchIcon from './assets'

//this is where i left off, i will need to style the input when its focused
function SearchBar() {
    return(
        <fieldset className={styles.inputContainer}>
            <input type='text' className={styles.searchBar} placeholder='Search for movies or TV series'/>   
            <img src={searchIcon} className={styles.searchIcon}/>         
        </fieldset>

    )
}

export default SearchBar;