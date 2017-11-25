import React from "react";
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
    
    render() {

        const src = this.props.film.poster_path === null ? 'http://via.placeholder.com/185x278' : `https://image.tmdb.org/t/p/w185_and_h278_bestv2${this.props.film.poster_path}`;
        const movieTitle = this.props.film.title;

        return (
            <div className="col-4 col-md-3 col-lg-2">
                <div className="text-center">
                    <Link to={ `/movie/${this.props.film.id}` }  >
                        <img src={ src } alt={movieTitle} className="img-fluid poster" />
                        <p>{ movieTitle }</p>
                    </Link>
                </div>
            </div>
        )
    }
}

export default MovieCard;
