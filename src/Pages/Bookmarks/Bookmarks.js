import React, {useState, useContext, useEffect} from 'react';
import styles from './styles.module.css';
import { Context } from '../../Context';
import MoviesAndTVSeries from '../../Data/AllMoviesAndTVseries';
import DisplayMovie from '../../Components/DisplayMovie';


function Bookmarks() {
    const {bookmarks} = useContext(Context);
    const [bookmarkedMovies, setBookmarkedMovies] = useState(true);         //these states are used to decide to display a message to the user
    const [bookmarkedTvSeries,setBookmarkedTvSeries] = useState(true);

    useEffect(() => {
        setBookmarkedMovies(true);
        setBookmarkedTvSeries(true);
    }, [bookmarks])

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

                        if(bookmarks.includes(movieName) && movieType === 'Movie'){
                            bookmarkedMovies ?  setBookmarkedMovies(false) : "";
                            return(
                                <DisplayMovie movie={movie} key={movieName} removeBookmark={true}/>   /* removeBookmark prop is used to determine which event handler to use for the bookmark button on the top right corner*/
                            )                            
                        }

                    })                
                    }
                    {bookmarkedMovies ? <div className={styles.message}>
                        No Bookmarked Movies
                    </div> : <></>}
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

                        if(bookmarks.includes(seriesName) && seriesType === 'TV Series'){
                            bookmarkedTvSeries ?  setBookmarkedTvSeries(false) : "";;
                            return(
                                <DisplayMovie movie={tvSeries} key={seriesName} removeBookmark={true}/> /* removeBookmark prop is used to determine which event handler to use for the bookmark button on the top right corner*/
                            )                            
                        }

                    })}
                </div>
                {bookmarkedTvSeries ? <div className={styles.message}>
                    No Bookmarked TV Series
                </div> : <></>}
            </section>     
        </div>  

    )
}

export default Bookmarks;