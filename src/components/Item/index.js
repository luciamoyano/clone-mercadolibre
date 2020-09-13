import React from 'react';
import './style.scss';

class Item extends React.Component {
    render(){
        const {name, image, price} = this.props;
        return (
            <div className="item">
                <img src={image} />
                <div className="itemInfo">
                    <p className="itemPrice">${price}</p>
                    <p className="itemName">{name}</p>
                </div>
            </div>
        )
    }
};

export default Item;