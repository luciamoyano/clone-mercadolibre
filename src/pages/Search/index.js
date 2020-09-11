import React, {useState} from 'react';
import Navbar from '../../components/Navbar';
import Results from '../../components/Results';

function Search(){
    const [searchParam, setSearchParam] = useState('');

    function handleSearch(searchParam){
        setSearchParam(searchParam);
    }

    return (
        <>
        <Navbar handleCallback={handleSearch} />
        <Results searchParam={searchParam}/>
        </>
    )
};

export default Search;