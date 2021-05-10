import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import styles from './styles.module.scss';

/*component*/
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import IndexBanner from '../../components/IndexBanner';
import IndexNews from '../../components/IndexNews';
import IndexContent from '../../components/IndexContent';

const Home = () => {
  return (
    <Fragment className={styles.homePage_bgc}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>數位科技設計學系-國立臺北教育大學</title>
        <meta name="description" content="數位科技設計學系的首頁" />
      </Helmet>
      <Header />
      <IndexBanner />
      <div className={styles.container}>
        <IndexNews />
        <IndexContent />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Home;
