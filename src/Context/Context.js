import React, {createContext, useReducer} from 'react';
import {searchReducer, bookmarkReducer} from './Reducers';

export const Context = createContext();

export default function ShareContext (App) {
    
    return () => {
       const [search, dispatchSearch] = useReducer(searchReducer, '');
       const [bookmarks, dispatchBookmarks] = useReducer(bookmarkReducer, []);

        return(
            <Context.Provider value={{search, dispatchSearch, bookmarks, dispatchBookmarks}}>
                <App/>
            </Context.Provider>
        )
    }
}