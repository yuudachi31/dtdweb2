import React, { Fragment, useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import styles from './styles.module.scss';
import * as Scroll from 'react-scroll';
import Cookie from 'js-cookie';
/*component*/
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import PageTitle from '../../components/PageTitle';
import Navbar from '../../components/ActivitiesNavbar';
import ActivitiesContent from '../../components/ActivitiesContent';
/*uiStore*/
import { setPageContent, setActiveNavItem } from '../../uiStore/actions';
import { UIStoreContext } from '../../uiStore/reducer';

import path from '../../utils/path';
import DTDActivities from '../../assets/json/DTDActivities.json';

const Activities = (prop) => {
  const {
    state: {
      activitiesPage: { activitiesCategory },
    },
    dispatch,
  } = useContext(UIStoreContext);

  const geturlid = window.location.href;

  useEffect(() => {
    console.log('geturl = ' + prop.match.url);
    if (geturlid.search(/#/i) !== -1) {
      Scroll.scroller.scrollTo('content');
      setPageContent(dispatch, Cookie.getJSON('activitiesCategory'));
      setActiveNavItem(dispatch, Cookie.get('activeItem'));
    } else if (prop.match.url === path.activities) {
      setPageContent(dispatch, DTDActivities);
      setActiveNavItem(dispatch, path.activities);
    } else {
      setPageContent(dispatch, Cookie.getJSON('activitiesCategory'));
      setActiveNavItem(dispatch, Cookie.get('activeItem'));
    }
  }, []);

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>系上活動-國立臺北教育大學</title>
        <meta name="description" content="數位科技設計學系的系上活動" />
      </Helmet>
      <div className={styles.container}>
        <Header />
        <Banner />
        <div className={styles.activityContainer} id="content">
          <PageTitle title="系上活動" />
          <Navbar />
          <ActivitiesContent activitiesCategory={activitiesCategory} />
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Activities;
