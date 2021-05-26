import React, { useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as QueryString from 'query-string';
//設計
import styles from './styles.module.scss';
//動態變數
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
        <></>
      ) : (
        <div className={styles.news_newsBlock}>
          {news.map((newContent) => (
            <div className={styles.newsBlock_newBox} key={newContent.id}>
              <Link to={`/${prop.pageStyle}/newinfo?id=${newContent.id}`}>
                <div
                  className={`${styles.newBox_title} ${styles.newBox_text_ellipsis}`}
                >
                  {newContent.title}
                </div>
                <div
                  className={`${styles.newBox_content} ${styles.newBox_text_ellipsis}`}
                >
                  {newContent.content
                    .replace(/<li>|<p>/g, ' ')
                    .replace(/<[^>]*>?/gm, '')
                    .replace(/&nbsp;/g, '')}
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default News;
