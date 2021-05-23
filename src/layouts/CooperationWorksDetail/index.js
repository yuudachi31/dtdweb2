import React, { Fragment, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as QueryString from 'query-string';
import * as Scroll from 'react-scroll';
//componemt&路徑
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import path from '../../utils/path';
//設計
import styles from './styles.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
//取資料
import { getCooperationWorksDetail } from '../../store/actions';
import { StoreContext } from '../../store/reducer';
//圖片匯入
import leftArrow from '../../assets/images/icons/icon_leftarrow.png';

const CooperationWorksDetail = () => {
  const location = useLocation();
  // const { groupid, teacherid, staffpath } = QueryString.parse(
  //   location.search,
  // );
  const { workId } = QueryString.parse(location.search);
  const {
    state: {
      cooperationWorksDetail,
      requestdata: { loading },
    },
    dispatch,
  } = useContext(StoreContext);

  useEffect(() => {
    getCooperationWorksDetail(dispatch, { workId });
    Scroll.scroller.scrollTo('top');
  }, []);

  return (
    <>
      {loading || JSON.stringify(cooperationWorksDetail) === '{}' ? (
        <Fragment>
          <Helmet>
            <meta charSet="utf-8" />
            <title>合作成果-國立臺北教育大學</title>
            <meta name="description" content="數位科技設計學系的教室團隊" />
          </Helmet>
          <div className={styles.container} id="top">
            <Header />
            <div className={styles.cwDetail}></div>
            <Footer />
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <Helmet>
            <meta charSet="utf-8" />
            <title>{cooperationWorksDetail.workTitle}-國立臺北教育大學</title>
            <meta name="description" content="數位科技設計學系的教室團隊" />
          </Helmet>
          <div className={styles.container} id="top">
            <Header />
            <div className={styles.cwDetail}>
              {/* 作品名稱 */}
              <Row className={styles.cwDetail_titleBar}>
                <Link
                  to={path.cooperationWorks}
                  className={styles.cwDetail_titleBar__backBtn}
                >
                  <img src={leftArrow} />
                </Link>
                <div className={styles.cwDetail_titleBar__name}>
                  {cooperationWorksDetail.workTitle}
                </div>
              </Row>
              {/* 作品資訊 */}
              <Row className={styles.cwDetail_contentBar}>
                {/* 作品相片 */}
                <Col
                  lg={4}
                  md={12}
                  sm={12}
                  xs={12}
                  className={styles.cwDetail_contentBar__img}
                >
                  <img src={cooperationWorksDetail.workImgUrl} />
                </Col>
                <Col
                  lg={8}
                  md={12}
                  sm={12}
                  className={styles.cwDetail_contentBar__content}
                >
                  <div className={styles.contentDetail}>
                    {/* 得獎紀錄 */}
                    {cooperationWorksDetail.honor != '' ? (
                      <div className={styles.contentDetail_intro}>
                        <strong>得獎紀錄：</strong>
                        <br />
                        {cooperationWorksDetail.honor.replace(/<br ?\/?>/g, '')}
                      </div>
                    ) : (
                      <></>
                    )}
                    {/* 作品介紹 */}
                    <div className={styles.contentDetail_intro}>
                      <strong>作品介紹：</strong>
                      <br />
                      {cooperationWorksDetail.introduction.replace(
                        /<br ?\/?>/g,
                        '',
                      )}
                    </div>
                    {/* 作者*/}
                    <div>
                      <strong>作者：</strong>
                      {cooperationWorksDetail.author}
                    </div>
                    {/* 指導老師 */}
                    <div>
                      <strong>指導老師：</strong>
                      {cooperationWorksDetail.instructor}
                    </div>
                  </div>
                  <div className={styles.contentLine}></div>
                  {/* 相關連結 */}
                  <div className={styles.relatedBar}>
                    <div>
                      <strong>相關連結：</strong>
                      {cooperationWorksDetail.relatedLinks.length != 0
                        ? cooperationWorksDetail.relatedLinks.map((link) => (
                            <a href={link.linkUrl} key={link.linkTitle}>
                              {link.linkTitle}
                            </a>
                          ))
                        : '無'}
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

export default CooperationWorksDetail;
