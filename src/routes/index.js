import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { StoreProvider } from '../store/reducer';
import { UIStoreProvider } from '../uiStore/reducer';

import path from '../utils/path';

import HomePage from '../layouts/Home';
// 關於數位
import IntroPage from '../layouts/Intro';
import StaffPage from '../layouts/Staff';
import StaffDetailPage from '../layouts/StaffDetail';
import ActivitiesPage from '../layouts/Activities';
import ActivityDetailPage from '../layouts/ActivityDetail';
import FuturePage from '../layouts/Future';
// 最新消息
import AnnouncementsPage from '../layouts/Announcements';
import AnnouncementDetailPage from '../layouts/AnnouncementDetail';
import AchievementsPage from '../layouts/Achievements';
import AchievementDetailPage from '../layouts/AchievementDetail';
// 招生資訊
import CollegePage from '../layouts/College';
import MasterPage from '../layouts/Master';
import InservicePage from '../layouts/Inservice';
// 作品展示
import GraduationWorksPage from '../layouts/GraduationWorks';
import GraduationWorksDetailPage from '../layouts/GraduationWorksDetail';
import CourseWorksPage from '../layouts/CourseWorks';
import CourseWorksDetailPage from '../layouts/CourseWorksDetail';
import CooperationWorksPage from '../layouts/CooperationWorks';
import CooperationWorksDetailPage from '../layouts/CooperationWorksDetail';
// 下載專區
import RulesPage from '../layouts/Rules';
import DownloadsPage from '../layouts/Downloads';

const Routes = () => {
  return (
    <UIStoreProvider>
      <StoreProvider>
        <Router>
          <Switch>
            {/* 首頁 */}
            <Route exact path={path.home} component={HomePage} />
            {/* 關於數位 */}
            <Route exact path={path.intro} component={IntroPage} />
            <Route exact path={path.staff} component={StaffPage} />
            <Route
              exact
              path={`${path.staff}/:tea`}
              component={StaffDetailPage}
            />
            <Route exact path={path.activities} component={ActivitiesPage} />
            <Route
              exact
              path={`${path.activities}/:category`}
              component={ActivitiesPage}
            />
            <Route
              exact
              path={`${path.activities}/:category/:activityId`}
              component={ActivityDetailPage}
            />
            <Route exact path={path.future} component={FuturePage} />
            {/* 最新消息 */}
            <Route
              exact
              path={path.announcements}
              component={AnnouncementsPage}
            />
            <Route
              exact
              path={`${path.announcements}/:newIndex`}
              component={AnnouncementDetailPage}
            ></Route>
            <Route
              exact
              path={path.achievements}
              component={AchievementsPage}
            />
            <Route
              exact
              path={`${path.achievements}/:newIndex`}
              component={AchievementDetailPage}
            ></Route>
            {/* 招生資訊 */}
            <Route exact path={path.college} component={CollegePage} />
            <Route exact path={path.master} component={MasterPage} />
            <Route exact path={path.inservice} component={InservicePage} />
            {/* 作品展示 */}
            <Route
              exact
              path={path.graduationWorks}
              component={GraduationWorksPage}
            />
            <Route
              exact
              path={`${path.graduationWorks}/:sort/:works`}
              component={GraduationWorksDetailPage}
            />
            <Route exact path={path.courseWorks} component={CourseWorksPage} />
            <Route
              exact
              path={`${path.courseWorks}/:sort/:works`}
              component={CourseWorksDetailPage}
            />
            <Route
              exact
              path={path.cooperationWorks}
              component={CooperationWorksPage}
            />
            <Route
              exact
              path={`${path.cooperationWorks}/:works`}
              component={CooperationWorksDetailPage}
            />
            {/* 下載專區 */}
            <Route exact path={path.rules} component={RulesPage} />
            <Route exact path={path.downloads} component={DownloadsPage} />
          </Switch>
        </Router>
      </StoreProvider>
    </UIStoreProvider>
  );
};

export default Routes;
