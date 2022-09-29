import React from 'react';
import Location from './Location'
import CityForm from './CityForm';
import Weather from './Weather';
import Movies from './Movies';

class Main extends React.Component {
    render() {
        return (
            <>
                <Location location={this.props.location} />

                <div>{this.props.weather.length > 0 ? <Weather className="my-3" weather={this.props.weather} searchQuery={this.props.searchQuery} /> : false}</div>


                {this.props.map.length > 0 ? <img className="mx-auto" src={this.props.map} alt="A map"></img> : false}

                <CityForm handleSubmitForm={this.props.handleSubmitForm} handleChangeForm={this.props.handleChangeForm} />
                {this.props.error ? this.props.errorMessage : true}
                <div>{this.props.movies.length > 0 ? <Movies className="my-3" movies={this.props.movies} searchQuery={this.props.searchQuery} /> : false}</div>
            </>
        );
    }
}

export default Main;