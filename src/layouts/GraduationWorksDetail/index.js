import React, { Fragment, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as QueryString from 'query-string';
import * as Scroll from 'react-scroll';
//componemt&路徑
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import WorksDetail from '../../components/WorksDetail';
import path from '../../utils/path';
//設計
import styles from './styles.module.scss';
//取資料
import { getGraduationWorksDetail } from '../../store/actions';
import { StoreContext } from '../../store/reducer';

const GraduationWorksDetail = () => {
  const location = useLocation();
  // const { groupid, teacherid, staffpath } = QueryString.parse(
  //   location.search,
  // );
  const { workId } = QueryString.parse(location.search);
  const {
    state: {
      graduationWorksDetail,
      requestdata: { loading },
    },
    dispatch,
  } = useContext(StoreContext);

  useEffect(() => {
    getGraduationWorksDetail(dispatch, { workId });
    Scroll.scroller.scrollTo('top');
  }, []);

  return (
    <>
      {loading || JSON.stringify(graduationWorksDetail) === '{}' ? (
        <Fragment>
          <Helmet>
            <meta charSet="utf-8" />
            <title>畢業專題-國立臺北教育大學</title>
            <meta name="description" content="數位科技設計學系的教室團隊" />
          </Helmet>
          <div className={styles.container} id="top">
            <Header />
            <div className={styles.gwDetail}></div>
            <Footer />
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <Helmet>
            <meta charSet="utf-8" />
            <title>{graduationWorksDetail.workTitle}-國立臺北教育大學</title>
            <meta name="description" content="數位科技設計學系的教室團隊" />
          </Helmet>
          <div className={styles.container} id="top">
            <Header />
            <WorksDetail
              worksDetail={graduationWorksDetail}
              path={path.graduationWorks}
            />
          </div>
          <Footer />
        </Fragment>
      )}
    </>
  );
};

export default GraduationWorksDetail;
