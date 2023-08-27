import React, { useEffect, useContext } from 'react';
// import { Link } from 'react-router-dom';
// 設計
import styles from './styles.module.scss';
// icon匯入
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
//components
import Loading from '../Loading';
//data
//import { getAdmission } from '../../store/actions';
import { StoreContext } from '../../store/reducer';
import admissionsjsonEnglish from '../../assets/json/adimissionsEnglish.json';
const AdmissionsEnglish = (prop) => {
  // const [admissionsDetail, setAdmissionsDetail] = useState({});
  const {
    state: {
      //admission,
      requestdata: { loading },
    },
    //dispatch,
  } = useContext(StoreContext);

  //   useEffect(() => {
  //     getAdmission(dispatch);
  //     // setAdmissionsDetail(admission[0]['all'][prop.index]);
  //   }, []);

  //console.log(typeof admission?.[0]?.['all']?.[0].info);
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

  const admissionsinfo = admissionsjsonEnglish;
  console.log(admissionsinfo[0].all[0].category);
  return (
    <>
      {loading ? (
        <div className={styles.container}>
          <Loading />
        </div>
      ) : (
        <>
          {admissionsinfo[0].all[prop.index].info &&
          // admission?.[0]?.['all']?.[prop.index].regulations_rules &&
          admissionsinfo[0].all[prop.index].regulations_documents ? (
            <>
              <div className={styles.admissions_titleBar}>
                {/* {admission?.[0]?.['all']?.[prop.index].id} */}
                {admissionsinfo[0].all[prop.index].category}
              </div>
              <div className={styles.admissions_infoBlock}>
                <div className={styles.infoBlock_degreeBox}>
                  <img
                    src={admissionsinfo[0].all[prop.index].degreeImg}
                    className={styles.degreeBox_img__width}
                  ></img>

                  <div
                    className={`${styles.degreeBox_name} ${styles.admissions_content__preLine}`}
                    dangerouslySetInnerHTML={{
                      __html: admissionsinfo[0].all[prop.index].degreeName,
                    }}
                  ></div>
                </div>
                <div className={styles.infoBlock_infoBox}>
                  {admissionsinfo[0].all[prop.index].info.map((infoDetail) => (
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

export default AdmissionsEnglish;
