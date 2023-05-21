import React from 'react';
import Home from './Pages/Home';
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
                <Route path='/home' element={<Home/>}/>
            </Routes>
        </BrowserRouter>

    )
}

export default App;