import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import path from '../../utils/path';

import styles from './styles.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';

import teadetailjson from '../../assets/json/teachers.json';

const StaffGroup = () => {
  const [teadetail, setteadetail] = useState([]);
  useEffect(() => {
    setteadetail(teadetailjson);
  }, []);
  return (
    <div className={styles.container}>
      {teadetail.map((group) => (
        <div className={styles.container} key={group.title}>
          <div className={styles.staffGroupName}>{group.title}</div>
          <Row className={styles.staffBar}>
            {group.list.map((tea) => (
              <Col
                key={tea.id}
                className={styles.staffBar_staffBox}
                xl={3}
                lg={6}
                md={6}
                sm={12}
              >
                <Link
                  to={
                    path.staff +
                    '/' +
                    tea.id +
                    '?teachername=' +
                    tea.teachername +
                    '&title=' +
                    tea.title +
                    '&phone=' +
                    tea.phone +
                    '&room=' +
                    tea.room +
                    '&website=' +
                    tea.website +
                    '&education=' +
                    tea.education +
                    '&skill=' +
                    tea.skill +
                    '&email=' +
                    tea.email +
                    '&imgurl=' +
                    tea.imgurl +
                    '&groupname=' +
                    group.title
                  }
                  className={styles.staffBar_staffBox__img}
                >
                  <img src={tea.imgurl} />
                </Link>
                <div className={styles.staffBar_staffBox__content}>
                  {tea.title}
                </div>
                <div className={styles.staffBar_staffBox__content}>
                  {tea.teachername}
                </div>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </div>
  );
};

export default StaffGroup;
