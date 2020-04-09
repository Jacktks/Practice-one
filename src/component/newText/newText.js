import React from 'react';
import { v4 as uuidv4 } from 'uuid';

class Newtext extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    
    handleSubmit(evt){
        evt.preventDefault();
        this.props.createText({...this.state, id: uuidv4()});
        this.setState({
            text: ""
        })
    }
    

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    render(){
        return(
            <form className="New Text" onSubmit={this.handleSubmit}>
                <label htmlFor="text">New Text!</label>
                <input type="text" id="text" value={this.state.text} placeholder="New text" name="text" onChange={this.handleChange} required/>
                <button>ADD</button>
            </form>
        )
    }
}

export default Newtext;