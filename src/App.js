import React from 'react';
import ShareContext from './Context';
import DisplayApp from './Components/DisplayApp';
import Home from './Pages/Home';
import Movies from './Pages/Movies';
import TVSeries from './Pages/TVSeries';
import Bookmarks from './Pages/Bookmarks';
import Search from './Pages/Search';
import Login from './Pages/Login';
import Register from './Pages/Register';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './styles.css';

function App () {

    return (
        <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login/>}/>  
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/user' element={<DisplayApp/>}>
                        <Route path='/user/home' element={<Home/>}/>  
                        <Route path='/user/movies' element={<Movies/>}/>  
                        <Route path='/user/tvseries' element={<TVSeries/>}/>  
                        <Route path='/user/bookmarks' element={<Bookmarks/>}/>   
                        <Route path='/user/search' element={<Search/>}/>                     
                    </Route>  
                </Routes>            
        </BrowserRouter>

    )
}

export default ShareContext(App);