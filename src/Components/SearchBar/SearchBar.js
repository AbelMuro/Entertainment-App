import React, {useState, useContext, useTransition} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './styles.module.css';
import searchIcon from './assets'
import {Context} from '../../Context';

function SearchBar() {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    const currentRoute = useLocation();
    const {dispatchSearch} = useContext(Context);
    const [isPending, startTransition] = useTransition();

    const handleQuery = (e) => {
        setQuery(e.target.value);
        if(currentRoute.pathname !== '/user/search')
            navigate('/user/search');
        startTransition(() => {
            dispatchSearch({type: 'set query', query: e.target.value})
        })
    }


    return(
        <fieldset className={styles.inputContainer}>
            <input 
                type='text' 
                className={styles.searchBar} 
                value={query}
                onChange={handleQuery}
                placeholder='Search for movies or TV series'/>   
            <img src={searchIcon} className={styles.searchIcon}/>         
        </fieldset>

    )
}

export default SearchBar;