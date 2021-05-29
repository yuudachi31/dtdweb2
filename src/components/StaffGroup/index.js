import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import * as Scroll from 'react-scroll';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
//path
import path from '../../utils/path';
//css
import styles from './styles.module.scss';
//data
import { getStaff } from '../../store/actions';
import { StoreContext } from '../../store/reducer';

const StaffGroup = () => {
  const {
    state: {
      staff,
      requestdata: { loading },
    },
    dispatch,
  } = useContext(StoreContext);

  //get url
  const getUrlId = window.location.href;

  useEffect(() => {
    getStaff(dispatch);
    if (getUrlId.search(/#/i) != -1) {
      Scroll.scroller.scrollTo(getUrlId.slice(getUrlId.search(/#/i) + 1), {
        offset: -32,
      });
    }
  }, []);
  // useEffect(() => {
  //   if (getUrlId.search(/#/i) != -1) {
  //     Scroll.scroller.scrollTo(getUrlId.slice(getUrlId.search(/#/i) + 1), {
  //       offset: -32,
  //     });
  //   }
  // }, [loading]);
  return (
    <>
      {loading ? (
        <div className={styles.container}></div>
      ) : (
        <div className={styles.container}>
          {staff.map((group) => (
            <div
              className={styles.staffContainer}
              key={group.groupId}
              id={'group' + group.groupId}
            >
              <div className={styles.staffContainer_staffGroupName}>
                {group.title}
              </div>
              <Row className={styles.staffContainer_staffBar}>
                {group.list.map((tea) => (
                  <Col
                    key={tea.id}
                    className={styles.staffContainer_staffBar__staffBox}
                    xl={3}
                    lg={6}
                    md={6}
                    sm={12}
                  >
                    <Link
                      to={
                        path.staff +
                        '/' +
                        tea.englishName +
                        '?groupid=' +
                        group.groupid +
                        '&staffpath=' +
                        (tea.teacherName.search(/（/i) == -1
                          ? tea.teacherName
                          : tea.teacherName.slice(
                              0,
                              tea.teacherName.search(/（/i),
                            ))
                      }
                    >
                      <img src={tea.imgUrl} />
                    </Link>
                    <div>{tea.title}</div>
                    <div>{tea.teacherName}</div>
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default StaffGroup;
