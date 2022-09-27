import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class CityForm extends React.Component {
    render() {
        return (
            <Form className="my-4 mx-5" onSubmit={this.props.handleSubmitForm}>
                <Form.Group className="mb-3" controlId="form">
                    <Form.Label>Try "Seattle"!</Form.Label>
                    <Form.Control placeholder="Enter name of a city" onChange={this.props.handleChangeForm}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Explore!
                </Button>
            </Form>
        );
    }
}

export default CityForm