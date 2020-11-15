import React,{Component} from 'react';
import { Categories } from '../components/Categories';

export class Happenings extends Component {
    constructor(props){
        super(props);
        this.state={
            url: this.props.url
        }
    }
    
    render(){
        return(
            <div>
                <Categories url={this.state.url} />
            </div>
        );
    }
}