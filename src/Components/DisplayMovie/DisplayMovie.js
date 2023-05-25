import React, {useCallback, useContext} from 'react';
import styles from './styles.module.css';
import assets from '../../Common/icons';
import useMediaQuery from '../../Hooks/useMediaQuery';
import {Context} from '../../Context';

function DisplayMovie({movie}) {
    const {dispatchBookmarks} = useContext(Context);
    const tablet = useMediaQuery('(max-width: 768px)');
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

    const handleBookmark = (e) => {
        const movie = e.target.getAttribute('data-name');
        console.log(movie);
        dispatchBookmarks({type: 'add bookmark', bookmark: movie});

    }

    const changeMovieImage = useCallback((movie) => {
        if(mobile)
            return movie['small image'];
        else if(tablet)
            return movie['medium image'];
        else
            return movie['large image'];
            
    },[tablet, mobile])

    return (                           

        <div className={styles.movie} key={movie['name']}>

            <img src={changeMovieImage(movie)} className={styles.movie_image}/> 
            <div className={styles.overlay}
            >
                <div className={styles.movie_play}>
                    <img src={assets['playIcon']} className={styles.movie_playIcon}/>
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
            <div className={styles.movie_bookmark} onClick={handleBookmark} data-name={movie['name']}>
                <div className={styles.movie_bookmarkIcon}></div>
            </div>
        </div>
    )
}

export default DisplayMovie;