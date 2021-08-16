import React from 'react';
import './style.scss';
import {Link, useParams} from 'react-router-dom';

function Item(props) {
    const {name, image, price, id} = props;
    const {product_id} = useParams();

    return (
        <Link to={`/product/${id}`}>
            <div className="item">
                <img src={image} />
                <div className="itemInfo">
                    <p className="itemPrice">${price}</p>
                    <p className="itemName">{name}</p>
                </div>
            </div>
        </Link>
    )
};

export default Item;