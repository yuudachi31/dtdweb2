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
  const { workId, sort } = QueryString.parse(location.search);
  const {
    state: {
      goodWorksDetail,
      requestdata: { loading },
    },
    dispatch,
  } = useContext(StoreContext);

  useEffect(() => {
    getGoodWorksDetail(dispatch, { workId, sort });
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
      {loading || JSON.stringify(goodWorksDetail) === '{}' ? (
        <Fragment>
          <Helmet>
            <meta charSet="utf-8" />
            <title>研究成果-國立臺北教育大學</title>
            <meta name="description" content="數位科技設計學系的研究成果" />
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
            <title>{goodWorksDetail.workTitle}-國立臺北教育大學</title>
            <meta name="description" content="數位科技設計學系的研究成果" />
          </Helmet>
          <div className={styles.container} id="top">
            <Header />
            <WorksDetail worksDetail={goodWorksDetail} path={path.goodWorks} />
          </div>
          <Footer />
        </Fragment>
      )}
    </>
  );
};

export default GoodWorksDetail;
