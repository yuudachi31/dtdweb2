import React, { Fragment, useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet';
//componemts
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import PageTitle from '../../components/PageTitle';
import DocsGroup from '../../components/DocsGroup';
import Loading from '../../components/Loading';

//css
import styles from './styles.module.scss';

//data
import { getRulesDownload } from '../../store/actions';
import { StoreContext } from '../../store/reducer';

const Rules = () => {
  const {
    state: {
      ruleDownloadContent,
      requestdata: { loading },
    },
    dispatch,
  } = useContext(StoreContext);

  useEffect(() => {
    getRulesDownload(dispatch);
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
            <title>辦法規章-國立臺北教育大學</title>
            <meta name="description" content="數位科技設計學系的辦法規章" />
          </Helmet>
          <div className={styles.container}>
            <Header />
            <Banner bannerNumber={2} />
            <div className={styles.rulesContainer}>
              <PageTitle title="辦法規章" />
              <DocsGroup json={ruleDownloadContent} />
            </div>
            <Footer />
          </div>
        </Fragment>
      )}
    </>
  );
};

export default Rules;
