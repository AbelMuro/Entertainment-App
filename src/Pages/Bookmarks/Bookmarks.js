import React, {useState, useContext} from 'react';
import styles from './styles.module.css';
import { Context } from '../../Context';
import MoviesAndTVSeries from '../../Data/AllMoviesAndTVseries';
import DisplayMovie from '../../Components/DisplayMovie';


function Bookmarks() {
    const {bookmarks} = useContext(Context);

    return (    
        <div>
            <section className={styles.moviesContainer}>
                <h1 className={styles.title}>
                    Bookmarked Movies
                </h1>
                <div className={styles.allMovies}>
                    {MoviesAndTVSeries.map((movie) => {
                        const movieName = movie['name'];
                        const movieType = movie['type'];

                        if(bookmarks.includes(movieName) && movieType === 'Movie')
                            return(
                                <DisplayMovie movie={movie} key={movieName} removeBookmark={true}/>   /* removeBookmark prop is used to determine which event handler to use for the bookmark button on the top right corner*/
                            )
                    })                
                    }
                    <div className={styles.message}>
                        No Bookmarked Movies
                    </div>
                </div>
            </section>     
            <section className={styles.tvSeriesContainer}>
                <h1 className={styles.title}>
                    Bookmarked TV Series
                </h1>
                <div className={styles.allMovies}>
                    {MoviesAndTVSeries.map((tvSeries) => {
                        const seriesName = tvSeries['name'];
                        const seriesType = tvSeries['type'];

                        if(bookmarks.includes(seriesName) && seriesType === 'TV Series')
                            return(
                                <DisplayMovie movie={tvSeries} key={seriesName} removeBookmark={true}/> /* removeBookmark prop is used to determine which event handler to use for the bookmark button on the top right corner*/
                            )
                    })}
                </div>
            </section>     
        </div>  

    )
}

export default Bookmarks;