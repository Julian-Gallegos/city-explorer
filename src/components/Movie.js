import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

class Movie extends React.Component {
    render() {
        return (
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.data.image_url} alt="No image available" />
                    <Card.Body>
                        <Card.Title>{this.props.data.title} {this.props.data.released_on}</Card.Title>
                        <Card.Text>
                            <div>{this.props.data.overview}</div>
                            <div>Total votes: {this.props.data.total_votes} | Average votes: {this.props.data.average_votes}</div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        );
    }
}

export default Movie;