import Butter from 'buttercms';
import React, { Component } from "react";
import {
	Route,
	NavLink,
	HashRouter
} from "react-router-dom";
import Scrollchor from "react-scrollchor";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Header from './material-kit-react/components/header.jsx';
import HeaderLinks from './material-kit-react/components/headerLinks.jsx';
import Parallax from './material-kit-react/components/parallax.jsx';
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
		 const { classes, ...rest } = this.props;
		if (this.state.content) {
			const homepage = this.state.content;

			return (
				<HashRouter>
					<div>
						<Header
							color="transparent"
							brand="Material Kit React"
							rightLinks={<HeaderLinks />}
							fixed
							changeColorOnScroll={{
								height: 200,
								color: "white"
							}}
							{...rest}
						/>

						<Parallax small filter image={require("./assets/img/profile-bg.jpg")} />
						
						<Typography variant="display1" id="top" gutterBottom>
							Simple SPA
						</Typography>

			          	<h1 id="one">Section One</h1>
				        <Lorem />

				        <h1 id="two">Section Two</h1>
				        <p><Scrollchor to="#top">Top</Scrollchor></p>
				        <Lorem />

				        <h1 id="three">Section Three</h1>
				        <p><Scrollchor to="">Home</Scrollchor></p>
				        <Lorem />	
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

const Lorem = () =>
    <div style={{height: '1000px'}}>
        <p>Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.</p>
        <p>Sunt ad dolore quis aute consequat. Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.</p>
        <p>Est velit labore esse esse cupidatat. Velit id elit consequat minim. Mollit enim excepteur ea laboris adipisicing aliqua proident occaecat do do adipisicing adipisicing ut fugiat. Consequat pariatur ullamco aute sunt esse. Irure excepteur eu non eiusmod. Commodo commodo et ad ipsum elit esse pariatur sit adipisicing sunt excepteur enim.</p>
        <p>Incididunt duis commodo mollit esse veniam non exercitation dolore occaecat ea nostrud laboris. Adipisicing occaecat fugiat fugiat irure fugiat in magna non consectetur proident fugiat. Commodo magna et aliqua elit sint cupidatat. Sint aute ullamco enim cillum anim ex. Est eiusmod commodo occaecat consequat laboris est do duis. Enim incididunt non culpa velit quis aute in elit magna ullamco in consequat ex proident.</p>
        <p>Dolore incididunt mollit fugiat pariatur cupidatat ipsum laborum cillum. Commodo consequat velit cupidatat duis ex nisi non aliquip ad ea pariatur do culpa. Eiusmod proident adipisicing tempor tempor qui pariatur voluptate dolor do ea commodo. Veniam voluptate cupidatat ex nisi do ullamco in quis elit.</p>
    </div>