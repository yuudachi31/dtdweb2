import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import styles from './styles.module.scss';
import * as Scroll from 'react-scroll';

/* component */
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import PageTitle from '../../components/PageTitle';
import Navbar from '../../components/ActivitiesNavbar';
import ActivitiesContent from '../../components/ActivitiesContent';
import { getJSON } from '../../components/GetJson';

/* uiStore */
import { setPageContent, setActiveNavItem } from '../../uiStore/actions';
import { UIStoreContext } from '../../uiStore/reducer';

const Activities = () => {
  const {
    uiState: {
      activitiesPage: { activitiesCategory },
      activitiesNavBar: { activeItem },
    },
    uiDispatch,
  } = useContext(UIStoreContext);

  var pathName;
  if (location.hash.substring(1).includes('#')) {
    pathName = location.hash.substring(1).replace('#content', '');
  } else {
    pathName = location.hash.substring(1);
  }
  const [finishPageContent, setfinishPageContent] = useState(false);

  const urlSetReducer = () => {
    setPageContent(uiDispatch, getJSON(pathName));
    setActiveNavItem(uiDispatch, pathName);
  };

  useEffect(() => {
    urlSetReducer();
    Scroll.scroller.scrollTo('content');
  }, []);

  useEffect(() => {
    setPageContent(uiDispatch, getJSON(pathName));
  }, [activeItem]);

  useEffect(() => {
    if (getJSON(pathName) === activitiesCategory) {
      setfinishPageContent(true);
    } else {
      setfinishPageContent(false);
    }
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
        <Banner bannerNumber={4} />
        <div className={styles.activityContainer} id="content">
          <PageTitle title="系上活動" />
          <Navbar />
          {finishPageContent ? (
            <ActivitiesContent activitiesCategory={activitiesCategory} />
          ) : (
            <></>
          )}
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Activities;
