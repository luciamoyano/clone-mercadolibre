import React from 'react';
import logo from '../../../src/logo-meli.png';
import './style.scss';
import {Link} from 'react-router-dom';
const countriesArr = [
    {name: "Argentina", site_id: "MLA"},
    {name: "Bolivia", site_id: "MBO"},
    {name: "Brasil", site_id: "MLB"},
    {name: "Chile", site_id: ""},
    {name: "Colombia", site_id: ""},
    {name: "Costa Rica", site_id: ""},
    {name: "Dominicana", site_id: ""},
    {name: "Ecuador", site_id: ""},
    {name: "Guatemala", site_id: ""},
    {name: "Honduras", site_id: ""},
    {name: "México", site_id: ""},
    {name: "Nicaragua", site_id: ""},
    {name: "Panamá", site_id: ""},
    {name: "Paraguay", site_id: ""},
    {name: "Perú", site_id: ""},
    {name: "Salvador", site_id: ""},
    {name: "Uruguay", site_id: ""},
    {name: "Venezuela", site_id: ""}
];

class Home extends React.Component {
    render () {
        return (
        <>
        <div id="homeWrapper">
            <header>
                <img src={logo} id='logo'/>
            </header>
            <ul className="ml-site-list">
                {countriesArr.map((country,key) => {
                    return (
                    <li className="ml-site-country" key={key}><Link to={`/search/${country.site_id}`}>{country.name}</Link></li>
                    )
                })}
            </ul>
        </div>
        </>
        )
    }
};

export default Home;