import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import Header from '../../components/Header';
import DownloadGroup from '../../components/DownloadGroup';

import styles from './styles.module.scss';

import banner from '../../assets/images/banners/banner_4.jpg';

const Download = () => {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>規章辦法-國立臺北教育大學</title>
        <meta name="description" content="數位科技設計學系的教室團隊" />
      </Helmet>
      <div className={styles.container}>
        <Header />
        <div className={styles.banner}>
          <img src={banner} className={styles.banner_img} />
        </div>
        <div className={styles.teacherContainer}>
          <h1 className={styles.teacherContainer_teacherTitle}>表格下載</h1>
          <div className={styles.teacherContainer_titleLine}></div>
          <DownloadGroup />
        </div>
      </div>
    </Fragment>
  );
};

export default Download;
