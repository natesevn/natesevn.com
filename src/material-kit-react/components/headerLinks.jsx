/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
import Scrollchor from "react-scrollchor";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "./customDropdown.jsx";
import Button from "./button.jsx";

import headerLinksStyle from "../styles/headerLinksStyles.jsx";

const linkStyle = {
	textDecoration: 'none',
	color:'inherit'
} 

function HeaderLinks({ ...props }) {
	const { classes } = props;
	return (
		<List className={classes.list}>
			<ListItem className={classes.listItem}>
				<Button
				color="transparent"
				className={classes.navLink}
				>
					<Scrollchor style={linkStyle} animate={{offset: -100}} to="#one">About</Scrollchor>
				</Button>
			</ListItem>

			<ListItem className={classes.listItem}>
				<Button
				color="transparent"
				className={classes.navLink}
				>
					<Scrollchor style={linkStyle} animate={{offset: -100}} to="#two">Home</Scrollchor>
				</Button>
			</ListItem>

			<ListItem className={classes.listItem}>
				<Button
				color="transparent"
				className={classes.navLink}
				>
					<Scrollchor style={linkStyle} animate={{offset: -100}} to="#three">Stuff</Scrollchor>
				</Button>
			</ListItem>

			<ListItem className={classes.listItem}>
				<Button
				color="transparent"
				className={classes.navLink}
				>
					<Scrollchor style={linkStyle} animate={{offset: -100}} to="#four">Contact</Scrollchor>
				</Button>
			</ListItem>
		</List>
	);
}

export default withStyles(headerLinksStyle)(HeaderLinks);
