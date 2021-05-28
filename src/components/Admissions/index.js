import React, { useState, useEffect } from 'react';
// 設計
import styles from './styles.module.scss';
// icon匯入
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExternalLinkAlt,
  faDownload,
} from '@fortawesome/free-solid-svg-icons';
// 資料匯入
import admissionsjson from '../../assets/json/admissions.json';

const Admissions = (prop) => {
  const [admissionsDetail, setAdmissionsDetail] = useState([]);
  useEffect(() => {
    setAdmissionsDetail(admissionsjson[prop.number]);
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {admissionsDetail.regulations_content &&
      admissionsDetail.regulations_document ? (
        <>
          <div className={styles.admissions_titleBar}>入學資訊</div>
          <div className={styles.admissions_infoBlock}>
            <div className={styles.infoBlock_degreeBox}>
              <img
                src={admissionsDetail.info_degreeImg}
                className={styles.degreeBox_img__width}
              ></img>
              <div
                className={`${styles.degreeBox_name} ${styles.admissions_content__preLine}`}
              >
                {admissionsDetail.info_degreeName}
              </div>
            </div>
            <div className={styles.infoBlock_infoBox}>
              <div className={styles.infoBox_infoRow}>
                <div
                  className={`${styles.infoRow_title} ${styles.admissions_content__fontSize}`}
                >
                  招生資訊：
                </div>
                <div
                  className={`${styles.infoRow_content} ${styles.admissions_content__fontSize}`}
                >
                  {admissionsDetail.info_studuntCount}
                </div>
              </div>
              <div className={styles.infoBox_infoRow}>
                <div
                  className={`${styles.infoRow_title} ${styles.admissions_content__fontSize}`}
                >
                  入學方式：
                </div>
                <div
                  className={`${styles.infoRow_content} ${styles.admissions_content__fontSize} ${styles.admissions_content__preLine}`}
                >
                  {admissionsDetail.info_admissions}
                </div>
              </div>
              <div className={styles.infoBox_infoRow}>
                <div
                  className={`${styles.infoRow_title} ${styles.admissions_content__fontSize}`}
                >
                  入學對象：
                </div>
                <div
                  className={`${styles.infoRow_content} ${styles.admissions_content__fontSize}`}
                >
                  {admissionsDetail.info_target}
                </div>
              </div>
              <div className={styles.infoBox_infoRow}>
                <div
                  className={`${styles.infoRow_title} ${styles.admissions_content__fontSize}`}
                >
                  平日上課時間：
                </div>
                <div
                  className={`${styles.infoRow_content} ${styles.admissions_content__fontSize}`}
                >
                  {admissionsDetail.info_schoolTime}
                </div>
              </div>
              <div className={styles.infoBox_infoRow}>
                <div
                  className={`${styles.infoRow_title} ${styles.admissions_content__fontSize}`}
                >
                  相關資訊連結：
                </div>
                <div
                  className={`${styles.infoRow_content} ${styles.admissions_content__fontSize}`}
                >
                  <a
                    href={admissionsDetail.info_documentURL}
                    className={styles.infoRow_document}
                  >
                    {admissionsDetail.info_documentName}
                  </a>
                </div>
              </div>
              <div className={styles.infoBox_infoRow}>
                <div
                  className={`${styles.infoRow_title} ${styles.admissions_content__fontSize}`}
                >
                  備註：
                </div>
                <div
                  className={`${styles.infoRow_content} ${styles.admissions_content__fontSize}`}
                >
                  {admissionsDetail.info_remark}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.admissions_titleBar}>修課規定</div>
          <div className={styles.admissions_regulationsBlock}>
            <div className={styles.regulationsBlock_regulationsBox}>
              {admissionsDetail.regulations_content.map((regulationContent) => (
                <div
                  className={styles.regulationsBox_regulationsItem__margin}
                  key={regulationContent.content_title}
                >
                  <div
                    className={`${styles.regulationsItem_title} ${styles.admissions_content__fontSize}`}
                  >
                    {regulationContent.content_title}
                  </div>
                  <div
                    className={`${styles.regulationsItem_content__marginLeft} ${styles.admissions_content__fontSize} ${styles.admissions_content__preLine}`}
                  >
                    {regulationContent.content_rules}
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.regulationsBlock_divisionLine}></div>
            <div className={styles.regulationsBlock_regulationsBox}>
              {admissionsDetail.regulations_document.map(
                (regulationDocument) => (
                  <div
                    className={styles.regulationsBox_regulationsItem__margin}
                    key={regulationDocument.document_title}
                  >
                    <div
                      className={`${styles.regulationsItem_title} ${styles.admissions_content__fontSize}`}
                    >
                      {regulationDocument.document_title}
                    </div>
                    <a
                      className={`${styles.regulationsItem_document} ${styles.regulationsItem_content__marginLeft} ${styles.admissions_content__fontSize}`}
                      href={regulationDocument.document_URL}
                    >
                      <FontAwesomeIcon
                        className={styles.document_icon_margin}
                        icon={
                          regulationDocument.document_type == '0'
                            ? faExternalLinkAlt
                            : faDownload
                        }
                      />
                      <div className={styles.admissions_content__fontSize}>
                        {regulationDocument.document_name}
                      </div>
                    </a>
                  </div>
                ),
              )}
            </div>
          </div>
          <div className={styles.admissions_titleBar}>修業地圖</div>
          <div className={styles.admissions_classMapBlock}>
            <img
              src={admissionsDetail.classMap_img}
              className={styles.classMapBlock_img__width}
            ></img>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Admissions;
