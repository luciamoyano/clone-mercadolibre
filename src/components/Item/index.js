import React from 'react';
import './style.scss';

function Item(props) {
    const {name, image} = props;
    return (
        <div className="item">
            <img src={image} />
            <p>{name}</p>
        </div>
    )
};

export default Item;