import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import styles from './styles.module.scss';

/* components */
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import PageTitle from '../../components/PageTitle';
import FutureContent from '../../components/FutureContent';

const Future = () => {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>未來發展-國立臺北教育大學</title>
        <meta name="description" content="數位科技設計學系的未來發展" />
      </Helmet>
      <div className={styles.container}>
        <Header />
        <Banner />
        <div className={styles.futureContainer}>
          <PageTitle title="修課與未來發展" />
          <FutureContent />
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Future;
