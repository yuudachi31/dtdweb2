import React, { Fragment, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as QueryString from 'query-string';
import * as Scroll from 'react-scroll';
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
import { getCourseWorksDetail } from '../../store/actions';
import { StoreContext } from '../../store/reducer';

const CourseWorksDetail = () => {
  const location = useLocation();
  const { workId, sort } = QueryString.parse(location.search);
  const {
    state: {
      courseWorksDetail,
      requestdata: { loading },
    },
    dispatch,
  } = useContext(StoreContext);

  useEffect(() => {
    getCourseWorksDetail(dispatch, { workId, sort });
  }, []);

  useEffect(() => {
    if (loading) {
      Scroll.scroller.scrollTo('top');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  }, [loading]);

  return (
    <>
      {loading || JSON.stringify(courseWorksDetail) === '{}' ? (
        <Fragment>
          <Helmet>
            <meta charSet="utf-8" />
            <title>課程作品-國立臺北教育大學</title>
            <meta name="description" content="數位科技設計學系的課程作品" />
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
            <title>{courseWorksDetail.workTitle}-國立臺北教育大學</title>
            <meta name="description" content="數位科技設計學系的課程作品" />
          </Helmet>
          <div className={styles.container} id="top">
            <Header />
            <WorksDetail
              worksDetail={courseWorksDetail}
              path={path.courseWorks}
            />
          </div>
          <Footer />
        </Fragment>
      )}
    </>
  );
};

export default CourseWorksDetail;
