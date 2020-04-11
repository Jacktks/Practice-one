import React from 'react';
import axios from 'axios';

import Newtext from '../newText/newText';
import Text from '../Text/Text';
import './Textlist.css';
const API_URL = 'https://5e8d7fc422d8cd0016a79566.mockapi.io/api/comments';

class Textlist extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: [],
        }
        this.create = this.create.bind(this);
        this.delete = this.delete.bind(this);
        this.update = this.update.bind(this);
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


    delete(id){
       this.setState({
            text: this.state.text.filter(e => e.id !== id)
       });
    }

    update(id, updated){
        const update = this.state.text.map(text => {
            if(text.id === id){
                return {...text, text: updated}   
            } return text;
        });
        this.setState({
            text: update
        })
    }


 
    render(){
        const List = this.state.text.map(e => {
            return <Text 
                        key={e.id}
                        id={e.id}
                        update={this.update}
                        remove={this.delete}
                        text={e.text}>{e.text}</Text>
        })
        console.log(this.task);
        console.log(this.state.text)
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