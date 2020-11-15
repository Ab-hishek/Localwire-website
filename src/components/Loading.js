import React,{Component} from 'react';
import { List } from 'react-content-loader';

export class Loading extends Component {
    render(){ 
        var load={
            padding: '20px 0 0 0'
        }

        var aniStyle={
            padding: '20px'
        };
        return(
            <div>
            <div className="list shadow p-0 mb-0 rounded" style={load}>
            <div style={aniStyle}>
            <List />
            </div>
            </div>
            <div className="list shadow p-0 mb-0 rounded" style={load}>
            <div style={aniStyle}>
            <List />
            </div>
            </div>
            <div className="text-center" style={aniStyle}>
                <div className="spinner-border text-secondary" role="status" >
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
            </div>
        );
    }
}