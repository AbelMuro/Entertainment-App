import React from 'react';
import styles from './styles.module.css';
import TrendingMovies from '../../../Data/AllMoviesAndTVseries';
import icons from '../../../Common/icons';
import useMediaQuery from '../../../Hooks/useMediaQuery';

function Trending() {
    const mobile = useMediaQuery('(max-width: 600px)');

    const handleEnter = (e) => {
        const overlay = e.target;
        const playButton = overlay.firstElementChild;
        overlay.style.opacity = '1';
        playButton.style.opacity = '1';
    }

    const handleLeave = (e) => {
        const overlay = e.target;
        const playButton = overlay.firstElementChild;
        overlay.style.opacity = '';
        playButton.style.opacity = '';
    }

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
                            <img 
                                src={mobile ? movie['small image trending'] : movie["large image trending"]} 
                                className={styles.movie_image}
                                />   
                            <div className={styles.overlay}
                                 onMouseEnter={handleEnter}
                                 onMouseLeave={handleLeave}
                                 >
                                <div className={styles.movie_play}>
                                    <img src={icons['playIcon']} className={styles.movie_playIcon}/>
                                    Play
                                </div>  
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