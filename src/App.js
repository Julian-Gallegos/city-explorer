import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './components/CityForm';
import CityForm from './components/CityForm';
import { Container } from 'react-bootstrap';

import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      location: {},
      error: false,
      errorMessage: '',
      map: '',
    }
  }

  handleSubmitForm = (e) => {
    e.preventDefault();
    this.setState({ searchQuery: e.target.value });
    this.handleRequest();
  }

  handleRequest = async() => {
    try {
      const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_API_KEY}&q=${this.state.searchQuery}&format=json`;
      const resp = await axios.get(API);
      console.log('Query Succeeded');
      this.setState({ location: resp.data[0] }, () => {
        let URL = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_API_KEY}&center=${this.state.location.lat},${this.state.location.lon}&size=600x600&zoom=14&markers=${this.state.location.lat},${this.state.location.lon}|icon:large-blue-cutout&format=png`;
        this.setState({ map: URL });
      });
      this.setState({ error: false});
    } catch (error) {
      console.log(error);
      this.setState({ error: true });
      this.setState({ errorMessage: error.message });
    };
  }

  render() {
    return (
      <>
        <Container>
          <h1>
            The city is: {this.state.location.display_name}
          </h1>
          <div>
            Latitude: {this.state.location.lat}
          </div>
          <div>
            Longitude: {this.state.location.lon}
          </div>
        </Container>
        {<img src={this.state.map} alt="A map will display here. "></img>}
        {this.state.error ? this.state.errorMessage : true}
        <CityForm handleSubmitForm={this.handleSubmitForm} />
      </>
    );
  }
}

export default App;
