import React, { Component } from 'react';
import Butter from 'buttercms'

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
				<div>
          			<h1>Simple SPA</h1>
          			<ul className="header">
            			<li><a href="/">Home</a></li>
            			<li><a href="/stuff">Stuff</a></li>
            			<li><a href="/contact">Contact</a></li>
          			</ul>
          			<div className="content">
          			</div>
        		</div>
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