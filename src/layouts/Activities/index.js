import React, { Fragment, useContext } from 'react';
import { Helmet } from 'react-helmet';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import PageTitle from '../../components/PageTitle';
import Navbar from '../../components/ActivitiesNavbar';
// import ActivitiesContent from '../../components/ActivitiesContent';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import DTDActivities from '../../assets/json/DTDActivities.json';

import { UIStoreContext } from '../../uiStore/reducer';

import styles from './styles.module.scss';

const Activities = () => {
  const {
    state: {
      activitiesPage: { activitiesCategory },
    },
  } = useContext(UIStoreContext);

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>系上活動-國立臺北教育大學</title>
        <meta name="description" content="數位科技設計學系的系上活動" />
      </Helmet>
      <div className={styles.container}>
        <Header />
        <Banner />
        <div className={styles.activityContainer}>
          <PageTitle title="系上活動" />
          <Navbar />
          <Row>
            {activitiesCategory.map((activities) => (
              <Col
                lg={4}
                sm={6}
                xs={12}
                className={styles.activitiesBox}
                key={activities.id}
              >
                <div className={styles.activitiesBox_img}>
                  <img
                    src={activities.photo}
                    className={styles.activitiesBox_img__size}
                  />
                </div>
                <div className={styles.activitiesBoxBottom}>
                  <div className={styles.activitiesBoxBottom_title}>
                    {activities.title}
                  </div>
                  <div className={styles.activitiesBoxBottom_more}>
                    &gt; More
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Activities;
