import React, { Component } from 'react';
import './App.css';
import View from './view/view'
class App extends Component {
  constructor (){
    super()
    this.state = {
      movie: [
        {
          name: 'Ligting Baby',
          catagorie: 'Horror',
          director: 'Cristoper Liam',
          ratting: 4,
          thumb: 'https://i.pinimg.com/originals/4a/fc/6f/4afc6f3d14881f4c67370033d3146aed.jpg',
          id: 1
        },{
          name: 'Star War',
          catagorie: 'Action',
          director: 'Nolan Liam',
          ratting: 5,
          thumb: 'https://i.pinimg.com/originals/a0/3c/4b/a03c4b4d6c8702586f2aa67aecc744e1.jpg',
          id: 2
        },{
          name: 'False Stem',
          catagorie: 'Action',
          director: 'Nolan Liam',
          ratting: 4,
          thumb: 'https://i.pinimg.com/originals/bb/e3/73/bbe3736ca3522ff81849d90ad89b7031.jpg',
          id: 3
        },{
          name: 'Man of Steel',
          catagorie: 'Comics',
          director: 'Zack Snyder',
          ratting: 5,
          thumb: 'https://i.pinimg.com/originals/b0/2e/e9/b02ee90794c0552f911532afac147300.jpg',
          id: 4
        },{
          name: 'Out Lander',
          catagorie: 'Milatary',
          director: 'Zim Cavizel',
          ratting: 4,
          thumb: 'https://i.pinimg.com/originals/a4/51/18/a451189f12689545ffb5141d606903f8.jpg',
          id: 5
        },{
          name: 'Beauty Kid',
          catagorie: 'Horror',
          director: 'Cristoper Liam',
          ratting: 5,
          thumb: 'https://i.pinimg.com/originals/0e/75/a5/0e75a5bcadec9c3463db9ae450012bcc.jpg',
          id: 6
        },{
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
          id: 7
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

  UpdateMoveList = (movie)=>{
    let newMovie = this.state.movie.findIndex((data)=>{
      return data.id === id
    })
    this.setState({
      ...this.state.movie,
      movie
    })
  }

  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
              <div className="movie-view-block">
                <View EditHandeler = {this.UpdateMoveList} movie = {this.state.movie} />
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default App;
