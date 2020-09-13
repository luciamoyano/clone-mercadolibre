import React from 'react';
import Navbar from '../../components/Navbar';
import Results from '../../components/Results';

class Search extends React.Component {
    state = {
        searchParam: ('')
    };
    // reemplaza a:
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         searchParam: ('')
    //     }
    // }

    handleSearch(value){
        this.setState({
            searchParam: value
        });
    }

    render() {
        const {searchParam} = this.state;
        const {site_id} = this.props.match.params;
        return (
            <>
            <Navbar handleCallback={(value) => this.handleSearch(value)} />
            <Results searchParam={searchParam} site_id={site_id} />
            </>
        )
    }
};

export default Search;