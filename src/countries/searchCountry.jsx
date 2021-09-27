import React, { Component } from "react";

const url = "https://restcountries.eu/rest/v2/name/{name}";
class Search extends Component {
  state = {
      name: '',
  };
  render() {
    return (
        <div>
          {this.state.name}
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
  componentDidMount() {
    fetch(url, {
      Method: "Get",
    })
      .then((res) => res.json())
      .then((post) => {
        this.setState({ countries: post });
      });
  }
}

export default Search;
