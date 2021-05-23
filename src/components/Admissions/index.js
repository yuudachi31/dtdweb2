import React, { useState, useEffect } from 'react';

import styles from './styles.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

/*icon*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExternalLinkAlt,
  faDownload,
} from '@fortawesome/free-solid-svg-icons';

import admissionsjson from '../../assets/json/admissions.json';

const Admissions = (prop) => {
  const [admissiondetail, setadmissiondetail] = useState([]);
  useEffect(() => {
    setadmissiondetail(admissionsjson[prop.number]);
  }, []);
  return (
    <div className={styles.container}>
      {admissiondetail.regulations_content &&
      admissiondetail.regulations_document ? (
        <div className={styles.container}>
          <div className={styles.admissionGroupName}>入學資訊</div>
          <div className={styles.info_bar}>
            <div className={styles.info_contentBox}>
              <div className={styles.info_department}>
                <img
                  src={admissiondetail.info_img}
                  className={styles.info_img}
                ></img>
                <div
                  className={`${styles.info_departmentName} ${styles.admission_content_enter}`}
                >
                  {admissiondetail.info_departmentName}
                </div>
              </div>
              <div className={styles.info_insideBox}>
                <div className={styles.info_rowBox}>
                  <div
                    className={`${styles.info_contentTitle} ${styles.admission_content_p}`}
                  >
                    招生資訊：
                  </div>
                  <div
                    className={`${styles.info_contentData} ${styles.admission_content_p}`}
                  >
                    {admissiondetail.info_studuntNumber}
                  </div>
                </div>
                <div className={styles.info_rowBox}>
                  <div
                    className={`${styles.info_contentTitle} ${styles.admission_content_p}`}
                  >
                    入學方式：
                  </div>
                  <div
                    className={`${styles.info_contentData} ${styles.admission_content_p} ${styles.admission_content_enter}`}
                  >
                    {admissiondetail.info_admission}
                  </div>
                </div>
                <div className={styles.info_rowBox}>
                  <div
                    className={`${styles.info_contentTitle} ${styles.admission_content_p}`}
                  >
                    入學對象：
                  </div>
                  <div
                    className={`${styles.info_contentData} ${styles.admission_content_p}`}
                  >
                    {admissiondetail.info_target}
                  </div>
                </div>
                <div className={styles.info_rowBox}>
                  <div
                    className={`${styles.info_contentTitle} ${styles.admission_content_p}`}
                  >
                    平日上課時間：
                  </div>
                  <div
                    className={`${styles.info_contentData} ${styles.admission_content_p}`}
                  >
                    {admissiondetail.info_schoolTime}
                  </div>
                </div>
                <div className={styles.info_rowBox}>
                  <div
                    className={`${styles.info_contentTitle} ${styles.admission_content_p}`}
                  >
                    相關資訊連結：
                  </div>
                  <div
                    className={`${styles.info_contentData} ${styles.admission_content_p}`}
                  >
                    <a
                      href={admissiondetail.info_documentURL}
                      className={styles.info_documentURL}
                    >
                      {admissiondetail.info_documentName}
                    </a>
                  </div>
                </div>
                <div className={styles.info_rowBox}>
                  <div
                    className={`${styles.info_contentTitle} ${styles.admission_content_p}`}
                  >
                    備註：
                  </div>
                  <div
                    className={`${styles.info_contentData} ${styles.admission_content_p}`}
                  >
                    {admissiondetail.info_remark}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.admissionGroupName}>修課規定</div>
          <div className={styles.regulations_bar}>
            <div className={styles.regulations_box}>
              {admissiondetail.regulations_content.map((regulationsContent) => (
                <div
                  className={styles.regulations_documentBox}
                  key={regulationsContent.regulations_title}
                >
                  <div
                    className={`${styles.regulations_title_bold} ${styles.admission_content_p} ${styles.regulations_contentRow_marginBottom}`}
                  >
                    {regulationsContent.regulations_title}
                  </div>
                  <div
                    className={`${styles.regulations_content_marginLeft} ${styles.admission_content_enter}`}
                  >
                    {regulationsContent.regulations_rules}
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.titleLine}></div>
            <div className={styles.regulations_box}>
              {admissiondetail.regulations_document.map(
                (regulationsDocument) => (
                  <div
                    className={styles.regulations_documentBox}
                    key={regulationsDocument.regulations_title}
                  >
                    <div
                      className={`${styles.regulations_title_bold} ${styles.admission_content_p} ${styles.regulations_contentRow_marginBottom}`}
                    >
                      {regulationsDocument.regulations_documentTitle}
                    </div>
                    <a
                      className={`${styles.regulations_content_marginLeft} ${styles.regulations_document}`}
                      href={regulationsDocument.regulations_documentURL}
                    >
                      <FontAwesomeIcon
                        className={styles.regulations_documentIcon_marginTop}
                        icon={
                          regulationsDocument.regulations_documentType == '0'
                            ? faExternalLinkAlt
                            : faDownload
                        }
                      />
                      <div
                        className={`${styles.regulations_documentName_marginLeft} ${styles.admission_content_p}`}
                      >
                        {regulationsDocument.regulations_documentName}
                      </div>
                    </a>
                  </div>
                ),
              )}
            </div>
          </div>
          <div className={styles.admissionGroupName}>修業地圖</div>
          <div className={styles.classMap_bar}>
            <img
              src={admissiondetail.classMap}
              className={styles.classMap_img}
            ></img>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Admissions;
