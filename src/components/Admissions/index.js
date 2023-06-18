import React, { useEffect, useContext } from 'react';
// import { Link } from 'react-router-dom';
// 設計
import styles from './styles.module.scss';
// icon匯入
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
//components
import Loading from '../Loading';
//data
import { getAdmission } from '../../store/actions';
import { StoreContext } from '../../store/reducer';
// import admissionsjson from '../../assets/json/admissions.json';
const Admissions = (prop) => {
  // const [admissionsDetail, setAdmissionsDetail] = useState({});
  const {
    state: {
      admission,
      requestdata: { loading },
    },
    dispatch,
  } = useContext(StoreContext);

  useEffect(() => {
    getAdmission(dispatch);
    // setAdmissionsDetail(admission[0]['all'][prop.index]);
  }, []);

  console.log(typeof admission?.[0]?.['all']?.[0].info);

  // useEffect(() => {
  //   setAdmissionsDetail(admissionsjson[0]['all'][prop.index]);
  //   window.scrollTo(0, 0);
  // }, []);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  }, [loading]);

  // const propertyValues = Object.values(
  //   admission?.[0]?.['all']?.[1].regulations_rules,
  // );
  // console.log(propertyValues);

  // const regulationsRules = admission?.[0]?.['all']?.[
  //   prop.index
  // ].regulations_rules.map((rules) => {
  //   return (
  //     <div
  //       key={rules.rule_title}
  //       className={styles.regulationsBlock_regulationsBox}
  //     >
  //       <div className={styles.regulationsBox_regulationsItem__margin}>
  //         <div className={styles.regulationsItem_title}>{rules.rule_title}</div>
  //         <div className={styles.regulationsItem_content__marginLeft}>
  //           {rules.rule_content}
  //         </div>
  //       </div>
  //     </div>
  //   );
  // });

  return (
    <>
      {loading ? (
        <div className={styles.container}>
          <Loading />
        </div>
      ) : (
        <>
          {admission?.[0]?.['all']?.[prop.index].info &&
          // admission?.[0]?.['all']?.[prop.index].regulations_rules &&
          admission?.[0]?.['all']?.[prop.index].regulations_documents ? (
            <>
              <div className={styles.admissions_titleBar}>入學資訊</div>
              <div className={styles.admissions_infoBlock}>
                <div className={styles.infoBlock_degreeBox}>
                  <img
                    src={admission?.[0]?.['all']?.[prop.index].degreeImg}
                    className={styles.degreeBox_img__width}
                  ></img>

                  <div
                    className={`${styles.degreeBox_name} ${styles.admissions_content__preLine}`}
                    dangerouslySetInnerHTML={{
                      __html: admission?.[0]?.['all']?.[prop.index].degreeName,
                    }}
                  ></div>
                </div>
                <div className={styles.infoBlock_infoBox}>
                  {admission?.[0]?.['all']?.[prop.index].info.map(
                    (infoDetail) => (
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
                            <div
                              dangerouslySetInnerHTML={{
                                __html: infoDetail.info_content,
                              }}
                            ></div>
                          ) : (
                            <>
                              {infoDetail.info_content == '高中生專區' ? (
                                // <Link
                                //   to={infoDetail.info_URL}
                                //   className={styles.infoRow_document}
                                // >
                                //   {infoDetail.info_content}
                                // </Link>
                                <a
                                  className={styles.infoRow_document}
                                  href="https://dtd.ntue.edu.tw/highSchool"
                                >
                                  {infoDetail.info_content}
                                </a>
                              ) : (
                                <a
                                  href={infoDetail.info_URL}
                                  target="_blank"
                                  rel="noreferrer"
                                  className={styles.infoRow_document}
                                >
                                  {infoDetail.info_content}
                                </a>
                              )}
                            </>
                          )}
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </div>
              <div className={styles.admissions_titleBar}>修課規定</div>
              <div className={styles.admissions_regulationsBlock}>
                {admission?.[0]?.['all']?.[prop.index].regulations_rules &&
                  admission?.[0]?.['all']?.[prop.index].regulations_rules.map(
                    (regulationsRule) => (
                      <>
                        <div className={styles.regulationsBlock_regulationsBox}>
                          <div
                            className={
                              styles.regulationsBox_regulationsItem__margin
                            }
                            key={regulationsRule.rule_title}
                          >
                            <div
                              className={`${styles.regulationsItem_title} ${styles.admissions_content__fontSize}`}
                            >
                              {regulationsRule.rule_title}
                            </div>
                            <div></div>
                            <div
                              className={`${styles.regulationsItem_content__marginLeft} ${styles.admissions_content__fontSize} ${styles.admissions_content__preLine}`}
                              dangerouslySetInnerHTML={{
                                __html: regulationsRule.rule_content,
                              }}
                            ></div>
                          </div>
                        </div>
                      </>
                    ),
                  )}
                {admission?.[0]?.['all']?.[prop.index].regulations_rules.map(
                  (text) =>
                    text.rule_title !== '' && (
                      <div
                        key={text.rule_title}
                        className={styles.regulationsBlock_divisionLine}
                      ></div>
                    ),
                )}
                <div className={styles.regulationsBlock_regulationsBox}>
                  {admission?.[0]?.['all']?.[
                    prop.index
                  ].regulations_documents.map((regulationsDocument) => (
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
                        target="_blank"
                        rel="noreferrer"
                        href={regulationsDocument.document_URL}
                      >
                        <FontAwesomeIcon
                          className={styles.document_icon__margin}
                          icon={faExternalLinkAlt}
                        />
                        <div className={styles.admissions_content__fontSize}>
                          {regulationsDocument.document_name}
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </>
      )}
    </>
  );
};

export default Admissions;
