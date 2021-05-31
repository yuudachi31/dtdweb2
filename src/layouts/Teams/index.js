import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
//componemt
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import PageTitle from '../../components/PageTitle';
import TeamsGroup from '../../components/TeamsGroup';
//css
import styles from './styles.module.scss';
//data
import teamsJson from '../../assets/json/teams.json';

const Teams = () => {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>系網團隊-國立臺北教育大學</title>
        <meta name="description" content="數位科技設計學系的系網團隊" />
      </Helmet>
      <div className={styles.container}>
        <Header />
        <Banner />
        {teamsJson.map((grade) => (
          <div className={styles.teamsContainer} key={grade.gradeTitle}>
            <PageTitle title={'系網團隊 ' + grade.gradeTitle} />
            <TeamsGroup gradeList={grade.gradeList} />
          </div>
        ))}
        <Footer />
      </div>
    </Fragment>
  );
};

export default Teams;
