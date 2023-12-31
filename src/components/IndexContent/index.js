import React from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

/* react-Bootstrap */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/* 從json檔撈資料 */
import indexContent from '../../assets/json/indexContent.json';

const IndexContent = () => {
  return (
    <>
      <div className={styles.section}>
        <h1>招生影片 / Admissions Video</h1>
        <hr></hr>
        <div className={styles.indexContent_video}>
          <iframe
            className={styles.indexContent_video_}
            width="768"
            height="432"
            src="https://www.youtube.com/embed/hIz634BMZp4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      {indexContent.event.map((event) => (
        <div className={styles.section} id="event" key={event.title}>
          <h1>{event.title}</h1>
          <hr></hr>
          <Row className={styles.link}>
            {event.list.map((list) => (
              <Col
                lg={4}
                sm={4}
                xs={12}
                key={list.title}
                className={styles.eventBlock}
              >
                <a
                  href={list.path}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.link_a__textdecnone}
                >
                  <div className={styles.eventLink_img}>
                    <img
                      src={list.imgUrl}
                      alt=""
                      className={styles.eventLink_img__size}
                    />
                  </div>
                  <div className={`${styles.link_p} ${styles.link_p__style}`}>
                    {list.title}
                  </div>
                </a>
              </Col>
            ))}
          </Row>
        </div>
      ))}
      {indexContent.admission.map((admission) => (
        <div
          className={styles.section}
          id="admissionInformation"
          key={admission.title}
        >
          <h1>{admission.title}</h1>
          <hr></hr>
          <Row className={styles.link}>
            {admission.list.map((list) => (
              <Col
                lg={3}
                sm={6}
                xs={12}
                key={list.title}
                className={styles.admissionBlock}
              >
                <Link
                  to={
                    list.title === '教室導覽'
                      ? {
                          pathname: list.path,
                          state: { prevPath: location.pathname },
                        }
                      : list.path
                  }
                  className={styles.link_a__textdecnone}
                >
                  <div className={styles.link_img}>
                    <img
                      src={list.imgUrl}
                      alt=""
                      className={styles.link_img__size}
                    />
                  </div>
                  <div className={styles.link_p}>{list.title}</div>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      ))}
      <div className={`${styles.section} ${styles.section_link}`} id="link">
        <hr></hr>
        <Row className={styles.link}>
          {indexContent.link.map((link) => (
            <Col sm={2} xs={6} key={link.title} className={styles.linkBlock}>
              <a
                href={link.path}
                target={
                  link.id === 1 || link.id === 2 || link.id === 5
                    ? ''
                    : `"_blank"`
                }
                rel="noreferrer"
                className={styles.link_a__textdecnone}
              >
                <div className={styles.link_img}>
                  <img src={link.imgUrl} alt="" />
                </div>
                <div className={styles.link_p}>{link.title}</div>
              </a>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default IndexContent;
