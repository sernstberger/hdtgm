import React from "react";
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMovie } from '../../actions';

class Movie extends React.Component {
    componentDidMount() {
        this.props.fetchMovie(this.props.match.params.id);
    }
    componentDidUpdate(prevProps) {
        // If this address doesn't match the last address, run the fetchMovie function
        // with the new address
        if(this.props.match.params.id !== prevProps.match.params.id)
            this.props.fetchMovie(this.props.match.params.id);
        
    }
    
    render(){
        
        if(this.props.activeFilm.data === undefined)
            return <div>Loading</div>
        
        const film = this.props.activeFilm.data;
        const poster = film.poster_path;
        const src = poster === null ? 'http://via.placeholder.com/185x278' : `https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster}`;
        const videoId = `https://www.youtube.com/embed/${film.videos.results[0].key}`;

        return(
            <div className="container-fluid">
                <div className="sidebar">
                    <img src={ src } alt={film.title} className="img-fluid" />

                    <button className="btn">Watch Trailer</button>
                </div>
                <div className="main">
                    <h3>Episode #104</h3>
                    <h1>{film.title}</h1>
                    <h4>Storyline</h4>
                    <p>{film.overview}</p>

                    <p>Where can you watch?</p>
                    <p>iTunes</p>
                    <p>Amazon</p>
                    <p>Google Play</p>

                    <h1>Credits {film.credits.cast.name}</h1>

                    <div className="list-group">
                        {film.credits.cast.map((credit) =>
                            <div className="list-group-item">
                                <div className="media">
                                    {/* <img src={ `https://image.tmdb.org/t/p/w138_and_h175_bestv2${credit.profile_path}` } className="mr-3" /> */}
                                    <img src={ `https://image.tmdb.org/t/p/w66_and_h66_bestv2${credit.profile_path}` } className="mr-3" />
                                    <div className="media-body align-self-center">
                                        <h5 className="mt-0 mb-1">{credit.name}</h5>
                                        <small>{credit.character}</small>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                   

                    <h3>Trailer</h3>

                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src={videoId} allowFullScreen></iframe>
                    </div>


                    <hr />

                    <iframe src="https://art19.com/shows/how-did-this-get-made/episodes/43c86f63-b6e3-4a2d-8641-6073089de0c2/embed?theme=dark-blue" style={{width: "100%", height: "200px", border: "0 none"}} scrolling="no"></iframe>

                    <p>Actor Chris Geere of You’re the Worst joins Paul, June, and Jason to discuss the 1987 martial arts film Miami Connection. Recorded live from Largo at the Coronet in Los Angeles, they talk about the music band of ninjas, the connection to Miami, orphan beach, and much more.
                    This episode is brought to you by Delta Airlines, Squarespace (www.squarespace.com code: BONKERS), Hello Fresh (www.hellofresh.com code: BONKERS), and The Chris Gethard Show on truTV.
                    Check out new HDTGM merch over at https://www.teepublic.com/user/howdidthisgetmade
                    Where to Find Jason, June & Paul:
                    Paul’s new comedy Drive Share is available on Go90. Paul can be seen on Wet Hot American Summer: Ten Years Later, Opening Night, and Veep. You can see June and Paul on NTSF:SD:SUV:: on HULU. June stars in Grace and Frankie on Netflix, as well as Lady Dynamite alongside with Jason.
                    Jason can be seen in The House, The Lego Batman Movie, How to Be Single, Sleeping with Other People, and is still indeed in The Dictator.</p>

                    <p>{film.tagline}</p>
                    <img src={ `https://image.tmdb.org/t/p/w1400_and_h450_bestv2${film.backdrop_path}` } alt={film.title} className="img-fluid" />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        activeFilm: state.activeFilm
    };
}

export default connect(mapStateToProps, {fetchMovie})(Movie);