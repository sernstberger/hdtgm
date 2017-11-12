import React from "react";
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMovie, fetchPerson } from '../../actions';

import ReactPlayer from "react-player";

class Movie extends React.Component {
    componentDidMount() {
        this.props.fetchMovie(this.props.match.params.id);

        this.props.fetchPerson(111683);
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

        const people = this.props.personList.data;

        console.log("something");
        
        return(
            <div className="container-fluid">
                <div className="movie-bg" style={{backgroundImage: `url("https://image.tmdb.org/t/p/original${film.backdrop_path}")`}}></div>

                <div className="row">
                    <div className="col-sm-3">
                        <div className="sidebar">

                            <img src={ src } alt={film.title} className="img-fluid poster" />

                            <button className="btn">Watch Trailer</button>

                            <h3>Trailer</h3>

                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" src={videoId} allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-9">
                        <div className="main">
                            <h3>Episode #104</h3>
                            <h1 className="display-3">{film.title}</h1>
                            <h2>{film.tagline}</h2>
                            <p>{film.overview}</p>

                            <h1>Jerks</h1>

                            <p>{people.name}</p>

                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />

                            <ReactPlayer url="https://soundcloud.com/hdtgm/159-sleepwalkers-w-lauren-lapkus" />
                            
                            <h3>play progress</h3>
                            {/* <progress max={1} value={played} /> */}
                            <progress max={1} value={10} />


                            <h3>load progress</h3>
                            {/* <progress max={1} value={played} /> */}
                            <progress max={1} value={65} />

                            <h3>Volume</h3>
                            {/* <input type='range' min={0} max={1} step='any' value={volume} onChange={this.setVolume} /> */}
                            <input type='range' min={0} max={1} step='any' value={10} />


                            {/* <p>Where can you watch?</p>
                            <p>iTunes</p>
                            <p>Amazon</p>
                            <p>Google Play</p> */}

                            <h1>Credits {film.credits.cast.name}</h1>

                            <div className="list-group">
                                {film.credits.cast.slice(0, 10).map((credit) =>
                                    <div className="list-group-item" key={credit.id}>
                                        <div className="media">
                                            <img src={ `https://image.tmdb.org/t/p/w66_and_h66_bestv2${credit.profile_path}` } className="mr-3" height="40" width="40" />
                                            <div className="media-body align-self-center">
                                                <h6 className="m-0">{credit.name}</h6>
                                                <small className="text-muted">{credit.character}</small>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <p>Actor Chris Geere of You’re the Worst joins Paul, June, and Jason to discuss the 1987 martial arts film Miami Connection. Recorded live from Largo at the Coronet in Los Angeles, they talk about the music band of ninjas, the connection to Miami, orphan beach, and much more.
                            This episode is brought to you by Delta Airlines, Squarespace (www.squarespace.com code: BONKERS), Hello Fresh (www.hellofresh.com code: BONKERS), and The Chris Gethard Show on truTV.
                            Check out new HDTGM merch over at https://www.teepublic.com/user/howdidthisgetmade
                            Where to Find Jason, June & Paul:
                            Paul’s new comedy Drive Share is available on Go90. Paul can be seen on Wet Hot American Summer: Ten Years Later, Opening Night, and Veep. You can see June and Paul on NTSF:SD:SUV:: on HULU. June stars in Grace and Frankie on Netflix, as well as Lady Dynamite alongside with Jason.
                            Jason can be seen in The House, The Lego Batman Movie, How to Be Single, Sleeping with Other People, and is still indeed in The Dictator.</p>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        activeFilm: state.activeFilm,
        personList: state.personList
    };
}

export default connect(mapStateToProps, {fetchMovie, fetchPerson})(Movie);