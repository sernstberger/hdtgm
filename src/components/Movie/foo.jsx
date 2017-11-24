import React from "react";
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPerson } from '../../actions';

class Foo extends React.Component {
    componentDidMount() {
        this.props.fetchPerson(111683);
        this.props.fetchPerson(738);
    }
    
    render(){
        
        const people = this.props.personList.data;

        if(this.props.personList.data === undefined)
            return <div>Loading</div>

        // const contentfulData = this.props.activeContentfulFilm.data.items[0].fields;

        console.log(people);

        return(
            <div className="container-fluid">
                stuff goes here
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        personList: state.personList,
    };
}

export default connect(mapStateToProps, {fetchPerson})(Foo);