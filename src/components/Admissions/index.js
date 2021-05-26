import React, { useState, useEffect } from 'react';
//設計
import styles from './styles.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
//匯入icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExternalLinkAlt,
  faDownload,
} from '@fortawesome/free-solid-svg-icons';
//匯入資料
import admissionsjson from '../../assets/json/admissions.json';

const Admissions = (prop) => {
  const [admissionsdetail, setadmissionsdetail] = useState([]);
  useEffect(() => {
    setadmissionsdetail(admissionsjson[prop.number]);
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {admissionsdetail.regulations_content &&
      admissionsdetail.regulations_document ? (
        <>
          <div className={styles.admissions_titleBar}>入學資訊</div>
          <div className={styles.admissions_infoBlock}>
            <div className={styles.infoBlock_degreeBox}>
              <img
                src={admissionsdetail.info_img}
                className={styles.degreeBox_img__width}
              ></img>
              <div
                className={`${styles.degreeBox_name} ${styles.admissions_content__preLine}`}
              >
                {admissionsdetail.info_departmentName}
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
                  {admissionsdetail.info_studuntNumber}
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
                  {admissionsdetail.info_admission}
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
                  {admissionsdetail.info_target}
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
                  {admissionsdetail.info_schoolTime}
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
                    href={admissionsdetail.info_documentURL}
                    className={styles.infoRow_document}
                  >
                    {admissionsdetail.info_documentName}
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
                  {admissionsdetail.info_remark}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.admissions_titleBar}>修課規定</div>
          <div className={styles.admissions_regulationsBlock}>
            <div className={styles.regulationsBlock_regulationsBox}>
              {admissionsdetail.regulations_content.map(
                (regulationsContent) => (
                  <div
                    className={styles.regulationsBox_regulationsItem__margin}
                    key={regulationsContent.regulations_title}
                  >
                    <div
                      className={`${styles.regulationsItem_title} ${styles.admissions_content__fontSize}`}
                    >
                      {regulationsContent.regulations_title}
                    </div>
                    <div
                      className={`${styles.regulationsItem_content__marginLeft} ${styles.admissions_content__fontSize} ${styles.admissions_content__preLine}`}
                    >
                      {regulationsContent.regulations_rules}
                    </div>
                  </div>
                ),
              )}
            </div>
            <div className={styles.regulationsBlock_divisionLine}></div>
            <div className={styles.regulationsBlock_regulationsBox}>
              {admissionsdetail.regulations_document.map(
                (regulationsDocument) => (
                  <div
                    className={styles.regulationsBox_regulationsItem__margin}
                    key={regulationsDocument.regulations_title}
                  >
                    <div
                      className={`${styles.regulationsItem_title} ${styles.admissions_content__fontSize}`}
                    >
                      {regulationsDocument.regulations_documentTitle}
                    </div>
                    <a
                      className={`${styles.regulationsItem_document} ${styles.regulationsItem_content__marginLeft} ${styles.admissions_content__fontSize}`}
                      href={regulationsDocument.regulations_documentURL}
                    >
                      <FontAwesomeIcon
                        className={styles.document_icon_margin}
                        icon={
                          regulationsDocument.regulations_documentType == '0'
                            ? faExternalLinkAlt
                            : faDownload
                        }
                      />
                      <div className={styles.admissions_content__fontSize}>
                        {regulationsDocument.regulations_documentName}
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
              src={admissionsdetail.classMap}
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
