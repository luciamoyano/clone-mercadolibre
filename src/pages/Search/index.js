import React, {useState} from 'react';
import Navbar from '../../components/Navbar';
import Results from '../../components/Results';
import {useParams} from 'react-router-dom';

function Search(){
    const [searchParam, setSearchParam] = useState('');
    const {site_id} = useParams();

    function handleSearch(searchParam){
        setSearchParam(searchParam);
    }

    return (
        <>
        <Navbar handleCallback={handleSearch} />
        <Results searchParam={searchParam} site_id={site_id} />
        </>
    )
};

export default Search;