import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
//components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import PageTitle from '../../components/PageTitle';
import DocsGroup from '../../components/DocsGroup';
//css
import styles from './styles.module.scss';
//data
import downloadJson from '../../assets/json/downloads.json';

const Download = () => {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>表格下載-國立臺北教育大學</title>
        <meta name="description" content="數位科技設計學系的表格下載" />
      </Helmet>
      <div className={styles.container}>
        <Header />
        <Banner />
        <div className={styles.downloadContainer}>
          <PageTitle title="表格下載" />
          <DocsGroup json={downloadJson} />
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Download;
