import React, {useState} from 'react';
import Sidebar from './Components/SideBar'
import ShareContext from './Context';
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
            <main className={isLoggedIn ? 'container' : ''}>
                {isLoggedIn ? <Sidebar/> : <></>}
                <Routes>
                    <Route path='/' element={<Login/>}/>  
                    <Route path='/register' element={<Register/>}/>   
                    <Route path='/home' element={<Home/>}/>  
                    <Route path='/movies' element={<Movies/>}/>                    
                </Routes>            
            </main>
            

        </BrowserRouter>

    )
}

export default ShareContext(App);