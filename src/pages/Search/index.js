import React, {useState} from 'react';
import Navbar from '../../components/Navbar';
import Results from '../../components/Results';

function Search(props){
    const [searchParam, setSearchParam] = useState('');

    function handleSearch(searchParam){
        setSearchParam(searchParam);
    }
    
    const {site_id} = props.match.params;
    console.log(site_id);

    return (
        <>
        <Navbar handleCallback={handleSearch} />
        <Results searchParam={searchParam} site_id={site_id} />
        </>
    )
};

export default Search;