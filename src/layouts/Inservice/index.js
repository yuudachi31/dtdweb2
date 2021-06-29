import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
// 設計
import styles from './styles.module.scss';
// components
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import PageTitle from '../../components/PageTitle';
import Admissions from '../../components/Admissions';
import Footer from '../../components/Footer';

const Inservice = () => {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>在職碩士班-國立臺北教育大學</title>
        <meta name="description" content="數位科技設計學系的在職碩士班" />
      </Helmet>
      <Header />
      <Banner bannerNumber={4} />
      <div className={styles.container}>
        <PageTitle title="在職碩士班" />
        <Admissions index={2} />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Inservice;
