import React, {useState, createContext, useReducer} from 'react';
import {searchReducer, bookmarkReducer} from './Reducers';

export const Context = createContext();

export default function ShareContext (App) {
    
    return () => {
       const savedBookmarks = JSON.parse(localStorage.getItem('bookmarks'));
       const [search, dispatchSearch] = useReducer(searchReducer, '');
       const [bookmarks, dispatchBookmarks] = useReducer(bookmarkReducer, savedBookmarks ? savedBookmarks : []);
       const [openBookmarkDialog, setOpenBookmarkDialog] = useState(false);

       const value = {
            search, 
            dispatchSearch, 
            bookmarks, 
            dispatchBookmarks,
            openBookmarkDialog,
            setOpenBookmarkDialog,
        }

        return(
            <Context.Provider value={value}>
                <App/>
            </Context.Provider>
        )
    }
}