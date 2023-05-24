import React from 'react';
import styles from './styles.module.css';
import TrendingMovies from '../../../Data/AllMoviesAndTVseries';
import icons from '../../../Common/icons';
import useMediaQuery from '../../../Hooks/useMediaQuery';


function Trending() {
    const mobile = useMediaQuery('(max-width: 600px)');

    return(
        <>
            <h1 className={styles.title}>
                Trending
            </h1>
            <section className={styles.trendingMovies}>
                {TrendingMovies.map((movie) => {
                    if(!movie.isTrending) return; 

                    return(
                        <div className={styles.movie} key={movie['name']}>
                            <div className={styles.overflow}>
                                <img 
                                    src={mobile ? movie['small image trending'] : movie["large image trending"]} 
                                    className={styles.movie_image}/>                                
                            </div>

                            <div className={styles.movie_data}>
                                <p className={styles.movie_year}>
                                    {movie['year']}
                                </p>
                                <div className={styles.dot}></div>
                                <div className={styles.movie_type}>
                                    <img 
                                        src={movie['type'] === 'Movie' ? icons['movieIcon'] : icons['tvIcon']} 
                                        className={styles.movie_icon}
                                    />
                                    {movie['type']}
                                </div>
                                {mobile ? <></> : <div className={styles.dot}></div>}
                                <div className={styles.movie_contentRating}>
                                    {movie['content rating']}
                                </div>
                                <h2 className={styles.movie_title}>
                                    {movie['name']}
                                </h2>
                            </div>
                            <div className={styles.movie_bookmark}>
                                <div className={styles.bookmarkIcon}></div>
                            </div>
                        </div>
                    )
                })}  
         </section>               

        </>


    )
}

export default Trending;