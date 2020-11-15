import React, { Component } from 'react';
import './Contact.css';
import * as emailjs from 'emailjs-com';

export class Contact extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    handleNameChange = (e) => {
        this.setState({ name: e.target.value });
    }

    handleEmailChange = (e) => {
        this.setState({ email: e.target.value });
    }

    handleMessageChange = (e) => {
        this.setState({ message: e.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.name, this.state.email, this.state.message);
        var templateParams = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        };

        emailjs.send('gmail', 'template_wSTc39vA', '<YOUR USER ID>', templateParams)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                if(response.status === 200){
                    window.location.reload(true);
                    alert("your email is sent");
                }
            }, function (err) {
                console.log('FAILED...', err);
                alert("Oops! "+JSON.stringify(err));
            });
    }

    render() {
        var imgStyle = {
            height: '300px',
            width: '100%'
        }

        return (
            <div className="roll">
                <div className="card wrapper shadow bg-white p-4 mb-0 rounded">
                    <h1>Contact Us</h1>
                    <p>Get in touch and we’ll get back to you as soon as we can. We look forward to hearing from you!</p>
                    <img src={require("../localwire-sticker.jpg")} style={imgStyle} alt="Localwire" />
                    <form className="contact-form" onSubmit={this.handleSubmit}>
                        <h3>Contact Form</h3>
                        <p>Fields marked with an <span className="star">*</span> are required.</p>
                        <div className="form-group">
                            <label htmlFor="name">Name<span className="star">*</span></label>
                            <input type="text" className="form-control" id="exampleInputName" placeholder="Enter Name" onBlur={this.handleNameChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address<span className="star">*</span></label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onBlur={this.handleEmailChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Message<span className="star">*</span></label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message" required onBlur={this.handleMessageChange}></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">SEND</button>
                    </form>
                </div>
            </div>
        );
    }
}