import React, { Component,useState } from 'react';
import './Content.css';
import {  BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ScrollUpButton from "react-scroll-up-button";
import { Sidebar } from './Sidebar';
import { Categories } from './Categories';
import { Happenings } from '../category/Happenings';
/*import { Special } from './Special';
import { Business } from './Business';
import { Education } from './Education';
import { Health } from './Health';
import { Politics } from './Politics';
import { Election } from './Election';
import { Sports } from './Sports';
import { Cyclone } from './Cyclone';*/


export class Content extends Component {
    render() {
        const { category } = this.props;
        console.log(category);
        const browserHistory = createBrowserHistory();
        return (
            <Router history={browserHistory}>
                <div className="content">
                    <div className="side">
                        <Sidebar />
                    </div>
                    <div className="mainContent">
                        <Switch>
                            <Route exact path='/' history={this.browserHistory} refresh={this.forceUpdate} render={(props) => <Categories key="home" url={`http://localwire.me/wp-json/wp/v2/posts/?_embed=1&categories=${category}`} />} />
                            <Route path='/Happenings' history={this.browserHistory} refresh={this.forceUpdate} render={(props) => <Categories key="Happenings" url={`http://localwire.me/wp-json/wp/v2/posts/?_embed=1&tags=15334&categories=${category}`} />}/>
                            <Route path='/Special' /*history={browserHistory}*/ render={(props) => <Categories key="Special" url={`http://localwire.me/wp-json/wp/v2/posts/?_embed=1&tags=17950&categories=${category}`} />} />
                            <Route exact path='/Business' /*history={browserHistory}*/ render={(props) => <Categories key="Business" url={`http://localwire.me/wp-json/wp/v2/posts/?_embed=1&tags=4254&categories=${category}`} />} />
                            <Route path='/Education' /*history={browserHistory}*/ render={(props) => <Categories key="Education" url={`http://localwire.me/wp-json/wp/v2/posts/?_embed=1&tags=63&categories=${category}`} />} />
                            <Route path='/Health' /*history={browserHistory}*/ render={(props) => <Categories key="Health" url={`http://localwire.me/wp-json/wp/v2/posts/?_embed=1&tags=15331&categories=${category}`} />} />
                            <Route path='/Politics' /*history={browserHistory}*/ render={(props) => <Categories key="Politics" url={`http://localwire.me/wp-json/wp/v2/posts/?_embed=1&tags=16&categories=${category}`} />} />
                            <Route path='/Election' /*history={browserHistory}*/ render={(props) => <Categories key="Election" url={`http://localwire.me/wp-json/wp/v2/posts/?_embed=1&tags=28301&categories=${category}`} />} />
                            <Route path='/Sports' /*history={browserHistory}*/ render={(props) => <Categories key="Sports" url={`http://localwire.me/wp-json/wp/v2/posts/?_embed=1&tags=14285&categories=${category}`} />} />
                            <Route path='/Cyclone' /*history={browserHistory}*/ render={(props) => <Categories key="Cyclone" url={`http://localwire.me/wp-json/wp/v2/posts/?_embed=1&tags=41947&categories=${category}`} />} />
                        </Switch>
                    </div>
                    <ScrollUpButton />
                </div>
            </Router>
        );
    }
}