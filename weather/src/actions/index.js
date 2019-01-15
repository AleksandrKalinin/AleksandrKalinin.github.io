import axios from "axios";
import ReduxThunk from 'redux-thunk'

const API_KEY = "a5821f4600801be4a4ebefc0a0a643ba";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";
export const DEFAULT_WEATHER = "DEFAULT_WEATHER";

export function defaultWeather() {
  const url ="http://api.openweathermap.org/data/2.5/weather?lat=52.4&lon=30.9&appid=a5821f4600801be4a4ebefc0a0a643ba&units=metric";
  const request = axios.get(url);
  return {
    type: DEFAULT_WEATHER,
    payload: request
  };
}


export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city}&units=metric`;
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
