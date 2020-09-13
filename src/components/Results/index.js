import React from 'react';
import Item from '../Item';
import './style.scss';

class Results extends React.Component {
    state = {
        itemList: []
    };
    // reemplaza a:
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         itemList: []
    //     }
    // }

    async componentDidMount() {
            const {site_id} = this.props
            const data = await fetch(`https://api.mercadolibre.com/sites/${site_id}/search?q=auriculares&limit=15`);
            const dataJson = await data.json();  
            console.log(dataJson);        
            this.setState({
                itemList: dataJson.results
            });
    }

    render() {
        const {itemList} = this.state
        return (
        <div className="itemContainer">
            <ul className="itemList">
                {itemList.filter((value)=>{
                    return value.title.toLowerCase().includes(this.props.searchParam.toLowerCase())
                }).map((value,key)=>{
                    return (
                        <li>
                            <Item 
                            name={value.title} 
                            key={value.id ? value.id : key}
                            image={value.thumbnail}
                            price={value.price} 
                            />
                        </li>
                    )
                })}
            </ul>
        </div>
        )
    }
};

export default Results;