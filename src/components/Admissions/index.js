import React, { useState, useEffect } from 'react';

import styles from './styles.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import admissionsjson from '../../assets/json/admissions.json';

const Admissions = (prop) => {
  const [admissiondetail, setadmissiondetail] = useState([]);
  const [admissiondetail2, setadmissiondetail2] = useState([]);
  const [admissiondetail3, setadmissiondetail3] = useState([]);
  useEffect(() => {
    setadmissiondetail(admissionsjson[prop.number]);
  }, []);
  useEffect(() => {
    setadmissiondetail2(admissiondetail.regulations_content);
    setadmissiondetail3(admissiondetail.regulations_document);
  }, [admissiondetail]);
  return (
    <div className={styles.container}>
      {admissiondetail2 && admissiondetail3 ? (
        <div className={styles.container}>
          <div className={styles.admissionGroupName}>入學資訊</div>
          <div className={styles.admissionBar}>
            <div className={styles.info_contentBox}>
              <div className={styles.info_department}>
                <img
                  src={admissiondetail.info_img}
                  className={styles.info_img}
                ></img>
                <div className={styles.info_departmentName}>
                  {admissiondetail.info_departmentName}
                </div>
              </div>
              <div>
                <div
                  className={`${styles.admission_contentBox_flex} ${styles.admission_contentLine_margin}`}
                >
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
                <div
                  className={`${styles.admission_contentBox_flex} ${styles.admission_contentLine_margin}`}
                >
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
                <div
                  className={`${styles.admission_contentBox_flex} ${styles.admission_contentLine_margin}`}
                >
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
                <div
                  className={`${styles.admission_contentBox_flex} ${styles.admission_contentLine_margin}`}
                >
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
                <div
                  className={`${styles.admission_contentBox_flex} ${styles.admission_contentLine_margin}`}
                >
                  <div
                    className={`${styles.info_contentTitle} ${styles.admission_content_p}`}
                  >
                    相關資訊連結：
                  </div>
                  <a
                    href={admissiondetail.info_documentURL}
                    className={`${styles.info_contentData} ${styles.admission_content_p}`}
                  >
                    {admissiondetail.info_documentName}
                  </a>
                </div>
                <div className={styles.admission_contentBox_flex}>
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
          <div className={styles.admissionBar}>
            <div className={styles.regulations_box}>
              {admissiondetail2.map((regulationsContent) => (
                <div
                  className={`${
                    admissiondetail2.length > 1 &&
                    admissiondetail2.indexOf(regulationsContent) % 2 == 0
                      ? styles.regulations_contentBox
                      : ``
                  }`}
                  key={regulationsContent.regulations_title}
                >
                  <div
                    className={`${styles.regulations_title_bold} ${styles.admission_content_p} ${styles.admission_contentLine_margin}`}
                  >
                    {regulationsContent.regulations_title}
                  </div>
                  <div
                    className={`${styles.regulations_content_marginLeft} ${styles.admission_content_p} ${styles.admission_contentLine_margin} ${styles.admission_content_enter}`}
                  >
                    {regulationsContent.regulations_rules}
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.titleLine}></div>
            <div className={styles.regulations_box}>
              {admissiondetail3.map((regulationsDocument) => (
                <div
                  className={`${
                    admissiondetail3.length > 1 &&
                    admissiondetail3.indexOf(regulationsDocument) % 2 == 0
                      ? styles.regulations_documentBox
                      : ``
                  }`}
                  key={regulationsDocument.regulations_title}
                >
                  <div
                    className={`${styles.regulations_title_bold} ${styles.admission_content_p} ${styles.admission_contentLine_margin}`}
                  >
                    {regulationsDocument.regulations_documentTitle}
                  </div>
                  <a
                    className={`${styles.regulations_content_marginLeft} ${styles.admission_content_p} ${styles.admission_contentLine_margin}`}
                    href={regulationsDocument.regulations_documentURL}
                  >
                    {regulationsDocument.regulations_documentName}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.admissionGroupName}>修業地圖</div>
          <div className={styles.admissionBar}>
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
