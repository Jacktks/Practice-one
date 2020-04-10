import React from 'react';
import './Text.css';

class Text extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: this.props.text,
        }
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(){
        this.props.remove(this.props.id);
    }

    render(){
        return(
                <tr>
                    <td>{this.props.children}</td>
                    <td className="Delete">
                        <button onClick={this.handleDelete}>Delete</button>
                    </td>
                </tr>
        )
    }
}
export default Text;