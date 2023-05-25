import React, {useContext} from 'react';
import styles from './styles.module.css';
import { Context } from '../../Context';
import MoviesAndTVSeries from '../../Data/AllMoviesAndTVseries';
import DisplayMovie from '../../Components/DisplayMovie';

//this is where i left off, i need to make another section for tv series and will need to make the search bar more modularized

function Bookmarks() {
    const {bookmarks} = useContext(Context);


    return (      
        <section className={styles.container}>
            <h1 className={styles.title}>
                Bookmarked Movies
            </h1>
            <div className={styles.allMovies}>
                {MoviesAndTVSeries.map((movie) => {
                    const movieName = movie['name'];
                    const movieType = movie['type'];

                    if(bookmarks.includes(movieName) && movieType === 'Movie')
                        return(
                            <DisplayMovie movie={movie} key={movie['name']}/>
                        )
                })}
            </div>
        </section>
    )
}

export default Bookmarks;