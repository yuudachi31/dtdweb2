import React, { Fragment, useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import * as Scroll from 'react-scroll';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
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
  getGoodWorks,
  getGoodWorksShow,
  setWorksSort,
} from '../../store/actions';
import { StoreContext } from '../../store/reducer';

const GoodWorks = () => {
  const {
    state: {
      goodWorksShow,
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
    if (getUrlId.search(/#/i) != -1) {
      Scroll.scroller.scrollTo('content');
      if (worksSortActiveItem == '所有') {
        getGoodWorks(dispatch);
      } else {
        setWorksSort(dispatch, {
          sort: worksSortActiveItem,
          path: path.goodWorks,
        });
        getGoodWorksShow(dispatch, { sort: worksSortActiveItem });
      }
    } else {
      Scroll.scroller.scrollTo('top');
      setWorksSort(dispatch, {
        sort: '所有',
        path: path.goodWorks,
      });
      getGoodWorks(dispatch);
    }
  }, []);

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
        <title>優良作品-國立臺北教育大學</title>
        <meta name="description" content="數位科技設計學系的優良作品" />
      </Helmet>
      <div className={styles.container} id="top">
        <Header />
        <Banner bannerNumber={1} />
        <div className={styles.goodWorksContainer} id="content">
          <PageTitle title="優良作品" />
          {worksSort.length > 1 ? (
            <WorksSort
              sortsList={worksSort}
              selectedItem={worksSortActiveItem}
              path={path.goodWorks}
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
              {goodWorksShow.map((workslist) =>
                workslist.sortList.map((work) => (
                  <div className={styles.worksBox} key={work.id}>
                    <Link
                      to={
                        path.goodWorks +
                        '/' +
                        workslist.sortTitle.slice(
                          workslist.sortTitle.search(/-/i) + 1,
                        ) +
                        '/' +
                        work.workTitle +
                        '?workId=' +
                        work.id +
                        '&sort=' +
                        worksSortActiveItem
                      }
                    >
                      <img src={work.workImgUrl} />
                    </Link>
                    <div className={styles.worksBox_content}>
                      <div className={styles.worksBox_content__title}>
                        {work.workTitle}
                      </div>
                      <Link
                        to={
                          path.goodWorks +
                          '/' +
                          workslist.sortTitle.slice(
                            workslist.sortTitle.search(/-/i) + 1,
                          ) +
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

export default GoodWorks;
