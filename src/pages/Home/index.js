import React from 'react';
import logo from '../../../src/logo-meli.png';
import './style.scss';

function Home(){
    const countriesArr = [
        "Argentina",
        "Bolivia",
        "Brasil",
        "Chile",
        "Colombia",
        "Costa Rica",
        "Dominicana",
        "Ecuador",
        "Guatemala",
        "Honduras",
        "México",
        "Nicaragua",
        "Panamá",
        "Paraguay",
        "Perú",
        "Salvador",
        "Uruguay",
        "Venezuela"];

    return (
        <>
        <header>
            <img src={logo} id='logo'/>
        </header>
        <ul className="ml-site-list">
            {countriesArr.map((value,key) => {
                return (
                <li className="ml-site-country" key={key}><a href="/search">{value}</a></li>
                )
            })}
        </ul>
        
        </>
    )
};

export default Home;