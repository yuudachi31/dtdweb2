import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import Header from '../../components/Header';
import TreachGroup from '../../components/TeachGroup';

import styles from './styles.module.scss';

import banner from '../../assets/images/banners/banner_4.jpg';

const Teacher = () => {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>教學團隊-國立臺北教育大學</title>
        <meta name="description" content="數位科技設計學系的教室團隊" />
      </Helmet>
      <div className={styles.container}>
        <Header />
        <div className={styles.banner}>
          <img src={banner} className={styles.banner_img} />
        </div>
        <div className={styles.teacherContainer}>
          <h1 className={styles.teacherContainer_teacherTitle}>教學團隊</h1>
          <div className={styles.teacherContainer_titleLine}></div>
          <TreachGroup />
        </div>
      </div>
    </Fragment>
  );
};

export default Teacher;
