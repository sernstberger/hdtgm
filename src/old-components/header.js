import React from 'react';

import SearchBar from './search-bar';

import logo from '../logo.png';

export default function Header(props) {    
        return (
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col m12 s12 right-align">
                            <a href="#">
                                {/* <img src={ logo } alt="How Did This Get Made?" className="responsive-img logo"/> */}
                            </a>
                        </div>
                    </div>
                </div>               
            </header>
        )    
}
