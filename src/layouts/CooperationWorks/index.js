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
//path
import path from '../../utils/path';
//css
import styles from './styles.module.scss';
//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
//data
import { getCooperationWorks } from '../../store/actions';
import { StoreContext } from '../../store/reducer';

const CooperationWorks = () => {
  const {
    state: {
      cooperationWorks,
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
    getCooperationWorks(dispatch);
    if (getUrlId.search(/#/i) != -1) {
      Scroll.scroller.scrollTo('content');
    } else {
      Scroll.scroller.scrollTo('top');
    }
  }, []);
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>合作成果-國立臺北教育大學</title>
        <meta name="description" content="數位科技設計學系的合作成果" />
      </Helmet>
      <div className={styles.container} id="top">
        <Header />
        <Banner />
        <div className={styles.cooperationWorksContainer} id="content">
          <PageTitle title="合作成果" />
          {loading ? (
            <div className={styles.worksArea}></div>
          ) : (
            <Masonry
              className={styles.worksArea}
              columnClassName={styles.worksArea_column}
              breakpointCols={breakPoint}
            >
              {cooperationWorks.map((work) => (
                <div className={styles.worksBox} key={work.id}>
                  <img src={work.workImgUrl} />
                  <div className={styles.worksBox_content}>
                    <div className={styles.worksBox_content__title}>
                      {work.workTitle}
                    </div>
                    <Link
                      to={
                        path.cooperationWorks +
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
              ))}
            </Masonry>
          )}
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default CooperationWorks;
