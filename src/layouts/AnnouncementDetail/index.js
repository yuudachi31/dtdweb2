import React, { Fragment, useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import * as QueryString from 'query-string';
// 設計
// import styles from './styles.module.scss';
// components
import Header from '../../components/Header';
import NewDetail from '../../components/NewDetail';
// store
import { getNewDetail } from '../../store/actions';
import { StoreContext } from '../../store/reducer';

const AnnouncementDetail = () => {
  const location = useLocation();
  const { previous, page, id } = QueryString.parse(location.search);
  const {
    state: {
      newDetail,
      requestdata: { loading },
    },
    dispatch,
  } = useContext(StoreContext);

  useEffect(() => {
    getNewDetail(dispatch, {
      newID: id,
    });
  }, []);

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>系務公告-國立臺北教育大學</title>
        <meta name="description" content="數位科技設計學系的系務公告" />
      </Helmet>
      <Header />
      <>
        {loading ? (
          <div></div>
        ) : (
          <NewDetail
            previous={previous}
            page={page == undefined ? null : page}
            title={newDetail.title}
            content={newDetail.content}
          />
        )}
      </>
    </Fragment>
  );
};

export default AnnouncementDetail;
