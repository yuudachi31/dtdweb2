import React, { useEffect, useContext } from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
// import * as Scroll from 'react-scroll';

import { getNews } from '../../store/actions';
import { StoreContext } from '../../store/reducer';
import { UIStoreContext } from '../../uiStore/reducer';

const News = (prop) => {
  const {
    state: {
      news,
      requestdata: { loading },
    },
    dispatch,
  } = useContext(StoreContext);

  const {
    state: { pageSeletedNumber },
  } = useContext(UIStoreContext);

  useEffect(() => {
    getNews(dispatch, {
      clickNumber: pageSeletedNumber,
      pageStyle: prop.pageStyle,
    });
  }, [pageSeletedNumber]);

  // useEffect(() => {
  //   Scroll.animateScroll.scrollTo(0);
  // }, [news]);

  const page = prop.pageStyle.substring(0, prop.pageStyle.length - 4);

  return (
    <>
      {loading ? (
        <div className={styles.container}></div>
      ) : (
        <div className={styles.container}>
          <div className={styles.new}>
            {news.map((newContent) => (
              <Link
                to={`/${page}/newinfo?id=${newContent.id}`}
                key={newContent.id}
                className={styles.new_link}
              >
                <div className={styles.new_box}>
                  <div className={styles.new_title}>{newContent.title}</div>
                  <div className={styles.new_content}>
                    面試時間表經公告後不予調整順序。 考生報到及應試時請 […]
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default News;
