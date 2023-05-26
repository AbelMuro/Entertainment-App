import React from 'react';
import styles from './styles.module.css';
import DisplayMovie from '../../Components/DisplayMovie';
import movies from '../../Data/AllMoviesAndTVseries';

function TVSeries() {
    return(        
        <>
            <h1 className={styles.title}>
                TV Series
            </h1>
            <div className={styles.allMovies}>
                {movies.map((movie) => {
                    if(movie['type'] !== 'TV Series')
                        return;

                    return(
                        <DisplayMovie movie={movie} key={movie['name']}/>
                    )
                })}
            </div>
        </>
    )
}

export default TVSeries;