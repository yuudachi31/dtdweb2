import React, { useEffect, useContext } from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

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
    window.scrollTo(0, 0);
  }, [pageSeletedNumber]);

  const page = prop.pageStyle.substring(0, prop.pageStyle.length - 4);

  return (
    <>
      {loading ? (
        <div className={styles.container}></div>
      ) : (
        <div className={styles.container}>
          <div className={styles.news}>
            {news.map((newContent) => (
              <Link
                to={`/${page}/newinfo?id=${newContent.id}`}
                key={newContent.id}
                className={styles.new_link}
              >
                <div className={styles.new_box}>
                  <div
                    className={`${styles.new_title} ${styles.new_text_nowrap}`}
                  >
                    {newContent.title}
                  </div>
                  <div
                    className={`${styles.new_content} ${styles.new_text_nowrap}`}
                  >
                    {newContent.content
                      .replace(/<li>|<p>/g, ' ')
                      .replace(/<[^>]*>?/gm, '')
                      .replace(/&nbsp;/g, '')}
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
