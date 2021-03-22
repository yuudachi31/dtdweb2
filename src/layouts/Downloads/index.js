import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import PageTitle from '../../components/PageTitle';
import DownloadGroup from '../../components/DownloadsGroup';

import styles from './styles.module.scss';

const Download = () => {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>表格下載-國立臺北教育大學</title>
        <meta name="description" content="數位科技設計學系的教室團隊" />
      </Helmet>
      <div className={styles.container}>
        <Header />
        <Banner />
        <div className={styles.downloadContainer}>
          <PageTitle title="表格下載" />
          <DownloadGroup />
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Download;
