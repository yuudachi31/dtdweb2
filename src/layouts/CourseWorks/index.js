import React, { Fragment, useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import * as Scroll from 'react-scroll';
//components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import PageTitle from '../../components/PageTitle';
import WorksSort from '../../components/WorksSorts';
import Loading from '../../components/Loading';
//path
import path from '../../utils/path';
//css
import styles from './styles.module.scss';
//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
//data
import {
  getCourseWorks,
  getCourseWorksShow,
  setWorksSort,
} from '../../store/actions';
import { StoreContext } from '../../store/reducer';

const CourseWorks = () => {
  const {
    state: {
      courseWorksShow,
      worksSort,
      worksSortActiveItem,
      requestdata: { loading },
    },
    dispatch,
  } = useContext(StoreContext);

  //Masonry rwd breakPoint
  const breakPoint = {
    default: 3,
    991: 2,
    575: 1,
  };

  //get url
  const getUrlId = window.location.href;

  useEffect(() => {
    setWorksSort(dispatch, { sort: worksSortActiveItem, path: '/' });
    if (getUrlId.search(/#content/i) != -1) {
      Scroll.scroller.scrollTo('content');
      if (worksSortActiveItem == '所有') {
        getCourseWorks(dispatch);
      } else {
        setWorksSort(dispatch, {
          sort: worksSortActiveItem,
          path: path.courseWorks,
        });
        getCourseWorksShow(dispatch, { sort: worksSortActiveItem });
      }
    } else {
      Scroll.scroller.scrollTo('top');
      setWorksSort(dispatch, {
        sort: '所有',
        path: path.courseWorks,
      });
      getCourseWorks(dispatch);
    }
  }, []);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  }, [loading]);

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>課程作品-國立臺北教育大學</title>
        <meta name="description" content="數位科技設計學系的課程作品" />
      </Helmet>
      <div className={styles.container} id="top">
        <Header />
        <Banner bannerNumber={1} />
        <div className={styles.courseWorksContainer} id="content">
          <PageTitle title="課程作品" />
          {worksSort.length > 1 ? (
            <WorksSort
              sortsList={worksSort}
              selectedItem={worksSortActiveItem}
              path={path.courseWorks}
            />
          ) : (
            <></>
          )}
          {loading ? (
            <div className={styles.worksArea}>
              <Loading />
            </div>
          ) : (
            <Masonry
              className={styles.worksArea}
              columnClassName={styles.worksArea_column}
              breakpointCols={breakPoint}
            >
              {courseWorksShow.map((workslist) =>
                workslist.sortList.map((work) => (
                  <div className={styles.worksBox} key={work.id}>
                    <Link
                      to={
                        path.courseWorks +
                        '/' +
                        workslist.sortTitle +
                        '/' +
                        work.workTitle +
                        '?workId=' +
                        work.id +
                        '&sort=' +
                        worksSortActiveItem
                      }
                    >
                      <img src={work.workImgUrl} loading="lazy" />
                    </Link>
                    <div className={styles.worksBox_content}>
                      <div className={styles.worksBox_content__title}>
                        {work.workTitle}
                      </div>
                      <Link
                        to={
                          path.courseWorks +
                          '/' +
                          workslist.sortTitle +
                          '/' +
                          work.workTitle +
                          '?workId=' +
                          work.id +
                          '&sort=' +
                          worksSortActiveItem
                        }
                        className={styles.worksBox_content__link}
                      >
                        <FontAwesomeIcon icon={faAngleRight} />
                        <div className={styles.worksBox_content__linktext}>
                          More
                        </div>
                      </Link>
                    </div>
                  </div>
                )),
              )}
            </Masonry>
          )}
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default CourseWorks;
