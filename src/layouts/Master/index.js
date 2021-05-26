import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
//components
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import PageTitle from '../../components/PageTitle';
import Admissions from '../../components/Admissions';
import Footer from '../../components/Footer';
//設計
import styles from './styles.module.scss';

const Master = () => {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>碩士班-國立臺北教育大學</title>
        <meta name="description" content="數位科技設計學系的碩士班" />
      </Helmet>
      <Header />
      <Banner />
      <div className={styles.container}>
        <PageTitle title="碩士班" />
        <Admissions number="1" />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Master;
