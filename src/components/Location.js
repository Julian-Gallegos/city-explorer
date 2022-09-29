import React from 'react';

class Location extends React.Component {
    render() {
        return (
            <>
                <h1>The city is: {this.props.location.display_name}</h1>
                <div>Latitude: {this.props.location.lat}</div>
                <div>Longitude: {this.props.location.lon}</div>
            </>
        );
    }
}

export default Location;