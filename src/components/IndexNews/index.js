import React, { useContext, useEffect } from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import path from '../../utils/path';

/* icon */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

/* store */
import { getHomeNews } from '../../store/actions';
import { StoreContext } from '../../store/reducer';

const IndexNews = () => {
  const {
    state: {
      homeNews,
      requestdata: { loading },
    },
    dispatch,
  } = useContext(StoreContext);

  useEffect(() => {
    getHomeNews(dispatch);
  }, []);

  return (
    <>
      {loading ? (
        <div className={styles.container}></div>
      ) : (
        <div className={`${styles.section} ${styles.section_news}`} id="news">
          {homeNews.map((newsType) => (
            <div className={styles.newsContent} key={newsType.groupid}>
              <h1>{newsType.title}</h1>
              <div className={styles.news_top}></div>
              {newsType.list.map((newsDetail) => (
                <div className={styles.news} key={newsDetail.id}>
                  <Link
                    to={`/${
                      newsType.groupid === 0 ? 'announcements' : 'achievements'
                    }/newinfo?id=${newsDetail.id}`}
                    className={styles.link_a__textdecnone}
                  >
                    <p className={styles.news_p}>{newsDetail.title}</p>
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
                  newsType.groupid === 0
                    ? `${path.announcements}`
                    : `${path.achievements}`
                }
              >
                <button
                  className={
                    newsType.groupid === 0
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
      )}
    </>
  );
};

export default IndexNews;
