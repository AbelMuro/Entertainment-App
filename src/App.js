import React, {useState} from 'react';
import Sidebar from './Components/SideBar'
import ShareContext from './Context';
import DisplayApp from './Components/DisplayApp';
import Home from './Pages/Home';
import Movies from './Pages/Movies'
import Login from './Pages/Login';
import Register from './Pages/Register';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from './Firebase';
import './styles.css';

function App () {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    onAuthStateChanged(auth, (user) => {
        if(user)
            setIsLoggedIn(true);
        else
            setIsLoggedIn(false);
    })

    return (
        <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login/>}/>  
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/user' element={<DisplayApp/>}>
                        <Route path='/user/home' element={<Home/>}/>  
                        <Route path='/user/movies' element={<Movies/>}/>                            
                    </Route>  
                
                </Routes>            
            

        </BrowserRouter>

    )
}

export default ShareContext(App);