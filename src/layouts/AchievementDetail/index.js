import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import Header from '../../components/Header';
import NewDetail from '../../components/NewDetail';
import Footer from '../../components/Footer';

import styles from './styles.module.scss';
import path from '../../utils/path';

import { useParams } from 'react-router-dom';

const AchievementDetail = () => {
  let { newIndex } = useParams();

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>師生榮譽榜-國立臺北教育大學</title>
        <meta name="description" content="數位科技設計學系的師生榮譽榜" />
      </Helmet>
      <div className={styles.container}>
        <Header />
        <NewDetail path={path.achievements} newIndex={newIndex} />
        <Footer />
      </div>
    </Fragment>
  );
};

export default AchievementDetail;
