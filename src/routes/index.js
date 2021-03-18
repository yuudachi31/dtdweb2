import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from '../layouts/Home';
import TeacherPage from '../layouts/Teacher';
import TreachdetailPage from '../layouts/TeachDetail';
import RulesPage from '../layouts/Rules';
import DownloadPage from '../layouts/Download';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/download" component={DownloadPage} />
        <Route exact path="/rules" component={RulesPage} />
        <Route exact path="/teacher/tea" component={TreachdetailPage} />
        <Route exact path="/teacher" component={TeacherPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Router>
  );
};

export default Routes;
