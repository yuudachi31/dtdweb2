import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
// 設計
import styles from './styles.module.scss';
// components
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import PageTitle from '../../components/PageTitle';
import AdmissionsE from '../../components/AdmissionsEnglish';
import FooterEnglish from '../../components/FooterEnglish';
import FutureContentEnglish from '../../components/FutureContentEnglish';

const English = () => {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ntue DTD English Web Page</title>
        <meta name="description" content="數位科技設計學系的學士班" />
      </Helmet>
      <Header />
      <Banner bannerNumber={4} />
      <div className={styles.container}>
        <PageTitle title="Future Developments" />
        <FutureContentEnglish />
      </div>
      <div className={styles.container}>
        <PageTitle title="Admissions Information" />
        <AdmissionsE index={0} />
        <AdmissionsE index={1} />
        <AdmissionsE index={2} />
      </div>
      <FooterEnglish />
    </Fragment>
  );
};

export default English;
