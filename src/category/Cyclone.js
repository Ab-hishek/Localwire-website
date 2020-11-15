import React,{Component} from 'react';
import { Categories } from './Categories';

export class Cyclone extends Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div>
                <Categories url={this.props.url} />
            </div>
        );
    }
}