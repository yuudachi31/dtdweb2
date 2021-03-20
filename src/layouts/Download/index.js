import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DownloadGroup from '../../components/DownloadGroup';

import styles from './styles.module.scss';

import banner from '../../assets/images/banners/banner_4.jpg';

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
        <div className={styles.banner}>
          <img src={banner} className={styles.banner_img} />
        </div>
        <div className={styles.downloadContainer}>
          <h1 className={styles.downloadContainer_downloadTitle}>表格下載</h1>
          <div className={styles.downloadContainer_titleLine}></div>
          <DownloadGroup />
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Download;
