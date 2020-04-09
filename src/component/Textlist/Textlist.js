import React from 'react';
import axios from 'axios';

import Newtext from '../newText/newText';
import './Textlist.css';
const API_URL = 'https://5e8d7fc422d8cd0016a79566.mockapi.io/api/comments';

class Textlist extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: [],
        }
        this.create = this.create.bind(this);
    }

    async componentDidMount(){
        let API = await axios.get(API_URL);
        this.setState({
            text: API.data,
        })
    }

    create(newText){
        this.setState({
            text: [
                ...this.state.text,
                newText
            ]
        })
    }

 
    render(){
        const List = this.state.text.map(e => {
            return <tr key={e.id}>
                <td>{e.text}</td>
            </tr>
        })
        return(
            <div className="container">
            <br />
            <br />
            <h2>List Text</h2>
            <Newtext createText={this.create}/>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name text</th>
                    </tr>
                </thead>
                <tbody>
                   {List}
                </tbody>
            </table>
        </div>
        )
    }
       
}
export default Textlist;