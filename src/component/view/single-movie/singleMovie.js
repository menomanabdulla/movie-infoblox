import React ,{Component} from 'react'
import './singleMovie.css'
import ReactHtmlParser from 'react-html-parser'
//import autobind from 'autobind-decorator'

class SinglMovie extends Component{
    constructor (props){
        super(props)
        //this.movie = this.props
        //console.log(this.props)
        this.state = {
            singleMovie: this.props.singleMovie,
            isEdit: false
        }
    }

    ratting(){
        let length = this.props.singleMovie.ratting,i=0
        if(length>5){
            length = 5
        }
        let star = '<i class="fas fa-star"></i>'
        let ratting = []
        while(i<length){
            ratting.push(star)
            i++;
        }
        let result = (
            ratting.toLocaleString()
        )
        result = result.replace(/,/g, '');
        return  ReactHtmlParser(result)
    }

   //@autobind
    handleChange(e) {
        this.setState({
            ...this.state,
            singleMovie:{
                ...this.state.singleMovie,
                [e.target.name]: e.target.value
            }
        })
    }

   //@autobind
    add(e) {
        e.preventDefault();
       // this.refs.form
        //console.log(this.refs.form.reset())
        //this.refs.form[0].reset()

       
        //console.log(this.state.singleMovie)
        this.props.MovieUpdate(this.state.singleMovie)
         this.setState({
            isEdit: false,
            isDelete: false
        })
    }
    editHandelar(){
        this.setState({
            ...this.state,
            isEdit: true
        })
    }
    deleteHandelar(){
       this.props.MovieDelete(this.state.singleMovie)
       // console.log(this.props.MovieDelete)
    }
    changeAble(){
        let output = null
        if(this.state.isEdit){
            output = (
                <div className="single-movie">
                    <form onSubmit={this.add.bind(this)} ref="form">
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="formField1">Movie Name</label>
                                    <input type="text" className="form-control" id="formField1" name="name" value={this.state.singleMovie.name} onChange={this.handleChange.bind(this)}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="formField2">Movie Catagorie</label>
                                    <input type="text" className="form-control" id="formField2" name="catagorie" value={this.state.singleMovie.catagorie} onChange={this.handleChange.bind(this)}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="formField3">Movie Director</label>
                                    <input type="text" className="form-control" id="formField3" name="director" value={this.state.singleMovie.director} onChange={this.handleChange.bind(this)}/>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="formField4">Movie Rattting</label>
                                    <input type="text" className="form-control" id="formField4" name="ratting" value={this.state.singleMovie.ratting} onChange={this.handleChange.bind(this)}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="formField5">Movie Thumb</label>
                                    <input type="text" className="form-control" id="formField5" name="thumb"  value={this.state.singleMovie.thumb} onChange={this.handleChange.bind(this)}/>
                                </div>
                                <div className="form-group">
                                    <label></label>
                                    <button className="btn btn-info btn-lg btn-block" type="submit">Update</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            )  
        }else{
            output = (
                <div className="single-movie">
                    <div className="movie-info-block">
                        <div className="block-inner">
                            <h4>{this.props.singleMovie.name}</h4>
                            <p>{this.props.singleMovie.catagorie}</p>
                            <p>{this.props.singleMovie.director}</p>
                        </div>
                    </div>
                    <div className="movie-ratting-block">
                    {
                        this.ratting()
                    }
                    </div>
                    <div className="movie-thumb-block">
                        <img src={this.props.singleMovie.thumb} alt='img'/>
                    </div>
                    <div className="movie-controller">
                        <button className= 'btn btn-primary btn-lg px-5 ml-2' onClick={()=>this.editHandelar()} >Edit</button>
                        <button className= 'btn btn-danger btn-lg px-5 ml-2' onClick={()=>this.deleteHandelar()} >Delete</button>
                    </div>
                </div>
            )
        }
        return output
    }
    render(){
        return(
            <div>
                {this.changeAble()}
            </div>
        )
    }
}

export default SinglMovie