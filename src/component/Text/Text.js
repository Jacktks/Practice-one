import React from 'react';
import './Text.css';

class Text extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            text: this.props.text, //Bi warning khi su dung form input k duoc coi la nguon du lieu dang tin cay!
            isEdit: false
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
    }

    

    handleDelete(){
        this.props.remove(this.props.id);
    }

    handleUpdate(evt){
        evt.preventDefault();
        this.props.update(this.props.id, this.state.text)
        this.setState({
            isEdit: false
        })
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    toggleForm(){
        this.setState({
            isEdit: true
        })
    }

    render(){
        let result;
        if(this.state.isEdit){
            result = (
                <tr>
                    <td>
                        <form onSubmit={this.handleUpdate}>
                            <input type="text" value={this.state.text} name="text" onChange={this.handleChange}/>
                            <button>Save</button>
                        </form>
                    </td>
                </tr>
            )
        } else {
            result = (
                <tr>
                    <td>{this.props.children}</td>
                    <td>
                        <button className="Edit" onClick={this.toggleForm}>Edit</button>
                    </td>
                    <td className="Delete">
                        <button onClick={this.handleDelete}>Delete</button>
                    </td>
                </tr>
            )
        }
        return result
    }
}
export default Text;