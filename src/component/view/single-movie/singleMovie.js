import React ,{Component} from 'react'
import './singleMovie.css'
import ReactHtmlParser from 'react-html-parser'
import autobind from 'autobind-decorator'

class SinglMovie extends Component{
    constructor (props){
        super(props)
        //this.movie = this.props
        //console.log(this.props.movie)
        this.state = {
            name: this.props.singleMovie.name,
            catagorie: this.props.singleMovie.catagorie,
            director: this.props.singleMovie.director,
            ratting: this.props.singleMovie.ratting,
            thumb: this.props.singleMovie.thumb,
            isEdit: false
        }
    }

    ratting(){
        let length = this.state.ratting,i=0
        let star = '<i class="fas fa-star"></i>'
        let ratting = []
        while(i<length){
            ratting.push(star)
            i++;
        }
        let result = (
            ratting.toLocaleString()
        )
        //console.log( ReactHtmlParser(result))
        
        return  ReactHtmlParser(result)
    }

    @autobind
    handleChange(e) {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    @autobind
    add(e) {
        e.preventDefault();
        this.collection.add(this.state)
        this.refs.form.reset()
        this.setState({
            ...this.state,
            isEdit: false
        })
    }

    changeAble(){
        let output = null
        if(this.state.isEdit){
            output = (
                <div className="single-movie-inner-block">
                    <h1>Edit here</h1>
                    <form onSubmit={this.add} ref="form">
                        <input type="text" name="name" onChange={this.handleChange}/>
                        <input type="text" name="catagorie" onChange={this.handleChange}/>
                        <input type="text" name="director" onChange={this.handleChange}/>
                        <input type="text" name="ratting" onChange={this.handleChange}/>
                        <input type="text" name="thumb" onChange={this.handleChange}/>
                        <button type="submit">Update</button>
                    </form>
                </div>
            )  
        }else{
            output = (
                <div className="single-movie-inner-block">
                    <div className="movie-info-block">
                        <div className="block-inner">
                            <h4>{this.state.name}</h4>
                            <p>{this.state.catagorie}</p>
                            <p>{this.state.director}</p>
                        </div>
                    </div>
                    <div className="movie-ratting-block">
                    
                    {
                        this.ratting()
                    }
                    </div>
                    <div className="movie-thumb-block">
                        <img src={this.state.thumb} alt='img'/>
                    </div>
                </div>
            )
        }
        return output
    }
    editHandelar(){
        this.setState({
            ...this.state,
            isEdit: true
        })
    }
    render(){
        return(
            <div>
                {this.changeAble()}
                <div className="controller">
                    <button className= 'btn btn-primary btn-lg px-5 m-2' onClick={()=>this.editHandelar()} >Edit</button>
                </div>
            </div>
        )
    }
}

export default SinglMovie