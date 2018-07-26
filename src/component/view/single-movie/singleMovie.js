import React ,{Component} from 'react'
import './singleMovie.css'
import ReactHtmlParser from 'react-html-parser'
//import autobind from 'autobind-decorator'

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
            [e.target.name]: e.target.value
        })
    }

   //@autobind
    add(e) {
        e.preventDefault();
        console.log(this.collectio)
        //this.collection.add(this.state)
        this.refs.form.reset()
        this.setState({
            ...this.state,
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
        this.setState({
            ...this.state,
            isDelete: true
        })
    }
    changeAble(){
        let output = null
        if(this.state.isDelete){
            output = ''
        }
        else if(this.state.isEdit){
            output = (
                <div className="single-movie">
                    <form onSubmit={this.add.bind(this)} ref="form">
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <label for="formField1">Movie Name</label>
                                    <input type="text" className="form-control" id="formField1" name="name" value={this.state.name} onChange={this.handleChange.bind(this)}/>
                                </div>
                                <div className="form-group">
                                    <label for="formField2">Movie Catagorie</label>
                                    <input type="text" className="form-control" id="formField2" name="catagorie" value={this.state.catagorie} onChange={this.handleChange.bind(this)}/>
                                </div>
                                <div className="form-group">
                                    <label for="formField3">Movie Director</label>
                                    <input type="text" className="form-control" id="formField3" name="director" value={this.state.director} onChange={this.handleChange.bind(this)}/>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label for="formField4">Movie Rattting</label>
                                    <input type="text" className="form-control" id="formField4" name="ratting" value={this.state.ratting} onChange={this.handleChange.bind(this)}/>
                                </div>
                                <div className="form-group">
                                    <label for="formField5">Movie Thumb</label>
                                    <input type="text" className="form-control" id="formField5" name="thumb"  value={this.state.thumb} onChange={this.handleChange.bind(this)}/>
                                </div>
                                <div className="form-group">
                                    <label></label>
                                    <button class="btn btn-info btn-lg btn-block" type="submit">Update</button>
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
                    <div className="movie-controller">
                        <button className= 'btn btn-primary btn-lg px-5' onClick={()=>this.editHandelar()} >Edit</button>
                        <button className= 'btn btn-primary btn-lg px-5' onClick={()=>this.deleteHandelar()} >Delete</button>
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