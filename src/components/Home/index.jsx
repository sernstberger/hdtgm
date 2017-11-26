import React from "react";
import { connect } from "react-redux";
import { fetchPopular, clearMovie } from "../../actions";

import MovieCard from '../MovieCard';
import SearchInput, {createFilter} from 'react-search-input'

class Home extends React.Component {
    componentDidMount() {
        this.props.fetchPopular();
        window.scrollTo(0, 0)
    }

    constructor (props) {
      super(props)
      this.state = {
        searchTerm: ''
      }
      this.searchUpdated = this.searchUpdated.bind(this)
    }
    
    renderPopular() {
        // Ajax Spinner for loading
        if(this.props.results.data === undefined) return <div>Loading... </div>

        const films = this.props.results.data;
        // films.sort(function(a, b) {
        //   var textA = a.title.toUpperCase();
        //   var textB = b.title.toUpperCase();
        //   return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        // });

        films.sort((a,b) => {
          return new Date(a.release_date).getTime() - 
              new Date(b.release_date).getTime()
        }).reverse();

        const filteredFilms = films.filter(createFilter(this.state.searchTerm, ["title"]))

        console.log(filteredFilms);

        return filteredFilms.map(
          film =>
            <MovieCard key={film.id} film={film} />
        );        
    }
    
    render() {
        return (
            <div className="container">
              <br/>
              <br/>
              <br/>
              <br/>
                <h1>Movies</h1>
                <SearchInput className="form-group" inputClassName="form-control" onChange={this.searchUpdated} />
                {/* <p>filters</p> */}
                <div className="row">
                    { this.renderPopular() }
                </div>

                {/* <p>http://www.slashfilm.com/category/hdtgm/</p> */}

            </div>
        )
    }
    searchUpdated (term) {
      this.setState({searchTerm: term})
    }
}

function mapStateToProps(state) {
    return { results: state.results }
}

export default connect(mapStateToProps, {fetchPopular, clearMovie})(Home);
