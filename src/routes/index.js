import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from '../layouts/Home';
import TeacherPage from '../layouts/Teacher';
import TreachdetailPage from '../layouts/TeachDetail';
import NewsPage from '../layouts/News';
import HonorsPage from '../layouts/Honors';
import RulesPage from '../layouts/Rules';
import DownloadPage from '../layouts/Download';

const Routes = () => {
  return (
    <Router>
      <Switch>
        {/* 首頁 */}
        <Route exact path="/" component={HomePage} />
        {/* 關於數位 */}
        <Route exact path="/teacher" component={TeacherPage} />
        <Route exact path="/teacher/:tea" component={TreachdetailPage} />
        {/* 最新消息 */}
        <Route exact path="/news" component={NewsPage} />
        <Route exact path="/honors" component={HonorsPage} />
        {/* 作品展示 */}
        {/* 下載專區 */}
        <Route exact path="/rules" component={RulesPage} />
        <Route exact path="/download" component={DownloadPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
