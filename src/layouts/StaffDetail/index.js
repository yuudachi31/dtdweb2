import React, { Fragment, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as QueryString from 'query-string';
import * as Scroll from 'react-scroll';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import path from '../../utils/path';

import styles from './styles.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Col, Row } from 'react-bootstrap';

import leftArrow from '../../assets/images/icons/icon_leftarrow.png';
import phoneIcon from '../../assets/images/icons/icon_phone.png';
import emailIcon from '../../assets/images/icons/icon_email.png';

const StaffDetail = () => {
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
        <div className={styles.staffDetail}>
          {/* 教師名字 */}
          <Row className={styles.staffDetail_titleBar}>
            <Link
              to={path.staff}
              className={styles.staffDetail_titleBar__backBtn}
            >
              <img src={leftArrow} />
            </Link>
            <div className={styles.staffDetail_titleBar__name}>
              {teachername.search(/（/i) == -1
                ? teachername
                : teachername.substring(0, teachername.search(/（/i))}
            </div>
          </Row>
          {/* 教師資訊 */}
          <Row className={styles.staffDetail_contentBar}>
            {/* 教師頭像 */}
            <Col lg={3} md={4} sm={12} xs={12}>
              <div className={styles.staffDetail_contentBar__img}>
                <img src={'../' + imgurl} />
              </div>
            </Col>
            <Col
              lg={9}
              md={8}
              sm={12}
              className={styles.staffDetail_contentBar__content}
            >
              {/* 職稱 */}
              <div>
                職稱：{groupname != '兼任教師' ? title : '兼任' + title}
              </div>
              {/* 電話與email */}
              <Row className={styles.contactBar}>
                <Col
                  xl={3}
                  lg={4}
                  md={12}
                  className={styles.contactBar_contactBox}
                >
                  <img src={phoneIcon} />
                  {phone != '' ? (
                    <a
                      href={
                        'tel:+886-2-2732-1104' +
                        (phone.search(/、/i) == -1
                          ? phone
                          : phone.substring(0, phone.search(/、/i)))
                      }
                    >
                      校內分機：{phone}
                    </a>
                  ) : (
                    <div className={styles.contactBar_contactBox__hint}>
                      校內分機：無
                    </div>
                  )}
                </Col>
                <Col className={styles.contactBar_contactBox}>
                  <img src={emailIcon} />
                  {email != '' ? (
                    <a href={'mailto:' + { email }}>電子信箱：{email}</a>
                  ) : (
                    <div className={styles.contactBar_contactBox__hint}>
                      電子信箱：無
                    </div>
                  )}
                </Col>
              </Row>
              <div className={styles.contactLine}></div>
              <div className={styles.contactDetail}>
                {/* 辦公室or研究室 */}
                <div>
                  <strong>{title != '助教' ? '研究室' : '辦公室'}：</strong>
                  {room != '' ? room : '無'}
                </div>
                {/* 個人網站（助教為工作職掌）*/}
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
                {/* 學歷（助教除外） */}
                <div>
                  <strong>{title != '助教' ? '學歷：' : ''}</strong>
                  {education}
                </div>
                {/* 專長（助教除外） */}
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

export default StaffDetail;
