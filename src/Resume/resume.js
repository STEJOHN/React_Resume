import React from 'react';
import Education from './education';
import Experience from './experience';
import Header from './header';
import Main from './main';
import Skills from './skills';
import Navbar from './navbar';
import '../style.css';

function Resume(){
    return (
        <body>
        <Education/>
        <Experience/>
        <Header/>
        <Main/>
        <Skills/>
        <Navbar/>
        </body>

    );

}



