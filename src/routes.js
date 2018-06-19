import React from 'react';
import { Router, IndexRoute, Route } from 'react-router';

import Main from './containers/main';
import Blog from './containers/blog';
import BlogList from './components/blogList';
import BlogPost from './components/blogPost';

const Routes = (props) => (
	<Router {...props}>
		<Route path="/" component={Main} />
		<Route path="/blogs" component={Blog}>
			<IndexRoute component={BlogList} />
			<Route path="/p/:page" component={BlogList} />
			<Route path="/post/:slug" component={BlogPost} />
		</Route>
	</Router>
);

export default Routes;