import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import Header from '../../components/Header';

import styles from './styles.module.scss';

const Home = () => {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>數位科技設計學系-國立臺北教育大學</title>
        <meta name="description" content="數位科技設計學系的首頁" />
      </Helmet>
      <div className={styles.container}>
        <Header />
        首頁的內容 更動2
      </div>
    </Fragment>
  );
};

export default Home;
