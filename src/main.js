import Butter from 'buttercms';
import React, { Component } from "react";
import {
	Route,
	NavLink,
	HashRouter
} from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Home from "./home";
import Stuff from "./stuff";
import Contact from "./contact";

const butter = Butter('302d2120f0ad6f28bdf6ec37ba9e4a4a577db0f6');

class Main extends Component {

	constructor(props) {
		super(props);

		this.state = {
			content: null
		};
	}

	componentWillMount() {
		butter.page.retrieve('*', 'homepage').then((resp) => {
			console.log(resp)
			this.setState({
				content: resp.data.data
			})
		});
	}

	render() {
		if (this.state.content) {
			const homepage = this.state.content;

			return (
				<HashRouter>
				<div>
				<AppBar position="static" color="default">
				        <Toolbar>
				          <Typography variant="title" color="inherit">
				            Title
				          </Typography>
				        </Toolbar>
				      </AppBar>
				<Typography variant="display1" gutterBottom>
					Simple SPA
				</Typography>
				<ul className="header">
				<li><NavLink to="/">Home</NavLink></li>
				<li><NavLink to="/stuff">Stuff</NavLink></li>
				<li><NavLink to="/contact">Contact</NavLink></li>
				</ul>
				<div className="content">
				<Route exact path="/" component={Home}/>
				<Route path="/stuff" component={Stuff}/>
				<Route path="/contact" component={Contact}/>
				</div>
				</div>
				</HashRouter>
				);
		} else {
			return (
				<div>
				Loading...
				</div>
				);
		}
	}
}

export default Main;