import React, {createContext, useReducer} from 'react';
import searchReducer from './Reducers';

export const Context = createContext();

export default function ShareContext (App) {
    
    return () => {
       const [search, dispatchSearch] = useReducer(searchReducer, '');


        return(
            <Context.Provider value={{search, dispatchSearch}}>
                <App/>
            </Context.Provider>
        )
    }
}