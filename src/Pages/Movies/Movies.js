import React from 'react';
import styles from './styles.module.css';
import movies from '../../Data/AllMoviesAndTVseries';
import DisplayMovie from '../../Components/DisplayMovie';

function Movies() {
    return(
        <>
            <h1 className={styles.title}>
                Movies
            </h1>
            <div className={styles.allMovies}>
                {movies.map((movie) => {
                    if(movie['type'] !== 'Movie')
                        return;

                    return(
                        <DisplayMovie movie={movie} key={movie['name']}/>
                    )
                })}
            </div>
        </>
    )
}

export default Movies;