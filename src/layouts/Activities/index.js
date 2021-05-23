import React, { Fragment, useContext } from 'react';
import { Helmet } from 'react-helmet';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import PageTitle from '../../components/PageTitle';
import Navbar from '../../components/ActivitiesNavbar';
import ActivitiesContent from '../../components/ActivitiesContent';

import { UIStoreContext } from '../../uiStore/reducer';

import styles from './styles.module.scss';

const Activities = () => {
  const {
    state: {
      activitiesPage: { activitiesCategory },
    },
  } = useContext(UIStoreContext);

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
        <div className={styles.activityContainer}>
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
