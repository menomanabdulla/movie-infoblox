import React, { Component } from 'react';
import './App.css';
import View from './view/view'

class App extends Component {
  constructor (){
    super()
    this.movie=[
      {
        name: 'Man of Steel',
        catagorie: 'Comics',
        director: 'Zack Snyder',
        ratting: 5,
        thumb: 'https://i.pinimg.com/originals/b0/2e/e9/b02ee90794c0552f911532afac147300.jpg'
      },{
        name: 'Out Lander',
        catagorie: 'Milatary',
        director: 'Zim Cavizel',
        ratting: 4,
        thumb: 'https://i.pinimg.com/originals/a4/51/18/a451189f12689545ffb5141d606903f8.jpg'
      },{
        name: 'Beauty Kid',
        catagorie: 'Horror',
        director: 'Cristoper Liam',
        ratting: 5,
        thumb: 'https://i.pinimg.com/originals/0e/75/a5/0e75a5bcadec9c3463db9ae450012bcc.jpg'
      },{
        name: 'Blind Love',
        catagorie: 'Romantic',
        director: 'Jemy Heil',
        ratting: 3,
        thumb: 'https://i.pinimg.com/originals/77/83/d7/7783d7cb69830d7adddb8d3b6dc526a9.jpg'
      },{
        name: 'Ligting Baby',
        catagorie: 'Horror',
        director: 'Cristoper Liam',
        ratting: 4,
        thumb: 'https://i.pinimg.com/originals/4a/fc/6f/4afc6f3d14881f4c67370033d3146aed.jpg'
      },{
        name: 'Star War',
        catagorie: 'Action',
        director: 'Nolan Liam',
        ratting: 5,
        thumb: 'https://i.pinimg.com/originals/a0/3c/4b/a03c4b4d6c8702586f2aa67aecc744e1.jpg'
      },{
        name: 'False Stem',
        catagorie: 'Action',
        director: 'Nolan Liam',
        ratting: 4,
        thumb: 'https://i.pinimg.com/originals/bb/e3/73/bbe3736ca3522ff81849d90ad89b7031.jpg'
      }
    ]
  }
  
  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-9">
              <div className="movie-view-block">
                {
                  this.movie.map((item,index) => {
                    return <View key = {index} movie = {item} />
                  })
                }
              </div>
            </div>
            <div className="col-md-3">
              <div className="movie-controller-block">

              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default App;
