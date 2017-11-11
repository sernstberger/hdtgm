import React from 'react';

import logo from '../logo.png';

export default function Footer(props) {    
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col m12 s12 right-align">
                            <a href="" className="movie-db">
                                <span >Powered By</span> <img src={ logo } alt="" className="responsive-img logo"/>
                            </a>
                        </div>
                    </div>
                </div>               
            </footer>
        )    
}
