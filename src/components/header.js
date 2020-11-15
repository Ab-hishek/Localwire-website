import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import './header.css';
import {About} from './About';
import {Contact} from './Contact';
import {Privacy} from './Privacy';
import {Content} from './Content';
import {Footer} from './footer';
import ScrollToTop from './ScrollToTop';

export class Header extends Component {
	constructor(props){
		super(props);
		this.state={
			category: '5'
		}
	}


	selectLanguage = (e) => {
		if(e.target.value === "english"){
			/*window.location.reload(true);*/
			this.setState({ category: '5'});
			console.log(this.state.category);
			
		}
		if(e.target.value === "odiya"){
			/*window.location.reload(true);*/
			this.setState({ category: '4'});
			console.log(this.state.category);
		}
	}


	render() {
		var headStyle = { 
			background: 'rgb(252, 252, 252)',
		};

		var logoStyle = {
			width: '10em'
		};

		var cursorStyle= {
			background: 'none',
			border: 'none',
			pointer: 'cursor'
		};
		
		var wordDesign={
			fontFamily: 'Trebuchet MS',
			fontSize: '1.1em' 
		}
		return (
			<Router>
				<div className="header">
					<nav className="navbar navbar-expand-lg navbar-light sticky-top shadow p-1 mb-0 rounded" style={headStyle}>
						<a className="navbar-brand" href="/"><img style={logoStyle} src={require('../assets/localwire_logo_full.png')} alt="LocalWire" /></a>
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav mr-auto" style={wordDesign}>
								<li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
									<NavLink to={'/'} className="nav-link" activeClassName="active">Home <span className="sr-only">(current)</span></NavLink>
								</li>
								<li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
									<NavLink to={'/About'} className="nav-link" activeClassName="active">About Us</NavLink>
								</li>
								<li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
									<NavLink to={'/Contact'} className="nav-link" activeClassName="active">Contact Us</NavLink>
								</li>
								<li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
									<NavLink to={'/Privacy'} className="nav-link" activeClassName="active">Privacy Policy</NavLink>
								</li>
								<li onClick={this.selectLanguage} className="nav-item dropdown" data-toggle="collapse" data-target=".navbar-collapse.show">
									<a href="#" className="nav-link dropdown-toggle" id="navbarDropdown" role="button"
									 data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={cursorStyle}>
									Language
									</a>
									<div className="dropdown-menu" aria-labelledby="navbarDropdown">
									<button className="dropdown-item"  value="english">English</button>
									<button className="dropdown-item"  value="odiya">Odiya</button>
									</div>
								</li>
							</ul>
							<form className="form-inline my-2 my-lg-0">
								<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
								<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
							</form>
						</div>
					</nav>
					<ScrollToTop /> 
					<Switch>
						<Route exact path='/' render={(props) => <Content category={this.state.category} />} />
						<Route path='/Contact' component={Contact} />
						<Route path='/About' component={About} />
						<Route path='/Privacy' component={Privacy}/>
					</Switch>
				</div>
				<Footer />
			</Router>
		);
	}
}
