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

function HeaderLinks({ ...props }) {
	const { classes } = props;
	return (
		<List className={classes.list}>
			<ListItem className={classes.listItem}>

				<CustomDropdown
					noLiPadding
					buttonText="Components"
					buttonProps={{
						className: classes.navLink,
						color: "transparent"
					}}
					buttonIcon={Apps}
					dropdownList={[
						<Link to="/" className={classes.dropdownLink}>
							All components
						</Link>,

						<a
							href="https://creativetimofficial.github.io/material-kit-react/#/documentation"
							target="_blank"
							className={classes.dropdownLink}
						>
							Documentation
						</a>
					]}
				/>
			</ListItem>

			<ListItem className={classes.listItem}>
				<Button
				color="transparent"
				className={classes.navLink}
				>
					<Scrollchor  animate={{offset: -100}} to="#one">Home</Scrollchor>
				</Button>
			</ListItem>

			<ListItem className={classes.listItem}>
				<Button
				color="transparent"
				className={classes.navLink}
				>
					<Scrollchor  animate={{offset: -100}} to="#two">Stuff</Scrollchor>
				</Button>
			</ListItem>

			<ListItem className={classes.listItem}>
				<Button
				color="transparent"
				className={classes.navLink}
				>
					<Scrollchor  animate={{offset: -100}} to="#three">Contact</Scrollchor>
				</Button>
			</ListItem>
		</List>
	);
}

export default withStyles(headerLinksStyle)(HeaderLinks);
