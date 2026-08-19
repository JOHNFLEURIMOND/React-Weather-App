import React from 'react';
import Titles from './components/Titles';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import Weather from './components/Weather';
import './App.css';

class Wakanda extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
  };

  getWeather = e => {
    e.preventDefault();

    this.setState({
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error:
        'Weather lookup is temporarily unavailable because the legacy client-side API credential was removed for security.',
    });
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
