import React, { useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as QueryString from 'query-string';
import * as Scroll from 'react-scroll';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
// 設計
import styles from './styles.module.scss';
// components
import PageTitle from '../PageTitle';
import Loading from '../Loading';
// store
import { getNews } from '../../store/actions';
import { setNewsLoadState } from '../../uiStore/actions';
import { StoreContext } from '../../store/reducer';
import { UIStoreContext } from '../../uiStore/reducer';

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

  const {
    uiState: { newsLoadState },
    uiDispatch,
  } = useContext(UIStoreContext);

  useEffect(() => {
    if (loading) {
      disableBodyScroll(document);
    } else {
      enableBodyScroll(document);
    }
  }, [loading]);

  useEffect(() => {
    getNews(dispatch, {
      clickNumber: page == undefined ? 1 : page,
      pageStyle: prop.pageStyle,
    });
    if (newsLoadState) {
      window.scrollTo(0, 0);
      setNewsLoadState(uiDispatch, { loadState: false });
    } else {
      Scroll.scroller.scrollTo('pageTitle');
    }
  }, [page]);

  return (
    <div className={styles.container} id="pageTitle">
      {loading ? (
        <>
          <PageTitle
            title={
              prop.pageStyle == 'announcements' ? '系務公告' : '師生榮譽榜'
            }
          />
          <Loading />
        </>
      ) : (
        <>
          <PageTitle
            title={
              prop.pageStyle == 'announcements' ? '系務公告' : '師生榮譽榜'
            }
          />
          <div className={styles.news_newsBlock}>
            {news.map((newContent) => (
              <div className={styles.newsBlock_newBox} key={newContent.id}>
                <Link
                  to={
                    page == undefined
                      ? `/${prop.pageStyle}/newinfo?previous=${prop.pageStyle}&id=${newContent.id}`
                      : `/${prop.pageStyle}/newinfo?previous=${prop.pageStyle}&page=${page}&id=${newContent.id}`
                  }
                >
                  <div
                    className={`${styles.newBox_title} ${styles.newBox_text_ellipsis}`}
                  >
                    {newContent.isLatest
                      ? `［最新］${newContent.title}`
                      : newContent.title}
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
        </>
      )}
    </div>
  );
};

export default News;
