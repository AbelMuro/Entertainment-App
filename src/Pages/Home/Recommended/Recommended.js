import React, {useCallback} from 'react';
import styles from './styles.module.css';
import AllMoviesAndTVseries from '../../../Data/AllMoviesAndTVseries';
import assets from '../../../Common/icons';
import useMediaQuery from '../../../Hooks/useMediaQuery';

///this is where i left off, i will need to style the movies below

function Recommended() {
    const tablet = useMediaQuery('(max-width: 768px)');
    const mobile = useMediaQuery('(max-width: 600px)');

    const changeMovieImage = useCallback((movie) => {
        
        if(mobile)
            return movie['small image'];
        else if(tablet)
            return movie['medium image'];
        else
            return movie['large image'];
            
    },[tablet, mobile])

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
                            <div className={styles.movie} key={movie['name']}>
                                <div className={styles.overflow}>
                                    <img src={changeMovieImage(movie)} 
                                    className={styles.movie_image}/>                                    
                                </div>
                                <div className={styles.movie_data}>
                                    <p className={styles.movie_year}>
                                        {movie['year']}
                                    </p>
                                    <div className={styles.dot}></div>
                                    <div className={styles.movie_type}>
                                        <img 
                                            src={movie['type'] === 'Movie' ? assets['movieCategoryIcon'] : assets['tvSeriesCategoryIcon']} 
                                            className={styles.movie_icon}/>
                                        {movie['type']}
                                    </div>
                                    <div className={styles.dot}></div>
                                    <div className={styles.movie_contentRating}>
                                        {movie['content rating']}
                                    </div>
                                    <div className={styles.movie_title}>
                                        {movie['name']}
                                    </div>
                                </div>
                                <div className={styles.movie_bookmark}>
                                    <div className={styles.movie_bookmarkIcon}></div>
                                </div>
                            </div>
                        )
                })}
            </section>        
        </>

    )
}

export default Recommended;