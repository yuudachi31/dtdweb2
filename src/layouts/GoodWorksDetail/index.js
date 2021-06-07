import React, { Fragment, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as QueryString from 'query-string';
import * as Scroll from 'react-scroll';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
//componemts
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import WorksDetail from '../../components/WorksDetail';
import Loading from '../../components/Loading';
//path
import path from '../../utils/path';
//css
import styles from './styles.module.scss';
//data
import { getGoodWorksDetail } from '../../store/actions';
import { StoreContext } from '../../store/reducer';

const GoodWorksDetail = () => {
  const location = useLocation();
  const { workId } = QueryString.parse(location.search);
  const {
    state: {
      cooperationWorksDetail,
      requestdata: { loading },
    },
    dispatch,
  } = useContext(StoreContext);

  useEffect(() => {
    getGoodWorksDetail(dispatch, { workId });
    Scroll.scroller.scrollTo('top');
  }, []);

  useEffect(() => {
    if (loading) {
      disableBodyScroll('body');
    } else {
      enableBodyScroll('body');
    }
  }, [loading]);

  return (
    <>
      {loading || JSON.stringify(cooperationWorksDetail) === '{}' ? (
        <Fragment>
          <Helmet>
            <meta charSet="utf-8" />
            <title>優良作品-國立臺北教育大學</title>
            <meta name="description" content="數位科技設計學系的優良作品" />
          </Helmet>
          <div className={styles.container} id="top">
            <Header />
            <div className={styles.worksContainer}>
              <Loading />
            </div>
            <Footer />
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <Helmet>
            <meta charSet="utf-8" />
            <title>{cooperationWorksDetail.workTitle}-國立臺北教育大學</title>
            <meta name="description" content="數位科技設計學系的優良作品" />
          </Helmet>
          <div className={styles.container} id="top">
            <Header />
            <WorksDetail
              worksDetail={cooperationWorksDetail}
              path={path.cooperationWorks}
            />
          </div>
          <Footer />
        </Fragment>
      )}
    </>
  );
};

export default GoodWorksDetail;
