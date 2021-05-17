import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import PageTitle from '../../components/PageTitle';
import Admissions from '../../components/Admissions';

import styles from './styles.module.scss';

const College = () => {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>學士班-國立臺北教育大學</title>
        <meta name="description" content="數位科技設計學系的學士班" />
      </Helmet>
      <div className={styles.container}>
        <Header />
        <Banner />
        <div className={styles.admissionsContainer}>
          <PageTitle title="學士班" />
          <Admissions number="0" />
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default College;
