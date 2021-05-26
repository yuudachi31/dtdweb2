import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
//components
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import PageTitle from '../../components/PageTitle';
import News from '../../components/News';
import PageNumber from '../../components/PageNumber';
import Footer from '../../components/Footer';
//設計
import styles from './styles.module.scss';

const Achievements = () => {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>師生榮譽榜-國立臺北教育大學</title>
        <meta name="description" content="數位科技設計學系的師生榮譽榜" />
      </Helmet>
      <Header />
      <Banner />
      <div className={styles.container}>
        <PageTitle title="師生榮譽榜" />
        <News pageStyle="achievements" />
      </div>
      <PageNumber pageCount="3" pageStyle="achievements" />
      <Footer />
    </Fragment>
  );
};

export default Achievements;
