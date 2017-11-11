import React, { Component } from 'react';

import Poster from './movie-card-components/poster';
import CardContent from './movie-card-components/card-content';
import CardAction from './movie-card-components/card-action';
import { Link } from 'react-router-dom';
export default class MovieCard extends Component {


    render() {
        const film = this.props.film;
        return (
                <div className="card horizontal">
                    <Link to={ `/movies/${film.id}` }  >
                        <Poster poster={ film.poster_path } />
                    </Link>
                    <div className="card-stacked">
                        <CardContent film={ film } />
                        <CardAction id={ film.id } />
                    </div>
                </div>
        )
    }
}