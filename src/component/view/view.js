import React ,{Component} from 'react'
import './view.css'
import SingleMovie from './single-movie/singleMovie'
class View extends Component{
    constructor (props){
        super(props)
    }

    render(){
        return(
            <div>
                {
                    this.props.movie.map((item,index)=>{
                        return <SingleMovie key = {index} 
                        singleMovie = {item}
                        MovieUpdate = {this.props.EditHandeler}
                        />
                    })
                }
            </div>
        )
    }
}

export default View