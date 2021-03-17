import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
// import TeachBox from '../TeacherBox';
import { Col, Row } from 'react-bootstrap';

import teadetail from '../../assets/json/teachers.json';

const TeachGroup = () => {
  return (
    <div className={styles.containertg}>
      {teadetail.map((group) => (
        <div className={styles.containertg} key={group.title}>
          <div className={styles.tesGroupName}>{group.title}</div>
          <Row className={styles.teachbar}>
            {group.list.map((tea) => (
              <Col
                key={tea.img}
                className={styles.teachbar_teachbox}
                xl={3}
                lg={6}
                md={6}
                sm={12}
              >
                <Link
                  to={
                    '/teacher/tea?teachername=' +
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
                  className={styles.teachbar_teachbox__img}
                >
                  <img src={tea.imgurl} />
                </Link>
                <div className={styles.teachbar_teachbox__content}>
                  {tea.title}
                </div>
                <div className={styles.teachbar_teachbox__content}>
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

export default TeachGroup;
