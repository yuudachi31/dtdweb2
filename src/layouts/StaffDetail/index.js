import React, { Fragment, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as QueryString from 'query-string';
import * as Scroll from 'react-scroll';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
//componemts
import Header from '../../components/Header';
import Footer from '../../components/Footer';
//path
import path from '../../utils/path';
//css
import styles from './styles.module.scss';
//icons
import leftArrow from '../../assets/images/icons/icon_leftarrow.png';
import phoneIcon from '../../assets/images/icons/icon_phone.png';
import emailIcon from '../../assets/images/icons/icon_email.png';
//data
import { getStaffDetail } from '../../store/actions';
import { StoreContext } from '../../store/reducer';

const StaffDetail = () => {
  const location = useLocation();
  const { groupid, staffpath } = QueryString.parse(location.search);
  const {
    state: {
      staffDetail,
      requestdata: { loading },
    },
    dispatch,
  } = useContext(StoreContext);

  useEffect(() => {
    getStaffDetail(dispatch, { staffpath });
    Scroll.scroller.scrollTo('top');
  }, []);

  return (
    <>
      {loading || JSON.stringify(staffDetail) === '{}' ? (
        <Fragment>
          <Helmet>
            <meta charSet="utf-8" />
            <title>教學團隊-國立臺北教育大學</title>
            <meta name="description" content="數位科技設計學系的教學團隊" />
          </Helmet>
          <div className={styles.container} id="top">
            <Header />
            <div className={styles.staffContainer}></div>
            <Footer />
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <Helmet>
            <meta charSet="utf-8" />
            <title>{staffDetail.teachername}-國立臺北教育大學</title>
            <meta name="description" content="數位科技設計學系的教學團隊" />
          </Helmet>
          <div className={styles.container} id="top">
            <Header />
            <div className={styles.staffContainer}>
              {/* 教師名字 */}
              <Row className={styles.staffContainer_titleBar}>
                <Link
                  to={path.staff + '#group' + groupid}
                  className={styles.staffContainer_titleBar__backBtn}
                >
                  <img src={leftArrow} />
                </Link>
                <div className={styles.staffContainer_titleBar__name}>
                  {staffDetail.teachername.search(/（/i) == -1
                    ? staffDetail.teachername
                    : staffDetail.teachername.substring(
                        0,
                        staffDetail.teachername.search(/（/i),
                      )}
                </div>
              </Row>
              {/* 教師資訊 */}
              <Row className={styles.staffContainer_contentBar}>
                {/* 教師頭像 */}
                <Col
                  lg={3}
                  md={12}
                  sm={12}
                  xs={12}
                  className={styles.staffContainer_contentBar__box}
                >
                  <div className={styles.staffContainer_contentBar__img}>
                    <img src={staffDetail.imgurl} />
                  </div>
                </Col>
                <Col
                  lg={9}
                  md={12}
                  sm={12}
                  className={styles.staffContainer_contentBar__content}
                >
                  {/* 職稱 */}
                  <div>
                    職稱：
                    {groupid != '3'
                      ? staffDetail.title
                      : '兼任' + staffDetail.title}
                  </div>
                  {/* 電話與email */}
                  <Row className={styles.content_contactBar}>
                    <Col
                      xl={3}
                      lg={4}
                      md={5}
                      className={styles.content_contactBar__contactBox}
                    >
                      <img src={phoneIcon} />
                      {staffDetail.phone != '' ? (
                        <a
                          href={
                            'tel:+886-2-2732-1104' +
                            (staffDetail.phone.search(/、/i) == -1
                              ? staffDetail.phone
                              : staffDetail.phone.substring(
                                  0,
                                  staffDetail.phone.search(/、/i),
                                ))
                          }
                        >
                          校內分機：{staffDetail.phone}
                        </a>
                      ) : (
                        <div>校內分機：無</div>
                      )}
                    </Col>
                    <Col className={styles.content_contactBar__contactBox}>
                      <img src={emailIcon} />
                      {staffDetail.email != '' ? (
                        <a href={'mailto:' + staffDetail.email}>
                          電子信箱：{staffDetail.email}
                        </a>
                      ) : (
                        <div>電子信箱：無</div>
                      )}
                    </Col>
                  </Row>
                  <div className={styles.content_contactLine}></div>
                  <div className={styles.content_contactDetail}>
                    {/* 辦公室or研究室 */}
                    <div>
                      <strong>
                        {staffDetail.title != '助教' ? '研究室' : '辦公室'}：
                      </strong>
                      {staffDetail.room != '' ? staffDetail.room : '無'}
                    </div>
                    {/* 個人網站（助教為工作職掌）*/}
                    <div>
                      <strong>
                        {staffDetail.title != '助教' ? '個人網站' : '工作職掌'}
                        ：
                      </strong>
                      {staffDetail.title != '助教' ? (
                        staffDetail.website != '' ? (
                          <a
                            href={staffDetail.website}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {staffDetail.website}
                          </a>
                        ) : (
                          '無'
                        )
                      ) : (
                        staffDetail.skill
                      )}
                    </div>
                    {/* 學歷（助教除外） */}
                    <div>
                      <strong>
                        {staffDetail.title != '助教' ? '學歷：' : ''}
                      </strong>
                      {staffDetail.title != '助教'
                        ? staffDetail.education != ''
                          ? staffDetail.education
                          : '無'
                        : ''}
                    </div>
                    {/* 專長（助教除外） */}
                    <div>
                      <strong>
                        {staffDetail.title != '助教' ? '專長：' : ''}
                      </strong>
                      {staffDetail.title != '助教'
                        ? staffDetail.skill != ''
                          ? staffDetail.skill
                          : '無'
                        : ''}
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <Footer />
        </Fragment>
      )}
    </>
  );
};

export default StaffDetail;
