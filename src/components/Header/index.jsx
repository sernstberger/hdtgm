import React from "react";

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-dark fixed-top">
                <a className="navbar-brand" href="/">
                  <img src={require("../../images/hdtgm-logo.png")} alt="How Did This Get Made?"/>
                </a>
            </nav>
        )
    }
}

export default Header;
