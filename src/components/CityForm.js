import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class CityForm extends React.Component {
    render() {
        return (
            <Form onSubmit={this.props.handleSubmitForm}>
                <Form.Group className="mb-3" controlId="form">
                    <Form.Label>City Name</Form.Label>
                    <Form.Control placeholder="Enter name of a city" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Explore!
                </Button>
            </Form>
        );
    }
}

export default CityForm