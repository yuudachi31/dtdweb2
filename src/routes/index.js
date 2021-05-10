import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { StoreProvider } from '../store/reducer';
import { UIStoreProvider } from '../uiStore/reducer';

import path from '../utils/path';

import HomePage from '../layouts/Home';
import StaffPage from '../layouts/Staff';
import StaffDetailPage from '../layouts/StaffDetail';
import NewsPage from '../layouts/News';
import HonorsPage from '../layouts/Honors';
import CollegePage from '../layouts/College';
import MasterPage from '../layouts/Master';
import InservicePage from '../layouts/Inservice';
import RulesPage from '../layouts/Rules';
import DownloadsPage from '../layouts/Downloads';
import FuturePage from '../layouts/Future';
import ActivitiesPage from '../layouts/Activities';

const Routes = () => {
  return (
    <UIStoreProvider>
      <StoreProvider>
        <Router>
          <Switch>
            {/* 首頁 */}
            <Route exact path={path.home} component={HomePage} />
            {/* 關於數位 */}
            <Route exact path={path.staff} component={StaffPage} />
            <Route
              exact
              path={`${path.staff}/:tea`}
              component={StaffDetailPage}
            />
            {/* 最新消息 */}
            <Route exact path={path.news} component={NewsPage} />
            <Route exact path={path.honors} component={HonorsPage} />
            {/* 招生資訊 */}
            <Route exact path={path.college} component={CollegePage} />
            <Route exact path={path.master} component={MasterPage} />
            <Route exact path={path.inservice} component={InservicePage} />
            {/* 下載專區 */}
            <Route exact path={path.rules} component={RulesPage} />
            <Route exact path={path.downloads} component={DownloadsPage} />
            {/* 未來發展 */}
            <Route exact path={path.future} component={FuturePage} />
            {/* 系上活動 */}
            <Route exact path={path.activities} component={ActivitiesPage} />
          </Switch>
        </Router>
      </StoreProvider>
    </UIStoreProvider>
  );
};

export default Routes;
