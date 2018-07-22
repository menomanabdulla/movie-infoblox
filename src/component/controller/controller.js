import React ,{Component} from 'react'
import './controller.css'
class Controller extends Component{
    moreHandeller(){
        this.props.more();
    }
    lessHandeller(){
        this.props.less();
    }

    render(){
        return(
            <div className="digit-block">
                <button className= 'btn btn-primary btn-lg px-5 m-2' onClick={event=>this.moreHandeller()} >More</button>
                <button className= 'btn btn-warning btn-lg px-5 m-2' onClick={event=>this.lessHandeller()} >Less</button>
            </div>
        )
    }
}

export default Controller