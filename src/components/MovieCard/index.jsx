import React from "react";
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
    
    render() {

        const src = this.props.film.poster_path === null ? 'http://via.placeholder.com/185x278' : `https://image.tmdb.org/t/p/w185_and_h278_bestv2${this.props.film.poster_path}`;
        const movieTitle = this.props.film.title;

        return (
            <div className="card">
                <Link to={ `/movie/${this.props.film.id}` }  >
                    <img src={ src } alt={movieTitle} />
                </Link>
                <h2>{ movieTitle }</h2>
            </div>
        )
    }
}

export default MovieCard;
