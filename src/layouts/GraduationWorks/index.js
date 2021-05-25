import React, { Fragment, useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import * as Scroll from 'react-scroll';
//路徑
import path from '../../utils/path';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import PageTitle from '../../components/PageTitle';
import WorksSort from '../../components/WorksSorts';

import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Masonry from 'react-masonry-css';

import {
  getGraduationWorks,
  getGraduationWorksShow,
  setWorksSortActiveItem,
} from '../../store/actions';
import { StoreContext } from '../../store/reducer';

const GraduationWorks = () => {
  const {
    state: {
      graduationWorksShow,
      worksSort,
      worksSortActiveItem,
      requestdata: { loading },
    },
    dispatch,
  } = useContext(StoreContext);
  const breakPoint = {
    default: 3,
    991: 2,
    575: 1,
  };
  const geturlid = window.location.href;
  useEffect(() => {
    if (geturlid.search(/#/i) != -1) {
      Scroll.scroller.scrollTo('content');
      worksSortActiveItem == '所有'
        ? getGraduationWorks(dispatch)
        : getGraduationWorksShow(dispatch, { sort: worksSortActiveItem });
    } else {
      Scroll.scroller.scrollTo('top');
      setWorksSortActiveItem(dispatch);
      getGraduationWorks(dispatch);
    }
  }, []);
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>畢業專題-國立臺北教育大學</title>
        <meta name="description" content="數位科技設計學系的畢業專題" />
      </Helmet>
      <div className={styles.container} id="top">
        <Header />
        <Banner />
        <div className={styles.graduationWorksContainer} id="content">
          <PageTitle title="畢業專題" />
          {worksSort.length > 1 ? (
            <WorksSort
              sortsList={worksSort}
              selectedItem={worksSortActiveItem}
              path={path.graduationWorks}
            />
          ) : (
            <></>
          )}
          {loading ? (
            <div className={styles.worksArea}></div>
          ) : (
            <Masonry
              className={styles.worksArea}
              columnClassName={styles.worksArea_column}
              breakpointCols={breakPoint}
            >
              {graduationWorksShow.map((workslist) =>
                workslist.sortList.map((work) => (
                  <div className={styles.worksBox} key={work.id}>
                    <img src={work.workImgUrl} />
                    <div className={styles.worksBox_content}>
                      <div className={styles.worksBox_content__title}>
                        {work.workTitle}
                      </div>
                      <Link
                        to={
                          path.graduationWorks +
                          '/' +
                          workslist.sortTitle +
                          '/' +
                          work.workTitle +
                          '?workId=' +
                          work.id
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

export default GraduationWorks;
