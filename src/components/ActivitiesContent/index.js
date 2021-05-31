import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

/* react-Bootstrap */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import path from '../../utils/path';

/* icon */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

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
          <Link
            to={`${path.activities}/${activities.category}/${activities.title}`}
          >
            <div className={styles.activitiesBox_img}>
              <img
                src={activities.photo}
                className={styles.activitiesBox_img__size}
              />
            </div>
          </Link>
          <div className={styles.activitiesBoxBottom}>
            <div className={styles.activitiesBoxBottom_title}>
              {activities.title}
            </div>
            <Link
              to={`${path.activities}/${activities.category}/${activities.id}`}
            >
              <div className={styles.activitiesBoxBottom_more}>
                <FontAwesomeIcon icon={faAngleRight} />
                &ensp;More
              </div>
            </Link>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default ActivitiesContent;
