import React, { Fragment, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as QueryString from 'query-string';
import * as Scroll from 'react-scroll';
//componemt&常數
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import path from '../../utils/path';
//設計
import styles from './styles.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
//取資料
import { getStaffDetail } from '../../store/actions';
import { StoreContext } from '../../store/reducer';
//圖片匯入
import leftArrow from '../../assets/images/icons/icon_leftarrow.png';
import phoneIcon from '../../assets/images/icons/icon_phone.png';
import emailIcon from '../../assets/images/icons/icon_email.png';

const StaffDetail = () => {
  const { state, dispatch } = useContext(StoreContext);
  const location = useLocation();
  const { groupid, teacherid } = QueryString.parse(location.search);
  console.log(state);
  console.log(groupid);
  console.log(teacherid);

  useEffect(() => {
    console.log('useEffect work');
    const groupid2 = parseInt(groupid);
    const teacherid2 = parseInt(teacherid);
    getStaffDetail(dispatch, { groupid2, teacherid2 });
    Scroll.scroller.scrollTo('top');
  }, []);

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{state.staffDetail.teachername}-國立臺北教育大學</title>
        <meta name="description" content="數位科技設計學系的教室團隊" />
      </Helmet>
      <div className={styles.container} id="top">
        <Header />
        <div className={styles.staffDetail}>
          {/* 教師名字 */}
          <Row className={styles.staffDetail_titleBar}>
            <Link
              to={path.staff + '#group' + groupid}
              className={styles.staffDetail_titleBar__backBtn}
            >
              <img src={leftArrow} />
            </Link>
            <div className={styles.staffDetail_titleBar__name}>
              {state.staffDetail.teachername.search(/（/i) == -1
                ? state.staffDetail.teachername
                : state.staffDetail.teachername.substring(
                    0,
                    state.staffDetail.teachername.search(/（/i),
                  )}
            </div>
          </Row>
          {/* 教師資訊 */}
          <Row className={styles.staffDetail_contentBar}>
            {/* 教師頭像 */}
            <Col lg={3} md={12} sm={12} xs={12} class="justify-content-center">
              <div className={styles.staffDetail_contentBar__img}>
                <img src={'../' + state.staffDetail.imgurl} />
              </div>
            </Col>
            <Col
              lg={9}
              md={12}
              sm={12}
              className={styles.staffDetail_contentBar__content}
            >
              {/* 職稱 */}
              <div>
                職稱：
                {groupid != '3'
                  ? state.staffDetail.title
                  : '兼任' + state.staffDetail.title}
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
                  {state.staffDetail.phone != '' ? (
                    <a
                      href={
                        'tel:+886-2-2732-1104' +
                        (state.staffDetail.phone.search(/、/i) == -1
                          ? state.staffDetail.phone
                          : state.staffDetail.phone.substring(
                              0,
                              state.staffDetail.phone.search(/、/i),
                            ))
                      }
                    >
                      校內分機：{state.staffDetail.phone}
                    </a>
                  ) : (
                    <div className={styles.contactBar_contactBox__hint}>
                      校內分機：無
                    </div>
                  )}
                </Col>
                <Col className={styles.contactBar_contactBox}>
                  <img src={emailIcon} />
                  {state.staffDetail.email != '' ? (
                    <a href={'mailto:' + state.staffDetail.email}>
                      電子信箱：{state.staffDetail.email}
                    </a>
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
                  <strong>
                    {state.staffDetail.title != '助教' ? '研究室' : '辦公室'}：
                  </strong>
                  {state.staffDetail.room != '' ? state.staffDetail.room : '無'}
                </div>
                {/* 個人網站（助教為工作職掌）*/}
                <div>
                  <strong>
                    {state.staffDetail.title != '助教'
                      ? '個人網站'
                      : '工作職掌'}
                    ：
                  </strong>
                  {state.staffDetail.title != '助教' ? (
                    state.staffDetail.website != '' ? (
                      <a
                        href={state.staffDetail.website}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {state.staffDetail.website}
                      </a>
                    ) : (
                      '無'
                    )
                  ) : (
                    state.staffDetail.skill
                  )}
                </div>
                {/* 學歷（助教除外） */}
                <div>
                  <strong>
                    {state.staffDetail.title != '助教' ? '學歷：' : ''}
                  </strong>
                  {state.staffDetail.education}
                </div>
                {/* 專長（助教除外） */}
                <div>
                  <strong>
                    {state.staffDetail.title != '助教' ? '專長：' : ''}
                  </strong>
                  {state.staffDetail.title != '助教'
                    ? state.staffDetail.skill != ''
                      ? state.staffDetail.skill
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
  );
};

export default StaffDetail;
