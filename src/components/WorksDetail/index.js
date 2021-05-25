import React from 'react';

import styles from './styles.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

//圖片匯入
import leftArrow from '../../assets/images/icons/icon_leftarrow.png';

const WorksDetail = (prop) => {
  const { worksDetail, path } = prop;
  return (
    <div className={styles.gwDetail}>
      {/* 作品名稱 */}
      <Row className={styles.gwDetail_titleBar}>
        <Link
          to={path + '#content'}
          className={styles.gwDetail_titleBar__backBtn}
        >
          <img src={leftArrow} />
        </Link>
        <div className={styles.gwDetail_titleBar__name}>
          {worksDetail.workTitle}
        </div>
      </Row>
      {/* 作品資訊 */}
      <Row className={styles.gwDetail_contentBar}>
        {/* 作品相片 */}
        <Col
          lg={4}
          md={12}
          sm={12}
          xs={12}
          className={styles.gwDetail_contentBar__img}
        >
          <img src={worksDetail.workImgUrl} />
        </Col>
        <Col
          lg={8}
          md={12}
          sm={12}
          className={styles.gwDetail_contentBar__content}
        >
          <div className={styles.contentDetail}>
            {/* 得獎紀錄 */}
            {worksDetail.honor != '' ? (
              <div className={styles.contentDetail_intro}>
                <strong>得獎紀錄：</strong>
                <br />
                {worksDetail.honor.replace(/<br ?\/?>/g, '')}
              </div>
            ) : (
              <></>
            )}
            {/* 作品介紹 */}
            <div className={styles.contentDetail_intro}>
              <strong>作品介紹：</strong>
              <br />
              {worksDetail.introduction.replace(/<br ?\/?>/g, '')}
            </div>
            {/* 作者*/}
            <div>
              <strong>作者：</strong>
              {worksDetail.author}
            </div>
            {/* 指導老師 */}
            <div>
              <strong>指導老師：</strong>
              {worksDetail.instructor}
            </div>
          </div>
          <div className={styles.contentLine}></div>
          {/* 相關連結 */}
          <div className={styles.relatedBar}>
            <div>
              <strong>相關連結：</strong>
              {worksDetail.relatedLinks.length != 0
                ? worksDetail.relatedLinks.map((link) => (
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
  );
};

export default WorksDetail;
