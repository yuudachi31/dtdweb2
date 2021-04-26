import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import PageTitle from '../../components/PageTitle';
import Announcement from '../../components/Announcement';
import PageNumber from '../../components/PageNumber';

import styles from './styles.module.scss';

const Honors = () => {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>數位科技設計學系-國立臺北教育大學</title>
        <meta name="description" content="數位科技設計學系的師生榮譽榜" />
      </Helmet>
      <div className={styles.container}>
        <Header />
        <Banner />
        <div className={styles.board}>
          <PageTitle title="師生榮譽榜" />
          {/* <div className={styles.board_title}></div> */}
          <Announcement />
        </div>
        <PageNumber />
        <Footer />
      </div>
    </Fragment>
  );
};

export default Honors;
