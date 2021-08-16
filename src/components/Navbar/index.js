import React from 'react';
import './style.scss';

function Navbar(props){
    function handleChange(e){
        props.handleCallback(e.target.value);
    };

    return (
        <nav>
        <input type="text" onChange={handleChange} />
        <button>Buscar</button>
        </nav>
    )
};

export default Navbar;