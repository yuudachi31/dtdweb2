import React from 'react';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
//css
import styles from './styles.module.scss';

const TeamsGroup = (prop) => {
  const { gradeList } = prop;
  return (
    <div className={styles.container}>
      {gradeList.map((group) => (
        <div
          className={styles.teamsGContainer}
          key={group.groupId}
          id={'group' + group.groupId}
        >
          <div className={styles.teamsGContainer_teamsGroupName}>
            {group.title}
          </div>
          <Row className={styles.teamsGContainer_teamsBar}>
            {group.list.map((member) => (
              <Col
                key={member.id}
                className={styles.teamsGContainer_teamsBar__teamsBox}
                xl={3}
                lg={6}
                md={6}
                sm={12}
              >
                <div>
                  <img src={member.imgUrl} />
                </div>
                <p>{member.memberName}</p>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </div>
  );
};

export default TeamsGroup;
