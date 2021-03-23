import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import path from '../utils/path';

import HomePage from '../layouts/Home';
import StaffPage from '../layouts/Staff';
import StaffDetailPage from '../layouts/StaffDetail';
import NewsPage from '../layouts/News';
import HonorsPage from '../layouts/Honors';
import RulesPage from '../layouts/Rules';
import DownloadsPage from '../layouts/Downloads';

const Routes = () => {
  return (
    <Router>
      <Switch>
        {/* 首頁 */}
        <Route exact path={path.home} component={HomePage} />
        {/* 關於數位 */}
        <Route exact path={path.staff} component={StaffPage} />
        <Route exact path={`${path.staff}/:tea`} component={StaffDetailPage} />
        {/* 最新消息 */}
        <Route exact path={path.news} component={NewsPage} />
        <Route exact path={path.honors} component={HonorsPage} />
        {/* 作品展示 */}
        {/* 下載專區 */}
        <Route exact path={path.rules} component={RulesPage} />
        <Route exact path={path.downloads} component={DownloadsPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
