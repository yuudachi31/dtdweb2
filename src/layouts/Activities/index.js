import React, { Fragment, useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import styles from './styles.module.scss';
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
import * as Scroll from 'react-scroll';
import Cookie from 'js-cookie';

const Activities = () => {
  const {
    state: {
      activitiesPage: { activitiesCategory },
    },
    dispatch,
  } = useContext(UIStoreContext);

  const geturlid = window.location.href;
  useEffect(() => {
    if (geturlid.search(/#/i) !== -1) {
      Scroll.scroller.scrollTo('content');
    } else {
      setPageContent(dispatch, DTDActivities);
      setActiveNavItem(dispatch, path.activities);
    }
  }, []);

  useEffect(() => {
    Cookie.set('activitiesCategory', JSON.stringify(activitiesCategory));
  }, [activitiesCategory]);

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
