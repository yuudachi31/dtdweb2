import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import PageTitle from '../../components/PageTitle';
import TreachGroup from '../../components/StaffGroup';

import styles from './styles.module.scss';

const Staff = () => {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>教學團隊-國立臺北教育大學</title>
        <meta name="description" content="數位科技設計學系的教室團隊" />
      </Helmet>
      <div className={styles.container}>
        <Header />
        <Banner />
        <div className={styles.staffContainer}>
          <PageTitle title="教學團隊" />
          <TreachGroup />
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Staff;
