import React from 'react';
import Movie from './Movie';
import Row from 'react-bootstrap/Row';


class Movies extends React.Component {
    render() {
        return (
            <div className='mx-auto'>
                Movies with {this.props.searchQuery} in the title:
                <Row>
                    {this.props.movies.map(data => {
                        return (
                            <Movie key={this.props.searchQuery + ' ' + data.released_on} data={data} />
                        )
                    })}
                </Row>
            </div>
        )
    }
}

export default Movies;