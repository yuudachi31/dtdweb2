import React, { useEffect, useContext } from 'react';
import styles from './styles.module.scss';
import { Link, useLocation } from 'react-router-dom';
import * as QueryString from 'query-string';

import { getNews } from '../../store/actions';
import { StoreContext } from '../../store/reducer';

const News = (prop) => {
  const location = useLocation();
  const { page } = QueryString.parse(location.search);
  const {
    state: {
      news,
      requestdata: { loading },
    },
    dispatch,
  } = useContext(StoreContext);

  useEffect(() => {
    getNews(dispatch, {
      clickNumber: page,
      pageStyle: prop.pageStyle,
    });
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <>
      {loading ? (
        <div className={styles.container}></div>
      ) : (
        <div className={styles.container}>
          <div className={styles.news}>
            {news.map((newContent) => (
              <Link
                to={`/${prop.pageStyle}/newinfo?id=${newContent.id}`}
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
