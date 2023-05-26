import React, {useContext, useState, useEffect} from 'react';
import styles from './styles.module.css';
import {Context} from '../../Context';
import AllMoviesAndTVseries from '../../Data/AllMoviesAndTVseries';
import DisplayMovie from '../../Components/DisplayMovie';

function Search() {
    const [query, setQuery] = useState([])
    const {search} = useContext(Context);

    useEffect(() => {
        const allQueryResults = []

        AllMoviesAndTVseries.forEach((currentMovie) => {
            const currentMovieName = currentMovie.name.toLowerCase();

            if(currentMovieName.includes(search.toLowerCase()) && search)
                allQueryResults.push(currentMovie)
        })

        setQuery(allQueryResults);
    }, [search])

    return (
        <>
            <h1 className={styles.title}>
                {`Found ${query.length} results for '${search}'`}
            </h1>
            <div className={styles.grid}>
                {query.map((currentMovie) => {
                    const currentMovieName = currentMovie.name.toLowerCase();

                    if(currentMovieName.includes(search.toLowerCase()))
                        return (<DisplayMovie movie={currentMovie} key={currentMovie['name']}/>)
                })}
            </div>        
        </>

    )
}

export default Search;