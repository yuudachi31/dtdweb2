import React, { Fragment, useContext, useEffect } from 'react';

import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import * as QueryString from 'query-string';

import Header from '../../components/Header';
import NewDetail from '../../components/NewDetail';

import { getNewInfo } from '../../store/actions';
import { StoreContext } from '../../store/reducer';

import styles from './styles.module.scss';
import '@wordpress/block-library/build-style/style.css';
import '@wordpress/block-library/build-style/style.css';
import '@wordpress/block-library/build-style/style.css';

const AnnouncementDetail = () => {
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
        <title>系務公告-國立臺北教育大學</title>
        <meta name="description" content="數位科技設計學系的系務公告" />
      </Helmet>
      <div className={styles.container}>
        <Header />
        <>
          {loading ? (
            <div></div>
          ) : (
            <NewDetail title={newInfo.title} content={newInfo.content} />
          )}
        </>
      </div>
    </Fragment>
  );
};

export default AnnouncementDetail;
