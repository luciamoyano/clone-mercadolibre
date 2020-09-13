import React from 'react';
import './style.scss';

class Navbar extends React.Component{
    handleChange(e){
        this.props.handleCallback(e.target.value);
    };

    render() {
        return (
            <nav>
            <input type="text" onChange={(e) => this.handleChange(e)} />
            <button>Buscar</button>
            </nav>
        )
    }
};

export default Navbar;