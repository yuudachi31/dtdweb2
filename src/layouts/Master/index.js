import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import PageTitle from '../../components/PageTitle';
import Admissions from '../../components/Admissions';

import styles from './styles.module.scss';

const Master = () => {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>辦法規章-國立臺北教育大學</title>
        <meta name="description" content="數位科技設計學系的碩士班" />
      </Helmet>
      <div className={styles.container}>
        <Header />
        <Banner />
        <div className={styles.admissionsContainer}>
          <PageTitle title="碩士班" />
          <Admissions number="1" />
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Master;
