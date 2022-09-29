import React from 'react';
import WeatherDay from './WeatherDay';
import Stack from 'react-bootstrap/Stack'

class Weather extends React.Component {
    render() {
        return (
            <div className='mx-auto'>
                Weather Forecast:
                <Stack gap={2}>
                    {this.props.weather.map(data => {
                        return (
                            <WeatherDay key={this.props.searchQuery+' '+data.date} data={data} />
                        )
                    })}
                </Stack>
            </div>
        );
    }
}

export default Weather;