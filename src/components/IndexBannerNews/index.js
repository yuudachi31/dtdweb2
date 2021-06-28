import React, { useContext, useEffect } from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import path from '../../utils/path';

/* compontent */
import Loading from '../Loading';

/* react-bootstrap 輪播 */
import Carousel from 'react-bootstrap/Carousel';

/* icon */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

/* store */
import { getHomeData } from '../../store/actions';
import { StoreContext } from '../../store/reducer';

const IndexBannerNews = () => {
  const {
    state: {
      banner,
      homeNews,
      requestdata: { homeHasBanner, homeHasNews, loading },
    },
    dispatch,
  } = useContext(StoreContext);

  useEffect(() => {
    getHomeData(dispatch, homeHasBanner, homeHasNews);
  }, []);

  return (
    <>
      {loading && !homeHasBanner && !homeHasNews ? (
        <Loading />
      ) : (
        <>
          <div>
            <Carousel indicators={false} controls={false}>
              {banner.map((bannerImg) => (
                <Carousel.Item interval={5000} key={bannerImg.id}>
                  {bannerImg.link === '' ? (
                    <Link to={path.home}>
                      <img
                        className={`d-block w-100 ${styles.carousel_img__rwdHeight}`}
                        src={bannerImg.bannerUrl}
                        alt="First slide"
                      />
                    </Link>
                  ) : (
                    <a href={`${bannerImg.link}`}>
                      <img
                        className={`d-block w-100 ${styles.carousel_img__rwdHeight}`}
                        src={bannerImg.bannerUrl}
                        alt="First slide"
                      />
                    </a>
                  )}
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <div className={styles.container}>
            <div
              className={`${styles.section} ${styles.section_news}`}
              id="news"
            >
              {homeNews.map((newsType) => (
                <div className={styles.newsContent} key={newsType.groupId}>
                  <h1>{newsType.title}</h1>
                  <div className={styles.news_top}></div>
                  {newsType.list.map((newsDetail) => (
                    <div className={styles.news} key={newsDetail.id}>
                      <Link
                        to={`/${
                          newsType.groupId === 0
                            ? 'announcements'
                            : 'achievements'
                        }/newinfo?id=${newsDetail.id}`}
                        className={styles.link_a__textdecnone}
                      >
                        <p className={styles.news_p}>
                          {newsDetail.isLatest === true
                            ? `［最新］${newsDetail.title}`
                            : `${newsDetail.title}`}
                        </p>
                      </Link>
                      <hr className={styles.news_p}></hr>
                      <span className={styles.news_span}>
                        <FontAwesomeIcon icon={faClock} />
                        &ensp;{newsDetail.date}
                      </span>
                    </div>
                  ))}
                  <Link
                    to={
                      newsType.groupId === 0
                        ? `${path.announcements}`
                        : `${path.achievements}`
                    }
                  >
                    <button
                      className={
                        newsType.groupId === 0
                          ? `${styles.news_button} ${styles.news_button_mb}`
                          : `${styles.news_button}`
                      }
                    >
                      <FontAwesomeIcon icon={faAngleRight} />
                      &ensp;&ensp;&ensp;More
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default IndexBannerNews;
