import React, { Fragment, useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import * as QueryString from 'query-string';
//components
import Header from '../../components/Header';
import NewDetail from '../../components/NewDetail';
//動態變數
import { getNewInfo } from '../../store/actions';
import { StoreContext } from '../../store/reducer';
//設計
// import styles from './styles.module.scss';

const AchievementDetail = () => {
  const location = useLocation();
  const { id } = QueryString.parse(location.search);
  const {
    state: {
      newInfo,
      requestdata: { loading },
    },
    dispatch,
  } = useContext(StoreContext);

  useEffect(() => {
    getNewInfo(dispatch, {
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
          <NewDetail title={newInfo.title} content={newInfo.content} />
        )}
      </>
    </Fragment>
  );
};

export default AchievementDetail;
