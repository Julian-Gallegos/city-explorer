import React from 'react';

class Weather extends React.Component {
    render() {
        return (
            <>
                Weather Info:
                <div>Date: {this.props.weather[0].date}</div>
                <div>{this.props.weather[0].description}</div>

                <div>Date: {this.props.weather[1].date}</div>
                <div>{this.props.weather[1].description}</div>

                <div>Date: {this.props.weather[2].date}</div>
                <div>{this.props.weather[2].description}</div>
            </>
        );
    }
}

export default Weather