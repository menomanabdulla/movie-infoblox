import React, { Component } from 'react';
import './App.css';
import View from './view/view'
class App extends Component {
  constructor (){
    super()
    this.state = {
      movie: [
        {
          name: 'Avengers Endgame',
          catagorie: 'Action, Adventure, Fantasy',
          director: 'Christopher Markus',
          ratting: 5,
          thumb: 'https://static.gamespot.com/uploads/scale_super/1578/15789737/3515432-endgamedek.jpg',
          id: 0
        },{
          name: 'Star War',
          catagorie: 'Action, Fantasy',
          director: 'Nolan Liam',
          ratting: 5,
          thumb: 'https://i.pinimg.com/originals/a0/3c/4b/a03c4b4d6c8702586f2aa67aecc744e1.jpg',
          id: 1
        },{
          name: 'False Stem',
          catagorie: 'Action ',
          director: 'Nolan Liam',
          ratting: 4,
          thumb: 'https://i.pinimg.com/originals/bb/e3/73/bbe3736ca3522ff81849d90ad89b7031.jpg',
          id: 2
        },{
          name: 'Man of Steel',
          catagorie: 'Comics',
          director: 'Zack Snyder',
          ratting: 5,
          thumb: 'https://i.pinimg.com/originals/b0/2e/e9/b02ee90794c0552f911532afac147300.jpg',
          id: 3
        },{
          name: 'Out Lander',
          catagorie: 'Milatary',
          director: 'Zim Cavizel',
          ratting: 4,
          thumb: 'https://i.pinimg.com/originals/a4/51/18/a451189f12689545ffb5141d606903f8.jpg',
          id: 4
        },{
          name: 'Beauty Kid',
          catagorie: 'Horror',
          director: 'Cristoper Liam',
          ratting: 5,
          thumb: 'https://i.pinimg.com/originals/0e/75/a5/0e75a5bcadec9c3463db9ae450012bcc.jpg',
          id: 5
        },{
          name: 'Blind Love',
          catagorie: 'Romantic',
          director: 'Jemy Heil',
          ratting: 3,
          thumb: 'https://i.pinimg.com/originals/77/83/d7/7783d7cb69830d7adddb8d3b6dc526a9.jpg',
          id: 6
        },
        {
          name: 'Blind Love',
          catagorie: 'Romantic',
          director: 'Jemy Heil',
          ratting: 3,
          thumb: 'https://i.pinimg.com/originals/77/83/d7/7783d7cb69830d7adddb8d3b6dc526a9.jpg',
          id: 7
        },
        {
          name: 'Blind Love',
          catagorie: 'Romantic',
          director: 'Jemy Heil',
          ratting: 3,
          thumb: 'https://i.pinimg.com/originals/77/83/d7/7783d7cb69830d7adddb8d3b6dc526a9.jpg',
          id: 8
        }
      ],
      dataLength: this.state
    }
  }

/*showMore(){
  this.setState({
    ...this.state,
    dataLength: 7
  })
  console.log(this.state.dataLength)
}

showLess(){
  this.setState({
    ...this.state,
    dataLength: 7-3
  })
}*/

  UpdateMoveList = (updateMovie)=>{
    /*let newMovie = this.state.movie.findIndex((data)=>{
      return data.id === id
    })*/
    /*this.setState({
      ...this.state.movie,
      movie
    })*/
    //console.log(movie)
    //console.log(movie.id)
    //let movieInState = [...this.state.movie]
    //console.log(movieInState[movie.id] )
    //movieInState[movie.id] = movie
    //console.log(this.state)
    let movieInState = [...this.state.movie]
    movieInState[updateMovie.id] = updateMovie
    //console.log(movieInState)
    this.setState({
      movie : movieInState
    })
    //console.log(this.state.movie)
  }

  deleteMovie = (deleteMovie)=>{
    let movieInState = [...this.state.movie]
    movieInState.splice(deleteMovie.id,1)
    this.setState({
      movie : movieInState
    })
  }

  render(){
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
          <a className="navbar-brand" href="#">MovieLog</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto my-2 my-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
                <div className="movie-view-block">
                  <View EditHandeler = {this.UpdateMoveList.bind(this)} 
                    DeliteHendeler = {this.deleteMovie.bind(this)} 
                    movie = {this.state.movie} />
                </div>
                <p className="text-center">Email me or Hire me <a href="mailto:wedevslab@gmail.com">wedevslab</a></p>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
