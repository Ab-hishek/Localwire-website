import React, {Component} from 'react';
import './About.css';

export class About extends Component {
    render(){
        var imgStyle={
            height: '300px',
            width: '100%'
        }
        return(
            <div className="roll">
                <div className="card wrap shadow bg-white p-4 mb-0 rounded">
                        <h1><b>About Us</b></h1><br/>
                        <img src={require("../localwire-sticker.jpg")} style={imgStyle} alt="Localwire" /><br/>
                        <h5>Why Localwire</h5>
                        <p>LocalWire is the first-of-its-kind hyper-local news publishing and delivery system that aims to provide credible local news with a strict editorial standard.<br/><br/>
                            Our grassroots coverage is in local language, along with English for a broader spectrum of readers.<br/><br/>
                            LocalWire has built technology-driven modern newsrooms and engaged highly skilled journalists at different locations.<br/><br/>
                            Users can get their LocalWire news via Web, App, IVRS, SMS and other online platforms.<br/><br/>
                            LocalWire is for everybody!
                        </p><br/>
                        <h5>LocalWire aims to solve fake news.</h5>
                        <p>
                        In recent months, there have been several incidents of lynching, suicide and other violence caused by the spread of fake news. This is a worldwide trend.<br/><br/>
                        Innocent lives are at stake due to misinformation fanned by vested interests. Propaganda-laden news and fake news are disturbing trends that are undermining the social fabric of our communities.<br/><br/>
                        LocalWire aims to fix such hoaxes by encouraging hyper-local journalism: defusing misinformation at its origin by gathering and putting out unbiased and authentic news content of a world-className journalistic standard.<br/><br/>
                        </p><br/>
                        <b>Jatindra Dash</b>
                        <b>Founder & Editor</b>
                        <b>LocalWire</b>
                </div>
            </div>
        );
    }
}