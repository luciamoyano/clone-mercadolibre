import React from 'react';

class Product extends React.Component {
    async componentDidMount() {
        const {id} = this.props.match.params
        const data = await fetch(
            `https://api.mercadolibre.com/products/${id}`
        ); //template string -> meter variables en strings
        const json = await data.json();
        console.log(json)
    }
    render() {
        return <p>Producto</p>
    }
};

export default Product;