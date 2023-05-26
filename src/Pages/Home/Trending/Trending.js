import React, {useContext} from 'react';
import styles from './styles.module.css';
import TrendingMovies from '../../../Data/AllMoviesAndTVseries';
import icons from '../../../Common/icons';
import useMediaQuery from '../../../Hooks/useMediaQuery';
import {Context} from '../../../Context';

function Trending() {
    const mobile = useMediaQuery('(max-width: 600px)');
    const {setOpenBookmarkDialog, dispatchBookmarks} = useContext(Context);

    const handleBookmark = (e) => {
        const movieName = e.target.getAttribute('data-name');
        dispatchBookmarks({type: 'add bookmark', bookmark: movieName});
        setOpenBookmarkDialog({open: true, dialog: 'add'});
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
                            <div className={styles.overlay}>
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
                            <div className={styles.movie_bookmark} onClick={handleBookmark} data-name={movie['name']}>
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