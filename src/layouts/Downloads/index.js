import React, { Fragment, useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet';
//components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import PageTitle from '../../components/PageTitle';
import DocsGroup from '../../components/DocsGroup';
import Loading from '../../components/Loading';
//css
import styles from './styles.module.scss';
//data
import { getFormDownload } from '../../store/actions';
import { StoreContext } from '../../store/reducer';

const Download = () => {
  const {
    state: {
      formDownloadContent,
      requestdata: { loading },
    },
    dispatch,
  } = useContext(StoreContext);

  useEffect(() => {
    getFormDownload(dispatch);
  }, []);

  return (
    <>
      {loading ? (
        <div className={styles.container}>
          <Loading />
        </div>
      ) : (
        <Fragment>
          <Helmet>
            <meta charSet="utf-8" />
            <title>表格下載-國立臺北教育大學</title>
            <meta name="description" content="數位科技設計學系的表格下載" />
          </Helmet>
          <div className={styles.container}>
            <Header />
            <Banner bannerNumber={2} />
            <div className={styles.downloadContainer}>
              <PageTitle title="表格下載" />
              <DocsGroup json={formDownloadContent} />
            </div>
            <Footer />
          </div>
        </Fragment>
      )}
    </>
  );
};

export default Download;
