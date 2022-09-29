import React from 'react';

class WeatherDay extends React.Component {
    render () {
        return (
            <div className='bg-light border'>| {this.props.data.date} | Temp (c): {this.props.data.description}</div>
        );
    }
}
export default WeatherDay;