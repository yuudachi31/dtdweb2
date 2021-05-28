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

const AchievementDetail = () => {
  const location = useLocation();
  const { id } = QueryString.parse(location.search);
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
        <title>師生榮譽榜-國立臺北教育大學</title>
        <meta name="description" content="數位科技設計學系的師生榮譽榜" />
      </Helmet>
      <Header />
      <>
        {loading ? (
          <></>
        ) : (
          <NewDetail title={newDetail.title} content={newDetail.content} />
        )}
      </>
    </Fragment>
  );
};

export default AchievementDetail;
