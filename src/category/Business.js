import React, { Component } from 'react';
import { Categories } from './Categories';

export class Business extends Component {
    render() {
        console.log("Business")
        return (
            <div>
                <Categories url={this.props.url} />
            </div>
        );
    }
}