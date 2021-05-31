import React, { Fragment, useEffect, useContext } from 'react';
import { Helmet } from 'react-helmet';
import styles from './styles.module.scss';
import * as Scroll from 'react-scroll';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

/* store */
import { StoreContext } from '../../store/reducer';

/* component */
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import IndexBanner from '../../components/IndexBanner';
import IndexNews from '../../components/IndexNews';
import IndexContent from '../../components/IndexContent';

const Home = () => {
  //進入首頁後會置頂
  useEffect(() => {
    Scroll.scroller.scrollTo('top');
  }, []);

  const {
    state: {
      requestdata: { loading },
    },
  } = useContext(StoreContext);

  useEffect(() => {
    if (loading) {
      disableBodyScroll('body');
    } else {
      enableBodyScroll('body');
    }
  }, [loading]);

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>數位科技設計學系-國立臺北教育大學</title>
        <meta name="description" content="數位科技設計學系的首頁" />
      </Helmet>
      <div className={styles.container} id="top">
        <Header />
        <IndexBanner />
        <div className={styles.homeContainer}>
          <IndexNews />
          <IndexContent />
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Home;
