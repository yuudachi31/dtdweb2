import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
//componemt
import Header from '../../components/Header';
import Footer from '../../components/Footer';

//path
import path from '../../utils/path';

//css
import styles from './styles.module.scss';
//image
import banner from '../../assets/images/highSchool/highSchoolBanner.png';
import chatBubble from '../../assets/images/highSchool/chatBubble.png';
//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const HighSchool = () => {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>高中生專區-國立臺北教育大學</title>
        <meta name="description" content="數位科技設計學系的高中生專區" />
      </Helmet>
      <div className={styles.container}>
        <Header />
        <div className={styles.highSchoolContainer}>
          <img className={styles.highSchool_banner} alt="" src={banner} />
          <div className={styles.title}>本系介紹</div>
          <div className={styles.highSchoolContainer_content}>
            由於科技持續地發展與應用，不斷推陳出新的資訊產品，牽動了人們對於數位科技的產品觀點與需求，此一衝擊主導了現在與未來就業市場對於兼備數位科技與視覺設計領域人才的迫切需求。
            <br />
            <br />
            具備跨領域能力的人才，不僅不可取代性高，在未來也更具備競爭優勢。有鑑於相關人才的迫切需求，本校積極投入相關資源，嘗試以更前瞻、更開放的作法來培養現在與未來的產業所需的人才，而數位科技設計學系的成立，正是國立臺北教育大學積極培養跨領域人才的濫觴。
          </div>
          <div className={styles.highSchoolContainer_link}>
            <Link to={path.intro} className={styles.pageBox_page}>
              <FontAwesomeIcon icon={faAngleRight} />
              &ensp;&ensp;&ensp;了解更多
            </Link>
          </div>
          {/* <div className={styles.title}>系上活動</div> */}
          <div className={styles.highSchool_QA}>
            <p className={styles.highSchool_QA_title}>常見問題 / Q＆A</p>
            <div className={styles.highSchool_QA_content}>
              <div className={styles.highSchool_QA_detail}>
                <div
                  className={styles.highSchool_detailQ}
                  style={{ backgroundImage: `url(${chatBubble})` }}
                >
                  如何判斷自己適不適合唸數位科技設計學系？
                </div>
                <p className={styles.highSchool_detailA}>
                  數位科技設計系是結合資訊、互動與視覺設計三個領域課程核心專業課程的學系。資訊工程系偏重在資訊各領域專業的學習，但並沒有視覺與美術設計等的課程，培養學生的美學能力，而設計系則偏重在設計領域專業技能，但並沒有資訊相關的課程，培養學生的程式開發能力。本系則是取兩者的核心重要課程，讓學生同時具備程式開發與美學的設計的跨領域整合能力。
                </p>
              </div>
              <div className={styles.highSchool_line}></div>
              <div className={styles.highSchool_QA_detail}>
                <div
                  className={styles.highSchool_detailQ}
                  style={{ backgroundImage: `url(${chatBubble})` }}
                >
                  數位科技設計學系都在學些什麼？
                </div>
                <p className={styles.highSchool_detailA}>
                  本系課程內容涵蓋軟體設計、數位遊戲設計、軟硬體整合的互動設計、互動娛樂設計、網站設計與動畫創作等，以及結合前述課程所需的視覺設計、人機介面設計與使用者經驗設計等課程。課程中並依未來科技趨勢機動調整，包含人工智慧+物聯網(AIoT)、元宇宙(虛擬實境/擴增實境/混合實境)、數位互動整合設計等課程。學生可同時學習最新科技技術與美術設計等，成為符合社會需求之人才。
                </p>
              </div>
              <div className={styles.highSchool_line}></div>
              <div className={styles.highSchool_QA_detail}>
                <div
                  className={styles.highSchool_detailQ}
                  style={{ backgroundImage: `url(${chatBubble})` }}
                >
                  請問就讀數位科技設計學系的未來發展？
                </div>
                <p className={styles.highSchool_detailA}>
                  本系畢業生於接受四年專業課程訓練後，可從事程式設計師、前端工程師、網頁程式師、遊戲或動畫設計師、平面設計師、遊戲或行銷企劃設計師、數位教材設計師…等工作，大學畢業薪資大致介於三萬到五萬之間不等。
                </p>
              </div>
            </div>
          </div>
          <div className={styles.title}>入學資訊</div>
          <div className={styles.highSchoolContainer_content}>
            <div className={styles.highSchool_flex}>
              <p className={styles.highSchool_infoW}>招生人數:</p>
              <p className={styles.highSchool_ml}>1班42人</p>
            </div>
            <div className={styles.highSchool_flex}>
              <p className={styles.highSchool_infoW}>入學方式:</p>
              <p className={styles.highSchool_ml}>
                繁星推甄 / 個人申請 / 考試分發 / 特殊選才
              </p>
            </div>
            <div className={styles.highSchool_flex}>
              <p className={styles.highSchool_infoW}>平日上課時間:</p>
              <p className={styles.highSchool_ml}>
                星期一至五上午08:20至下午17:20，遇課程需求或排至晚間18:30-20:00
              </p>
            </div>
            <div className={styles.highSchool_flex}>
              <p className={styles.highSchool_infoW}>相關資訊連結:</p>
              <div className={styles.hightSchool_a}>
                <Link to={path.college} className={styles.hightSchool_a_}>
                  學士班招生資訊
                </Link>
                <a
                  className={styles.hightSchool_a_}
                  href="https://dtd.ntue.edu.tw/wp-content/uploads/2022/01/學習歷程檔案準備指引.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  學習歷程檔案準備指引
                </a>
              </div>
            </div>
            <div className={styles.highSchool_flex}>
              <p className={styles.highSchool_infoW}>備註:</p>
              <p className={styles.highSchool_ml}>
                詳情請參照招生簡章，以簡章資料為準，本表僅供參考用。
              </p>
            </div>
            <div className={styles.highSchool_info_btn}>
              <div className={styles.highSchoolContainer_btn}>
                <a
                  href="https://ioh.tw/talks/%E5%8C%97%E6%95%99%E5%A4%A7%E6%95%B8%E4%BD%8D%E7%A7%91%E6%8A%80%E8%A8%AD%E8%A8%88%E5%AD%B8%E7%B3%BB-%E9%83%AD%E6%98%80%E7%94%84-jennifer-guo-tw-study-ntue-bde"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faAngleRight} />
                  &ensp;&ensp;IOH分享
                </a>
              </div>
              <div
                className={
                  (styles.highSchoolContainer_btn, styles.highSchool_ml32)
                }
              >
                <a
                  href="https://collego.edu.tw/Highschool/DepartmentIntro?dept_id=032019"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faAngleRight} />
                  &ensp;&ensp;ColleGo!
                </a>
              </div>
            </div>
          </div>
        </div>
        <section className={styles.highSchoolContainer_bottomSpace}></section>
        <Footer />
      </div>
    </Fragment>
  );
};

export default HighSchool;
