import React, { useState, useEffect } from 'react';
// 設計
import styles from './styles.module.scss';
// icon匯入
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
// 資料匯入
import admissionsjson from '../../assets/json/admissions.json';

const Admissions = (prop) => {
  const [admissionsDetail, setAdmissionsDetail] = useState({});
  useEffect(() => {
    setAdmissionsDetail(admissionsjson[prop.index]);
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {admissionsDetail.info &&
      admissionsDetail.regulations_rules &&
      admissionsDetail.regulations_documents ? (
        <>
          <div className={styles.admissions_titleBar}>入學資訊</div>
          <div className={styles.admissions_infoBlock}>
            <div className={styles.infoBlock_degreeBox}>
              <img
                src={admissionsDetail.degreeImg}
                className={styles.degreeBox_img__width}
              ></img>
              <div
                className={`${styles.degreeBox_name} ${styles.admissions_content__preLine}`}
              >
                {admissionsDetail.degreeName}
              </div>
            </div>
            <div className={styles.infoBlock_infoBox}>
              {admissionsDetail.info.map((infoDetail) => (
                <div
                  className={styles.infoBox_infoRow}
                  key={infoDetail.info_content}
                >
                  <div
                    className={`${styles.infoRow_title} ${styles.admissions_content__fontSize}`}
                  >
                    {infoDetail.info_title}
                  </div>
                  <div
                    className={`${styles.infoRow_content} ${styles.admissions_content__fontSize} ${styles.admissions_content__preLine}`}
                  >
                    {infoDetail.info_URL == undefined ? (
                      infoDetail.info_content
                    ) : (
                      <a
                        href={infoDetail.info_URL}
                        className={styles.infoRow_document}
                      >
                        {infoDetail.info_content}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.admissions_titleBar}>修課規定</div>
          <div className={styles.admissions_regulationsBlock}>
            <div className={styles.regulationsBlock_regulationsBox}>
              {admissionsDetail.regulations_rules.map((regulationsRule) => (
                <div
                  className={styles.regulationsBox_regulationsItem__margin}
                  key={regulationsRule.rule_title}
                >
                  <div
                    className={`${styles.regulationsItem_title} ${styles.admissions_content__fontSize}`}
                  >
                    {regulationsRule.rule_title}
                  </div>
                  <div
                    className={`${styles.regulationsItem_content__marginLeft} ${styles.admissions_content__fontSize} ${styles.admissions_content__preLine}`}
                  >
                    {regulationsRule.rule_content}
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.regulationsBlock_divisionLine}></div>
            <div className={styles.regulationsBlock_regulationsBox}>
              {admissionsDetail.regulations_documents.map(
                (regulationsDocument) => (
                  <div
                    className={styles.regulationsBox_regulationsItem__margin}
                    key={regulationsDocument.document_title}
                  >
                    <div
                      className={`${styles.regulationsItem_title} ${styles.admissions_content__fontSize}`}
                    >
                      {regulationsDocument.document_title}
                    </div>
                    <a
                      className={`${styles.regulationsItem_document} ${styles.regulationsItem_content__marginLeft} ${styles.admissions_content__fontSize}`}
                      href={regulationsDocument.document_URL}
                    >
                      <FontAwesomeIcon
                        className={styles.document_icon_margin}
                        icon={faExternalLinkAlt}
                      />
                      <div className={styles.admissions_content__fontSize}>
                        {regulationsDocument.document_name}
                      </div>
                    </a>
                  </div>
                ),
              )}
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Admissions;
