import React from 'react';
import './style.scss';

function Item(props) {
    const {name, image, price} = props;
    return (
        <div className="item">
            <img src={image} />
            <div className="itemInfo">
                <p className="itemPrice">${price}</p>
                <p className="itemName">{name}</p>
            </div>
        </div>
    )
};

export default Item;