import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from '../layouts/Home';
import NewsPage from '../layouts/News';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/news" component={NewsPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
