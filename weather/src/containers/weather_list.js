import React, { Component } from "react";
import { connect } from "react-redux";
import GoogleMap from "../components/google_map";

class WeatherList extends Component {


  renderWeather(cityData) {
    const id = cityData.id;
    const cityName = cityData.name;
    const countryName = cityData.sys.country;
    const wind = cityData.wind.speed;
    const temp = cityData.main.temp;
    const humidity = cityData.main.humidity;
    const pressure = cityData.main.pressure;
    const sunrise = cityData.sys.sunrise;
    const sunset= cityData.sys.sunset;
    const lon = cityData.coord.lon;
    const lat = cityData.coord.lat;
    var iconCode = cityData.weather[0].icon;
    var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
    var dateSunrise = new Date(sunrise * 1000);
    var timestrSunrise = dateSunrise.toLocaleTimeString();
    var dateSunset = new Date(sunset * 1000);
    var timestrSunset = dateSunset.toLocaleTimeString();    

    return (
      <div className="row content-container" key={id}>
        <div className="col-md-4">
          <ul className="list-group weather-list" >
            <li className="list-group-item"><h3>{cityName}, <span>{countryName} </span><span>{temp}°С </span></h3> <img src={iconUrl}/> </li>
            <li className="list-group-item">Wind: {wind}m/s</li>
            <li className="list-group-item">Humidity: {humidity}% </li>
            <li className="list-group-item">Pressure: {pressure} hpa</li>
            <li className="list-group-item">Sunrise: {timestrSunrise}</li>
            <li className="list-group-item">Sunset: {timestrSunset}</li>
          </ul>
        </div>
        <div className="col-md-8">
          <div className="map-container">
             <GoogleMap className="map" lon={lon} lat={lat} />            
          </div>
        </div>
      </div>
    );
  }
    render() 
    {
    return (

     <div className="container">
          
          {this.props.weather.map(this.renderWeather)}
     </div>
     );
  } 


}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
