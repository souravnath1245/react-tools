import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movie extends Component {
  state = {
    movies: getMovies(),
  };
  handleDelete =(movie)=>{
    const movies = this.state.movies.filter(m => m._id !== movie._id)
    this.setState({movies })
  }
  render() {
      const {length : count}= this.state.movies;
      if(count === 0 ) return <p> There are no movies in the database.</p>
    return (
      <React.Fragment>
        <h4>Showing {count} movies in the database</h4>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col">Like</th>

              <th></th>
              {/* <th scope="col">Publish</th> */}
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <i class="fas fa-heart"></i>
                  <i class="far fa-heart"></i>
                </td>
                {/* <td>{movie.publishDate}</td> */}
                <td>
                  <button onClick={()=> this.handleDelete(movie)} className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movie;
