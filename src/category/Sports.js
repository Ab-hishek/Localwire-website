import React, { Component } from 'react';
import { Categories } from './Categories';

export class Sports extends Component {
    render() {
        return (
            <div>
                <Categories url={this.props.url} />
            </div>
        );
    }
}