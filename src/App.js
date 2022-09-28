import React from 'react';
import './App.scss';

import 'bootstrap/dist/css/bootstrap.min.css';
import './components/CityForm';
import CityForm from './components/CityForm';
import { Container } from 'react-bootstrap';
import Weather from './components/Weather';

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
      weather: [],
    }
  }

  handleChangeForm = (e) => {
    e.preventDefault();
    this.setState({ searchQuery: e.target.value });
  }

  handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_API_KEY}&q=${this.state.searchQuery}&format=json`;
      const resp = await axios.get(API);
      this.setState({ location: resp.data[0] }, async () => {
        let URL = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_API_KEY}&center=${this.state.location.lat},${this.state.location.lon}&size=900x900&zoom=14&markers=${this.state.location.lat},${this.state.location.lon}|icon:large-blue-cutout&format=png`;
        this.setState({ map: URL });
        this.fetchWeatherData();
      });
      this.setState({ error: false });
    } catch (error) {
      console.log(error);
      this.setState({ error: true });
      this.setState({ errorMessage: error.message });
    };
  }

  fetchWeatherData = async() => {
    try {
      const resp = await axios.get(`http://localhost:3001/weather?query=${this.state.searchQuery}&lat=${this.state.location.lat}&lon=${this.state.location.lon}`);
      this.setState({ weather: resp.data });
    } catch (error) {
      console.log(error);
      this.setState({ error: true });
      this.setState({ errorMessage: error.message });
    }
  }

  render() {
    return (
      <>
        <Container>
          <h1>The city is: {this.state.location.display_name}</h1>
          <div>Latitude: {this.state.location.lat}</div>
          <div>Longitude: {this.state.location.lon}</div>

          <div>{this.state.weather.length > 0 ? <Weather className="my-3" weather={this.state.weather} /> : false}</div>


          {this.state.map.length > 0 ? <img className="mx-auto" src={this.state.map} alt="A map"></img> : false}

          <CityForm handleSubmitForm={this.handleSubmitForm} handleChangeForm={this.handleChangeForm} />
          {this.state.error ? this.state.errorMessage : true}
        </Container>
      </>
    );
  }
}

export default App;
