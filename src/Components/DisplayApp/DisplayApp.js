import React from 'react';
import SideBar from '../../Components/SideBar';
import {Outlet} from 'react-router-dom'

function DisplayApp () {
    return(
        <main className={'container'}>
            <SideBar/>
            <Outlet/>
        </main>
        )
}

export default DisplayApp;