import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostsIndex} />
  </Route>
);

 //lecture 75 indexroute means that when you go to the parent route you end up rendering the posts index as well
