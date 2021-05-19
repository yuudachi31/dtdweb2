import React, { useEffect, useContext } from 'react';
import styles from './styles.module.scss';

// import '@wordpress/block-library/build-style/style.css';
// import '@wordpress/block-library/build-style/style.css';
// import '@wordpress/block-library/build-style/style.css';

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
    window.scrollTo(0, 0);
    getNews(dispatch, {
      clickNumber: pageSeletedNumber,
      pageStyle: prop.pageStyle,
    });
  }, [pageSeletedNumber]);

  return (
    <>
      {loading ? (
        <div className={styles.container}></div>
      ) : (
        <div className={styles.container}>
          <div className={styles.new}>
            {news.map((newContent) => (
              <div key={newContent.id} className={styles.new_box}>
                <div className={styles.new_title}>{newContent.title}</div>
                <div className={styles.new_content}>
                  面試時間表經公告後不予調整順序。 考生報到及應試時請 […]
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default News;
