import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import PageTitle from '../../components/PageTitle';
import News from '../../components/News';
import PageNumber from '../../components/PageNumber';

import styles from './styles.module.scss';

const Announcements = () => {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>系務公告-國立臺北教育大學</title>
        <meta name="description" content="數位科技設計學系的系務公告" />
      </Helmet>
      <div className={styles.container}>
        <Header />
        <Banner />
        <div className={styles.board}>
          <PageTitle title="系務公告" />
          <News pageStyle="announcementsPage" />
        </div>
        <PageNumber pageCount="3" />
        <Footer />
      </div>
    </Fragment>
  );
};

export default Announcements;
