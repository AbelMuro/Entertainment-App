import React from 'react';
import styles from './styles.module.css';
import AllMoviesAndTVseries from '../../../Data/AllMoviesAndTVseries';
import assets from '../../../Common/icons'

///this is where i left off, i will need to style the movies below

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
                        return(
                            <div className={styles.movie}>
                                <img src={movie['large image']} className={styles.movie_image}/>
                                <div className={styles.movie_data}>
                                    <p className={styles.movie_year}>
                                        {movie['year']}
                                    </p>
                                    <div className={styles.dot}></div>
                                    <div className={styles.movie_type}>
                                        <img 
                                            src={movie['type'] === 'Movie' ? assets['movieIcon'] : assets['tvIcon']} 
                                            className={styles.movie_icon}/>
                                        {movie['type']}
                                    </div>
                                    <div className={styles.movie_contentRating}>
                                        {movie['content rating']}
                                    </div>
                                    <div className={styles.movie_title}>
                                        {movie['name']}
                                    </div>
                                </div>
                            </div>
                        )
                })}
            </section>        
        </>

    )
}

export default Recommended;