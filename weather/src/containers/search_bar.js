import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather,defaultWeather } from "../actions/index";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();


    this.props.fetchWeather(this.state.term);
    this.setState({ term: "" });
  }

  onButtonClick(event){
    this.props.defaultWeather(this.state.term);
    this.setState({ term: "" });
  }

  render() {
    return (
      <div className="row">
      <form onSubmit={this.onFormSubmit} className="fm input-group">
        <input
          placeholder="Type an input like this: 'London, United Kingdom' "
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
           <button onClick={this.onButtonClick} className="def-btn btn btn-secondary">Get local weather</button>            
        </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather,defaultWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
