import React, { Component } from 'react';
import './Sidebar.css';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

export class Sidebar extends Component {
  /*handleClick = (event) => {
    document.querySelector('li.active').classNameList.remove('active');
    event.target.classNameList.add('active');
    console.log('Click happened');
  }

  getOffset = (element) => {
		var bounding = element.getBoundingClientRect();
		return {
			top: bounding.top + document.body.scrollTop,
			left: bounding.left + document.body.scrollLeft
		  };
	  }
  
	  handleScroll = () => {
		 var navbar = this.refs.navbar;
		 var startElement = this.refs.sec2;
		 var offset = this.getOffset(startElement)    
		 var windowsScrollTop  = window.pageYOffset;
		 if(windowsScrollTop >= offset.top){     
		   navbar.classNameList.add("fixed-top");           
		 }else{
		   navbar.classNameList.remove("fixed-top");   
		 }
	  }

	  componentDidMount() {
		  window.addEventListener('scroll', this.handleScroll);        
	  }
  
	  componentWillUnmount() {
	  window.removeEventListener('scroll', this.handleScroll);
    }*/

  render() {
    return (
      <div className="sidebar">
        <nav className="sidebar-nav navbar navbar-expand-lg navbar-light shadow p-3 mb-0 rounded" ref="navbar" id="nav" role="navigation">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>Categories
                    </button>
          <div className="collapse-side collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                <NavLink to={'/Happenings'} className="nav-link" activeClassName="active">HAPPENINGS <span className="sr-only">(current)</span></NavLink>
              </li>
              <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                <NavLink to={'/Special'} className="nav-link" activeClassName="active">SPECIAL</NavLink>
              </li>
              <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                <NavLink to={'/Business'} className="nav-link" activeClassName="active">BUSINESS</NavLink>
              </li>
              <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                <NavLink to={'/Education'} className="nav-link" activeClassName="active">EDUCATION</NavLink>
              </li>
              <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                <NavLink to={'/Health'} className="nav-link" activeClassName="active">HEALTH</NavLink>
              </li>
              <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                <NavLink to={'/Politics'} className="nav-link" activeClassName="active">POLITICS</NavLink>
              </li>
              <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                <NavLink to={'/Election'} className="nav-link" activeClassName="active">ELECTION-2019</NavLink>
              </li>
              <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                <NavLink to={'/Sports'} className="nav-link" activeClassName="active">SPORTS</NavLink>
              </li>
              <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                <NavLink to={'/Cyclone'} className="nav-link" activeClassName="active">CYCLONE-FANI-2019</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}