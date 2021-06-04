import React, { Fragment, useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import styles from './styles.module.scss';
import * as Scroll from 'react-scroll';

import path from '../../utils/path';
import DTDActivities from '../../assets/json/DTDActivities.json';

/* component */
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import PageTitle from '../../components/PageTitle';
import Navbar from '../../components/ActivitiesNavbar';
import ActivitiesContent from '../../components/ActivitiesContent';

/* uiStore */
import { setPageContent, setActiveNavItem } from '../../uiStore/actions';
import { UIStoreContext } from '../../uiStore/reducer';

const Activities = (prop) => {
  const {
    uiState: {
      activitiesPage: { activitiesCategory },
    },
    uiDispatch,
  } = useContext(UIStoreContext);

  const geturlid = window.location.href;

  /*判斷是從哪頁進入系上活動來設定系上活動的內容*/
  useEffect(() => {
    console.log('geturl = ' + prop.match.url);
    if (geturlid.search(/#/i) !== -1) {
      //從ActivityDetail頁回到系上活動，會直接到content的區塊
      Scroll.scroller.scrollTo('content');
      setPageContent(
        uiDispatch,
        JSON.parse(localStorage.getItem('activitiesCategory')),
      );
      setActiveNavItem(uiDispatch, localStorage.getItem('activeItem'));
    } else if (prop.match.url === path.activities) {
      setPageContent(uiDispatch, DTDActivities);
      setActiveNavItem(uiDispatch, path.activities);
    } else {
      setPageContent(
        uiDispatch,
        JSON.parse(localStorage.getItem('activitiesCategory')),
      );
      setActiveNavItem(uiDispatch, localStorage.getItem('activeItem'));
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
