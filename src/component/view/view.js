import React ,{Component} from 'react'
import './view.css'
import SingleMovie from './single-movie/singleMovie'
class View extends Component{
    constructor (props){
        super(props)
        //this.movie = this.props
        //console.log(this.props.movie)
    }

    render(){
        return(
            <div className="single-movie">
                {
                    this.props.movie.map((item,index)=>{
                        return <SingleMovie key = {index} singleMovie = {item} />
                    })
                }
            </div>
        )
    }
}

export default View