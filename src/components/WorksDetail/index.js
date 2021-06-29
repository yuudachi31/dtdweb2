import React from 'react';
import { Link } from 'react-router-dom';
//bootstrap
import { Col, Row } from 'react-bootstrap';
//css
import styles from './styles.module.scss';
//icons
import leftArrow from '../../assets/images/icons/icon_leftarrow.png';

const WorksDetail = (prop) => {
  const { worksDetail, path } = prop;
  return (
    <div className={styles.worksContainer}>
      {/* 作品名稱 */}
      <div className={styles.worksContainer_titleBar}>
        {/* <Col lg={1} md={1} sm={2} xs={2}> */}
        <Link
          to={path + '#content'}
          className={styles.worksContainer_titleBar__backBtn}
        >
          <img src={leftArrow} />
        </Link>
        {/* </Col> */}
        {/* <Col lg={11} md={11} sm={10} xs={10}> */}
        <div className={styles.worksContainer_titleBar__name}>
          {worksDetail.workTitle}
        </div>
        {/* </Col> */}
      </div>
      {/* 作品資訊 */}
      <Row className={styles.worksContainer_contentBar}>
        {/* 作品相片 */}
        <Col
          lg={4}
          md={12}
          sm={12}
          xs={12}
          className={styles.worksContainer_contentBar__img}
        >
          <img src={worksDetail.workImgUrl} />
        </Col>
        <Col
          lg={8}
          md={12}
          sm={12}
          className={styles.worksContainer_contentBar__content}
        >
          <div className={styles.content_detail}>
            {/* 得獎紀錄 */}
            {worksDetail.honor != '' ? (
              <div className={styles.content_detail__introContent}>
                <strong>得獎紀錄：</strong>
                <br />
                {worksDetail.honor.replace(/<br ?\/?>/g, '')}
              </div>
            ) : (
              <></>
            )}
            {/* 作品介紹 */}
            <div className={styles.content_detail__introContent}>
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
          <div className={styles.content_line}></div>
          {/* 相關連結 */}
          <div className={styles.content_relatedBar}>
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
