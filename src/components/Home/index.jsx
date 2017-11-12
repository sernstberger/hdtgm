import React from "react";
import { connect } from "react-redux";
import { fetchPopular, clearMovie } from "../../actions";

import MovieCard from '../MovieCard';

class Home extends React.Component {
    componentDidMount() {
        // Once the component has mounted fire the fetchPopular Action
        this.props.fetchPopular();
    }
    
    renderPopular() {
        // Ajax Spinner for loading
        if(this.props.results.data === undefined) return <div>Loading... </div>

        return this.props.results.data.map(
            film =>
                <MovieCard key={film.id} film={film} />
        );        
    }
    
    render() {
        return (
            <div className="container">
                <h1>Movies</h1>
                <div className="row">
                    { this.renderPopular() }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { results: state.results }
}

export default connect(mapStateToProps, {fetchPopular, clearMovie})(Home);
