import React, { Component } from "react";
import Search from './searchCountry'

const url = "https://restcountries.eu/rest/v2/all";
class Country extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: [],
    };
  }
  handleDelete = (country) => {
    const countries = this.state.countries.filter(
      (c) => c.name !== country.name
    );
    this.setState({ countries });
  };
  render() {
    const { length: count } = this.state.countries;
    if (count === 0)
      return <p>There are no number of contries in the database </p>;
    return (
      <div>
        <Search />
        <h4>Showing {count} number of countries in the database</h4>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Country Name</th>
              <th scope="col">Capital</th>
              <th scope="col">Region</th>
              <th scope="col">Subregion</th>
              <th scope="col">Population</th>
              <th scope="col">Demonym</th>
              <th scope="col">Borders</th>
              <th scope="col">Image</th>
              <th scope="col">button</th>

              <th></th>
              {/* <th scope="col">Publish</th> */}
            </tr>
          </thead>
          <tbody>
            {this.state.countries.map((country) => (
              <tr key={country.name}>
                <td>{country.name}</td>
                <td>{country.capital}</td>
                <td>{country.region}</td>
                <td>{country.subregion}</td>
                <td>{country.population}</td>
                <td>{country.demonym}</td>
                <td>{country.borders.join(",")}</td>
                <td>
                  <img className="w-75 h-75" src={country.flag} alt="" />
                </td>

                <td>
                  <button
                    onClick={() => this.handleDelete(country)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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

export default Country;
