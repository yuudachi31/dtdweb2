import React from 'react';
// import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
/* react-Bootstrap */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ActivitiesContent = (prop) => {
  return (
    <Row>
      {prop.activitiesCategory.map((activities) => (
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
            <div className={styles.activitiesBoxBottom_more}>&gt; More</div>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default ActivitiesContent;
