import React, {useState, useEffect} from 'react';
import Item from '../Item';
import './style.scss';

function Results(props) {
    const [itemList, setItemList] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const data = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=gatomon&limit=10");
        const dataJson = await data.json();  
        console.log(dataJson);        
        setItemList(dataJson.results);
    };

    return (
    <ul className="itemList">
        {itemList.filter((value)=>{
            return value.title.toLowerCase().includes(props.searchParam.toLowerCase())
        }).map((value,key)=>{
            return (
                <li>
                    <Item 
                    name={value.title} 
                    key={value.id ? value.id : key}
                    image={value.thumbnail}
                    />
                </li>
            )
        })}
    </ul>
    )
};

export default Results;