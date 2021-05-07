import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

/* react-Bootstrap */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import indexContent from '../../assets/json/indexContent.json';

const IndexContent = () => {
  return (
    <>
      {indexContent.event.map((event) => (
        <div className={styles.section} id="event" key={event.title}>
          <h1>{event.title}</h1>
          <hr></hr>
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
              <Col lg={3} sm={6} xs={12} key={list.title}>
                <Link to="/" className={styles.link_a__textdecnone}>
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
            <Col sm={2} xs={6} key={link.title}>
              <Link to="/" className={styles.link_a__textdecnone}>
                <div className={styles.link_img}>
                  <img src={link.imgUrl} alt="" />
                </div>
                <div className={styles.link_p}>{link.title}</div>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default IndexContent;
