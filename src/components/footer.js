import React, { Component } from 'react';
import './footer.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


export class Footer extends Component {
	render() {
		var exploreStyle = {
			color: 'white'
		};
		var followList = {
			padding: '6px',
			color: 'white'
		};
		return (
			<footer>
				<div className="footer-wrapper">
					<div className="col-lg-4">
						<h4 className="logo-header"><img src={require('../assets/localwire_logo_full.png')} alt="LocalWire" /></h4>
						<p className="slogan-text">Say <strong>NO</strong> to fake news</p>
					</div>
					<div className="col-lg-2 explore">
						<span style={exploreStyle}>Explore</span>
						<ul type="none" className="explore-list">
							<li className="explore-list-item"><Link to={'/'} className="explore-link">Home</Link></li>
							<li className="explore-list-item"><Link to={'/About'} className="explore-link">About Us</Link></li>
							<li className="explore-list-item"><Link to={'/Contact'} className="explore-link">Contact Us</Link></li>
						</ul>
					</div>
					<div className="col-lg-3 follow-list">
						<span style={followList}>Follow</span>
						<ul type="none" className="follow-list">
							<li className="follow-list-item"><a href="https://www.facebook.com/LocalwireOdisha/" className="follow-link" rel="noopener noreferrer" target="_blank"><i className="fa fa-facebook"></i> Facebook</a></li>
							<li className="follow-list-item"><a href="https://www.youtube.com/channel/UCS2UjbDsCuT6M_eu1PIu8pA" className="follow-link" rel="noopener noreferrer" target="_blank"><i className="fa fa-youtube"></i> Youtube</a></li>
							<li className="follow-list-item"><a href="https://twitter.com/wire_local" className="follow-link" rel="noopener noreferrer" target="_blank"><i className="fa fa-twitter"></i> Twitter</a></li>
							<li className="follow-list-item"><a href="https://www.linkedin.com/company/local-wire/about/" className="follow-link" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin"></i> LinkedIn</a></li>
						</ul>
					</div>
				</div>
				<div className="copyright">
					&copy; 2019 LocalWire. All Rights Reserved
  				</div>  
			</footer>
		);
	}
}
