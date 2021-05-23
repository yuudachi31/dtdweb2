import React, { Fragment, useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './styles.module.scss';
import leftArrow from '../../assets/images/icons/icon_leftarrow.png';
// import img from '../../assets/images/index/about.png';
import { UIStoreContext } from '../../uiStore/reducer';
import path from '../../utils/path';
import * as Scroll from 'react-scroll';

const ActivityDetail = (prop) => {
  /*進到此頁時，會自動置頂*/
  useEffect(() => {
    Scroll.scroller.scrollTo('top');
  }, []);

  const {
    state: {
      activitiesPage: { activitiesCategory },
    },
  } = useContext(UIStoreContext);

  const activity = activitiesCategory.find(
    (x) => x.id === prop.match.params.activityId,
  );

  const linkUrl = () => {
    if (activity.category === 'DTDActivities') {
      return `${path.activities}#content`;
    } else {
      return `${path.activities}/${activity.category}#content`;
    }
  };

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>系上活動-國立臺北教育大學</title>
        <meta name="description" content="數位科技設計學系的系上活動" />
      </Helmet>
      <div className={styles.container} id="top">
        <Header />
        <div className={styles.activityDetailContainer}>
          <div className={styles.titileBar}>
            <Link to={linkUrl}>
              <div className={styles.titileBar_img}>
                <img
                  src={leftArrow}
                  className={styles.titileBar_img__size}
                ></img>
              </div>
            </Link>
            <div className={styles.titileBar_title}>{activity.title}</div>
          </div>
          <div className={styles.activityContent}>
            <div className={styles.activityContent_img}>
              <img
                src={activity.photo}
                className={styles.activityContent_img__size}
              ></img>
            </div>
            <div className={styles.descriptionSection}>
              <div className={styles.descriptionSection_title}>活動介紹：</div>
              <div className={styles.descriptionSection_content}>
                {activity.description}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default ActivityDetail;
