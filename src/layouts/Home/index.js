import React, { Fragment, useEffect, useContext } from 'react';
import { Helmet } from 'react-helmet';
import styles from './styles.module.scss';
import * as Scroll from 'react-scroll';

/* store */
import { StoreContext } from '../../store/reducer';

/* component */
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import IndexBannerNews from '../../components/IndexBannerNews';
import IndexContent from '../../components/IndexContent';

const Home = () => {
  //進入首頁後會置頂
  useEffect(() => {
    Scroll.scroller.scrollTo('top');
  }, []);

  const {
    state: {
      requestdata: { homeHasBanner, homeHasNews, loading },
    },
  } = useContext(StoreContext);

  useEffect(() => {
    if (loading && !homeHasBanner && !homeHasNews) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  }, [loading]);

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>a數位科技設計學系-國立臺北教育大學</title>
        <meta name="description" content="數位科技設計學系的首頁" />
      </Helmet>
      <div className={styles.container} id="top">
        <Header />
        <IndexBannerNews />
        <div className={styles.homeContainer}>
          <IndexContent />
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Home;
