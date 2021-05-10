import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import PageTitle from '../../components/PageTitle';
import WorksSort from '../../components/WorksSorts';

import styles from './styles.module.scss';

const Staff = () => {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>畢業專題-國立臺北教育大學</title>
        <meta name="description" content="數位科技設計學系的畢業專題" />
      </Helmet>
      <div className={styles.container}>
        <Header />
        <Banner />
        <div className={styles.staffContainer}>
          <PageTitle title="畢業專題" />
          <WorksSort sortsList={[1, 2, 3]} />
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Staff;
