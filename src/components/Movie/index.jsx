import React from "react";
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMovie, fetchPerson, fetchContentfulMovie } from '../../actions';
import Markdown from "react-remarkable";
import Foo from "./foo";

class Movie extends React.Component {
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);

    this.props.fetchContentfulMovie(this.props.match.params.id);

    this.props.fetchPerson(111683);

    window.scrollTo(0, 0)
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

        if(this.props.activeContentfulFilm.data === undefined)
            return <div>Loading</div>
        
        if(this.props.personList.data === undefined)
            return <div>Loading</div>
        
        const film = this.props.activeFilm.data;
        const poster = film.poster_path;
        const src = poster === null ? 'http://via.placeholder.com/185x278' : `https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster}`;
        const videoId = `https://www.youtube.com/embed/${film.videos.results[0].key}`;

        const people = this.props.personList.data;
        console.log(people);
        console.log(film);

        return(
            <div className="container-fluid">
                <div className="movie-bg" style={{backgroundImage: `url("https://image.tmdb.org/t/p/original${film.backdrop_path}")`}}></div>

                <div className="main">
                    <div className="row justify-content-center">

                        <div className="col-3 col-xl-4">
                          <img src={ src } alt={film.title} className="img-fluid poster" />

                          { window.innerWidth < 768 && this.props.activeContentfulFilm.data.items[0] !== undefined && 
                            <div className="btn btn-primary btn-block btn-sm mt-2" onClick={  () => document.getElementById('bigPlayBtn').click()  }><i className="material-icons">play_arrow</i> Play</div>
                          }
                        </div>
                        <div className="col-9 col-xl-8">
                          { this.props.activeContentfulFilm.data.items[0] &&
                            <Foo audioUrl={this.props.activeContentfulFilm.data.items[0].fields.soundCloud} />
                          }
                          { this.props.activeContentfulFilm.data.items[0] !== undefined && 
                            <h5 className="text-uppercase">Episode #{this.props.activeContentfulFilm.data.items[0].fields.episodeNumber}</h5>
                          }
                          <h1 className="display-3">{film.title}</h1>
                          <h3>{film.tagline}</h3>
                          { window.innerWidth > 767 && this.props.activeContentfulFilm.data.items[0] !== undefined && 
                            <div className="btn btn-primary btn-lg mt-2" onClick={  () => document.getElementById('bigPlayBtn').click()  }><i className="material-icons">play_arrow</i> Play</div>
                          }
                          { window.innerWidth > 1200 && this.props.activeContentfulFilm.data.items[0] !== undefined && 
                            <div className="mt-3">
                              <Markdown source={this.props.activeContentfulFilm.data.items[0].fields.description}/>
                            </div>
                          }
                        </div>
                        <div className="col-12">
                          { window.innerWidth < 1200 && this.props.activeContentfulFilm.data.items[0] !== undefined && 
                            <div className="mt-3">
                              <Markdown source={this.props.activeContentfulFilm.data.items[0].fields.description} />
                            </div>
                          }
                          <hr />
                          <h6 className="text-uppercase">Plot overview</h6>
                          <p>{film.overview}</p>

                          <p><a href="#">http://www.slashfilm.com/mackenzie-astin-talks-the-garbage-pail-kids-movie/</a></p>
                        </div>
                        <div className="col-12">
                            <div className="row">
                              <div className="col-12">
                                <hr />
                              </div>
                              <div className="col-sm-6">
                                  <h6 className="text-uppercase">Trailer</h6>
                                  <div className="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item" src={videoId} allowFullScreen title="video"></iframe>
                                  </div>
                              </div>

                              <div className="col-sm-6">
                                  <h6 className="text-uppercase">Credits {film.credits.cast.name}</h6>
                                  <div className="list-group">
                                      {film.credits.cast.slice(0, 10).map((credit) =>
                                          <div className="list-group-item" key={credit.id}>
                                              <div className="media">
                                                  <img src={ `https://image.tmdb.org/t/p/w66_and_h66_bestv2${credit.profile_path}` } alt="goodalt" className="mr-3" height="40" width="40" />
                                                  <div className="media-body align-self-center">
                                                      <h6 className="m-0">{credit.name}</h6>
                                                      <small className="text-muted">{credit.character}</small>
                                                  </div>
                                              </div>
                                          </div>
                                      )}
                                  </div>
                              </div>
                            </div>
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
        personList: state.personList,
        activeContentfulFilm: state.activeContentfulFilm,
    };
}

export default connect(mapStateToProps, {fetchMovie, fetchPerson, fetchContentfulMovie})(Movie);