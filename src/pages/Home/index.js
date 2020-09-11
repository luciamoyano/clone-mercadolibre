import React from 'react';
import logo from '../../../src/logo-meli.png';
import './style.scss';
import {Link} from 'react-router-dom';

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
        <div id="homeWrapper">
            <header>
                <img src={logo} id='logo'/>
            </header>
            <ul className="ml-site-list">
                {countriesArr.map((country,key) => {
                    return (
                    <li className="ml-site-country" key={key}><Link to="/search">{country}</Link></li>
                    )
                })}
            </ul>
        </div>
        </>
    )
};

export default Home;