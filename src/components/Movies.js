import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Movies extends React.Component {
    render() {
        return (
            <div className='mx-auto'>
                Movies with {this.props.searchQuery} in the title:
                <Row>
                    {this.props.movies.map(data => {
                        return (
                            <Col key={this.props.searchQuery + ' ' + data.released_on}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={data.image_url} alt="No image available"/>
                                    <Card.Body>
                                        <Card.Title>{data.title} {data.released_on}</Card.Title>
                                        <Card.Text>
                                            <div>{data.overview}</div>
                                            <div>Total votes: {data.total_votes} | Average votes: {data.average_votes}</div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        )
    }
}

export default Movies