import React, { Fragment, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as QueryString from 'query-string';
import * as Scroll from 'react-scroll';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import styles from './styles.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Col, Row } from 'react-bootstrap';

import leftArrow from '../../assets/images/icons/icon_leftarrow.png';
import phoneIcon from '../../assets/images/icons/icon_phone.png';
import emailIcon from '../../assets/images/icons/icon_email.png';

const TeachDetail = () => {
  const location = useLocation();
  useEffect(() => {
    Scroll.scroller.scrollTo('top');
  }, []);
  const {
    teachername,
    title,
    phone,
    room,
    website,
    education,
    skill,
    email,
    imgurl,
    groupname,
  } = QueryString.parse(location.search);

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{teachername}-國立臺北教育大學</title>
        <meta name="description" content="數位科技設計學系的教室團隊" />
      </Helmet>
      <div className={styles.container} id="top">
        <Header />
        <div className={styles.teachdetail}>
          <Row className={styles.teachdetail_titlebar}>
            <Link
              to={'/teacher'}
              className={styles.teachdetail_titlebar__backbtn}
            >
              <img src={leftArrow} />
            </Link>
            <div className={styles.teachdetail_titlebar__name}>
              {teachername}
            </div>
          </Row>
          <Row className={styles.teachdetail_contentbar}>
            <Col lg={3} md={4} sm={12} xs={12}>
              <div className={styles.teachdetail_contentbar__img}>
                <img src={'../' + imgurl} />
              </div>
            </Col>
            <Col
              lg={9}
              md={8}
              sm={12}
              className={styles.teachdetail_contentbar__content}
            >
              <div>
                職稱：{groupname != '兼任教師' ? title : '兼任' + title}
              </div>
              <Row className={styles.contactbar}>
                <Col
                  xl={3}
                  lg={4}
                  md={12}
                  className={styles.contactbar_contactbox}
                >
                  <img src={phoneIcon} />
                  {phone != '' ? (
                    <a href={'tel:+886-2-2732-1104' + { phone }}>
                      校內分機：{phone}
                    </a>
                  ) : (
                    <div className={styles.contactbar_contactbox__hint}>
                      校內分機：無
                    </div>
                  )}
                </Col>
                <Col className={styles.contactbar_contactbox}>
                  <img src={emailIcon} />
                  {email != '' ? (
                    <a href={'mailto:' + { email }}>電子信箱：{email}</a>
                  ) : (
                    <div className={styles.contactbar_contactbox__hint}>
                      電子信箱：無
                    </div>
                  )}
                </Col>
              </Row>
              <div className={styles.contactline}></div>
              <div className={styles.contactdetail}>
                <div>
                  <strong>{title != '助教' ? '研究室' : '辦公室'}：</strong>
                  {room != '' ? room : '無'}
                </div>
                <div>
                  <strong>{title != '助教' ? '個人網站' : '工作職掌'}：</strong>
                  {title != '助教' ? (
                    website != '' ? (
                      <a href={website} target="_blank" rel="noreferrer">
                        {website}
                      </a>
                    ) : (
                      '無'
                    )
                  ) : (
                    skill
                  )}
                </div>
                <div>
                  <strong>{title != '助教' ? '學歷：' : ''}</strong>
                  {education}
                </div>
                <div>
                  <strong>{title != '助教' ? '專長：' : ''}</strong>
                  {title != '助教' ? (skill != '' ? skill : '無') : ''}
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default TeachDetail;
