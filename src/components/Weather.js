import React from 'react';

import Stack from 'react-bootstrap/Stack'

class Weather extends React.Component {
    render() {
        return (
            <div className='mx-auto'>
                Weather Forecast:
                <Stack gap={2}>
                    {this.props.weather.map(data => {
                        return (
                            <div key={this.props.searchQuery+' '+data.date} className='bg-light border'>| {data.date} | Temp (c): {data.description}</div>
                        )
                    })}
                </Stack>
            </div>
        );
    }
}

export default Weather