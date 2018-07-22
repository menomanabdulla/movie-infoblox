import React, { Component } from 'react';
import './App.css';

class App extends Component {
  movie=[
    {
      name: 'World War',
      catagorie: 'milatary',
      director: 'nolan',
      ratting: 5,
      thumb: 'http://haras.gov.ly/wp-content/uploads/2017/01/Logo.png'
    },
    {
      name: 'World War two',
      catagorie: 'milatary two',
      director: 'nolan two',
      ratting: 4,
      thumb: 'http://haras.gov.ly/wp-content/uploads/2017/01/Logo.png'
    }
  ]
  render(){
    return (
      <div className="container">
          <div className="offset-md-2 col-md-8">
            <div className="movie-block">
              <h1>Hello world from movie block</h1>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
