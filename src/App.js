import React from 'react';
import Login from './Pages/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './styles.css';

function App () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>     
            </Routes>
        </BrowserRouter>

    )
}

export default App;