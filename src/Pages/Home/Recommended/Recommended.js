import React from 'react';
import styles from './styles.module.css';
import AllMoviesAndTVseries from '../../../Data/AllMoviesAndTVseries';
import DisplayMovie from  '../../../Components/DisplayMovie';

function Recommended() {

    return(
        <>
            <h1 className={styles.title}>
                Recommended for you
            </h1>
            <section className={styles.allMovies}>
                {AllMoviesAndTVseries.map((movie) => {
                    if(movie.isTrending)
                        return;
                    else
                        return (
                            <DisplayMovie movie={movie} key={movie['name']}/>
                        )
                })}
            </section>        
        </>

    )
}

export default Recommended;