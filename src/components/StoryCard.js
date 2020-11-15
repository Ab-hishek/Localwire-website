import React, { Component } from 'react';
import parse from 'html-react-parser';
import './StoryCard.css';
import { Collapse } from 'reactstrap';

export class StoryCard extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
      }

      toggle(e) {
        this.setState(state => ({ collapse: !state.collapse }));
        /*e.target.style.display="none";*/
      }

      handleClick =(e) =>{
          this.setState({collapse: false});
          /*document.querySelector('a.read').style.display="inline";*/
      }

    buildCardImage = () => {
        if (this.props.image) {
            return (
                <img src={this.props.image} className="card-img-top" alt={this.props.title} />
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    render() {
        var cardStyle = {
            height: '100%',
        };

        var listStyle = {
            padding: '20px 0 0 0'
        };

        var titleStyle={
            fontFamily: 'Georgia',//Bookman
            fontWeight: 'bold'
        }

        var dateStyle={
            fontFamily: 'Bookman',
            fontSize: '1.2em'
        }
        //console.log(this.props.id)
        return (
            <div className="list" style={listStyle}>
                <div className="card shadow p-0 mb-0 rounded" style={cardStyle}>
                {this.buildCardImage()}
                    <div className="card-body">
                        <p style={dateStyle}>{this.props.date}</p>
                        <h2 className="card-title" style={titleStyle}>{this.props.title}</h2>
                        <h6>-{this.props.author}</h6>
                         {parse(this.props.excerpt)}
                        <h6><button className="read" onClick={this.toggle} style={{ marginBottom: '1rem', cursor: "pointer", color: "orange" }}>Read Full Story<i className="fa fa-angle-double-down"></i></button></h6>
                        <Collapse isOpen={this.state.collapse}>
                            {parse(this.props.content)}
                            <div className="closeButton" data-toggle="collapse" data-target="#examplecontent.show">
                            <button type="button" className="close sticky-bottom" aria-label="Close" onClick={this.handleClick}>
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        </Collapse>
                    </div>
                </div>
            </div>
        );
    }
}