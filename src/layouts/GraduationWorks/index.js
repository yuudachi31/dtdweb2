import React, { Fragment, useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
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

import { getGraduationWorks } from '../../store/actions';
import { StoreContext } from '../../store/reducer';

const GraduationWorks = () => {
  const {
    state: {
      graduationWorks,
      requestdata: { loading },
    },
    dispatch,
  } = useContext(StoreContext);
  var worksSortArray = ['所有'];
  useEffect(() => {
    getGraduationWorks(dispatch);
  }, []);
  useEffect(() => {
    graduationWorks.map((work) => worksSortArray.push(work.sortTitle));
  }, [loading]);
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>畢業專題-國立臺北教育大學</title>
        <meta name="description" content="數位科技設計學系的畢業專題" />
      </Helmet>
      <div className={styles.container}>
        <Header />
        <Banner />
        {loading ? (
          <div className={styles.graduationWorksContainer}>
            <PageTitle title="畢業專題" />
            <div className={styles.worksArea}></div>
          </div>
        ) : (
          <div className={styles.graduationWorksContainer}>
            <PageTitle title="畢業專題" />
            <WorksSort sortsList={worksSortArray} />
            <Masonry
              className={styles.worksArea}
              columnClassName={styles.worksArea_column}
              breakpointCols={3}
            >
              {graduationWorks.map((workslist) =>
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
          </div>
        )}

        <Footer />
      </div>
    </Fragment>
  );
};

export default GraduationWorks;
