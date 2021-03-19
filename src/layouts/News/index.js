import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Announcement from '../../components/Announcement';
import PageNumber from '../../components/PageNumber';

import styles from './styles.module.scss';

const News = () => {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>數位科技設計學系-國立臺北教育大學</title>
        <meta name="description" content="數位科技設計學系的最新消息" />
      </Helmet>
      <div className={styles.container}>
        <Header />
        <Announcement />
        <PageNumber />
        <Footer />
      </div>
    </Fragment>
  );
};

export default News;
