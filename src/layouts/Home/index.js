import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './styles.module.scss';
import bannerUrl from './banner.json';
/* react-Bootstrap */
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
/* images */
import about from '../../assets/images/index/about.png';
import works from '../../assets/images/index/works.png';
import senior from '../../assets/images/index/senior.png';
import classroom from '../../assets/images/index/classroom.png';
import Job from '../../assets/images/index/Job.png';
import StudyGroup from '../../assets/images/index/StudyGroup.png';
import Fan from '../../assets/images/index/Fan.png';
import TeachGroup from '../../assets/images/index/TeachGroup.png';
import WebGroup from '../../assets/images/index/WebGroup.png';
import Ntue from '../../assets/images/index/Ntue.png';

const Home = () => {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>數位科技設計學系-國立臺北教育大學</title>
        <meta name="description" content="數位科技設計學系的首頁" />
      </Helmet>
      <Header />
      <div>
        <Carousel>
          <Carousel.Item interval={5000}>
            <img
              className="d-block w-100"
              src={bannerUrl.banner_1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              className="d-block w-100"
              src={bannerUrl.banner_2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              className="d-block w-100"
              src={bannerUrl.banner_4}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>

      <div className={styles.container}>
        <div className={`${styles.section} ${styles.section_news}`} id="news">
          <div className={styles.newsContent}>
            <h1>系務公告 / Announcement</h1>
          </div>
          <div className={styles.newsContent}>
            <h1>活動公告 / Event</h1>
          </div>
        </div>
        <div className={styles.section} id="event">
          <h1>活動公告 / Event</h1>
          <hr></hr>
        </div>
        <div className={styles.section} id="admissionInformation">
          <h1>新生快報 / Admission Information </h1>
          <hr></hr>
          <Row className={styles.link}>
            <Col sm={3} xs={12}>
              <Link>
                <div className={styles.link_img}>
                  <img src={about} alt="" className={styles.link_img__size} />
                </div>
                <div className={styles.link_p}>
                  <p>關於數位</p>
                </div>
              </Link>
            </Col>
            <Col sm={3} xs={12}>
              <Link>
                <div className={styles.link_img}>
                  <img src={works} alt="" className={styles.link_img__size} />
                </div>
                <div className={styles.link_p}>
                  <p>作品展示</p>
                </div>
              </Link>
            </Col>
            <Col sm={3} xs={12}>
              <Link>
                <div className={styles.link_img}>
                  <img src={senior} alt="" className={styles.link_img__size} />
                </div>
                <div className={styles.link_p}>
                  <p>招生資訊</p>
                </div>
              </Link>
            </Col>
            <Col sm={3} xs={12}>
              <Link>
                <div className={styles.link_img}>
                  <img
                    src={classroom}
                    alt=""
                    className={styles.link_img__size}
                  />
                </div>
                <div className={styles.link_p}>
                  <p>教室導覽</p>
                </div>
              </Link>
            </Col>
          </Row>
        </div>
        <div className={`${styles.section} ${styles.section_link}`} id="link">
          <hr></hr>
          <Row className={styles.link}>
            <Col sm={2} xs={6}>
              <Link>
                <div className={styles.link_img}>
                  <img src={Job} alt="" />
                </div>
                <div className={styles.link_p}>
                  <p>就業分析</p>
                </div>
              </Link>
            </Col>
            <Col sm={2} xs={6}>
              <Link>
                <div className={styles.link_img}>
                  <img src={StudyGroup} alt="" />
                </div>
                <div className={styles.link_p}>
                  <p>讀書會</p>
                </div>
              </Link>
            </Col>
            <Col sm={2} xs={6}>
              <Link>
                <div className={styles.link_img}>
                  <img src={Fan} alt="" />
                </div>
                <div className={styles.link_p}>
                  <p>粉絲團</p>
                </div>
              </Link>
            </Col>
            <Col sm={2} xs={6}>
              <Link>
                <div className={styles.link_img}>
                  <img src={TeachGroup} alt="" />
                </div>
                <div className={styles.link_p}>
                  <p>教學團隊</p>
                </div>
              </Link>
            </Col>
            <Col sm={2} xs={6}>
              <Link>
                <div className={styles.link_img}>
                  <img src={WebGroup} alt="" />
                </div>
                <div className={styles.link_p}>
                  <p>系網團隊</p>
                </div>
              </Link>
            </Col>
            <Col sm={2} xs={6}>
              <Link>
                <div className={styles.link_img}>
                  <img src={Ntue} alt="" />
                </div>
                <div className={styles.link_p}>
                  <p>國北教大</p>
                </div>
              </Link>
            </Col>
          </Row>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default Home;
