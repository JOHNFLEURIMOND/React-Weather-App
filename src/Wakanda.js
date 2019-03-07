import React from 'react';
import Titles from './components/Titles';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import Weather from './components/Weather';
import './App.css';
// eslint-disable-next-line
const API_KEY = 'e4ca20843525423bd411132f9fb96266';

class Wakanda extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
  };

  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.name.value;
    const country = e.target.elements.city.country.value;
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    const data = await api_call.json();


    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: '',
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: 'Please enter the values.',
      });
    }
  };

  render() {
    return (
      <div>
        <Header />
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather
          temperature={this.state.temperature}
          humidity={this.state.humidity}
          city={this.state.city}
          country={this.state.country}
          description={this.state.description}
          error={this.state.error}
        />
        <br/>
        <br/>
        <br/>
        <br/>
          
         <Footer />
      </div>
    );
  }
}

export default Wakanda;
