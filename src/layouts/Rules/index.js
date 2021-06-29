import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
//componemts
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import PageTitle from '../../components/PageTitle';
import DocsGroup from '../../components/DocsGroup';
//css
import styles from './styles.module.scss';
//data
import rulesJson from '../../assets/json/rules.json';

const Rules = () => {
  return (
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
          <DocsGroup json={rulesJson} />
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Rules;
