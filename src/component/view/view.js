import React ,{Component} from 'react'
import './view.css'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'
class View extends Component{
    
    ratting(){
        let length = this.props.movie.ratting,i=0
        let star = '<i class="fas fa-star"></i>'
        let ratting = []
        while(i<length){
            ratting.push(star)
            i++;
        }
        
        let result = (
            ratting.toLocaleString()
        )
        console.log(result)
        //console.log( ReactHtmlParser(result))
        
        return  ReactHtmlParser(result)
        

    }
    render(){
        return(
            <div className="single-movie">
                <div className="movie-info-block">
                    <div className="block-inner">
                        <h4>{this.props.movie.name}</h4>
                        <p>{this.props.movie.catagorie}</p>
                        <p>{this.props.movie.director}</p>
                    </div>
                </div>
                <div className="movie-ratting-block">
                
                   {
                       this.ratting()
                   }
                </div>
                <div className="movie-thumb-block">
                    <img src={this.props.movie.thumb} alt='img'/>
                </div>
            </div>
        )
    }
}

export default View