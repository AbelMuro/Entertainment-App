import React, {useRef, useCallback, useContext} from 'react';
import styles from './styles.module.css';
import assets from '../../Common/icons';
import useMediaQuery from '../../Hooks/useMediaQuery';
import {Context} from '../../Context';

function DisplayMovie({movie, removeBookmark}) {
    const {dispatchBookmarks, setOpenBookmarkDialog} = useContext(Context);
    const image = useRef();
    const tablet = useMediaQuery('(max-width: 768px)');
    const mobile = useMediaQuery('(max-width: 600px)');
    
    const handleEnter = () => {
        image.current.style.filter = 'brightness(30%)';
    }

    const handleLeave = () => {
        image.current.style.filter = '';
    }

    const saveBookmark = (e) => {
        setOpenBookmarkDialog({open: true, dialog: 'add'});
        const movie = e.target.getAttribute('data-name');
        dispatchBookmarks({type: 'add bookmark', bookmark: movie});
    }

    const deleteBookmark = (e) => {
        setOpenBookmarkDialog({open: true, dialog: 'remove'});
        const movie = e.target.getAttribute('data-name');
        dispatchBookmarks({type: 'remove bookmark', bookmark: movie })
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

            <img src={changeMovieImage(movie)} className={styles.movie_image} alt={movie['name']} ref={image}/>                
            <div className={styles.overlay}
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
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
            <div className={styles.movie_bookmark} onClick={removeBookmark ? deleteBookmark : saveBookmark} data-name={movie['name']}>
                <div className={styles.movie_bookmarkIcon}></div>
            </div>
        </div>
    )
}

export default DisplayMovie;