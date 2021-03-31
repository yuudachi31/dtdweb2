import React, { useEffect, useContext } from 'react';
//路徑
import path from '../../utils/path';
//設計
import styles from './styles.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//取職員資料
import { getStaff } from '../../store/actions';
import { StoreContext } from '../../store/reducer';

const StaffGroup = () => {
  const { state, dispatch } = useContext(StoreContext);
  useEffect(() => {
    getStaff(dispatch);
  }, []);
  return (
    <div className={styles.container}>
      {state.staff.map((group) => (
        <div
          className={styles.container}
          key={group.groupid}
          id={'group' + group.groupid}
        >
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
                    tea.englishname +
                    '?groupid=' +
                    group.groupid +
                    '&teacherid=' +
                    tea.id
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
