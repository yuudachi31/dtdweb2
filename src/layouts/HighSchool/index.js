import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
//componemt
import Header from '../../components/Header';
import Footer from '../../components/Footer';

//css
import styles from './styles.module.scss';
//image
import banner from '../../assets/images/highSchool/highSchoolBanner.png';
import chatBubble from '../../assets/images/highSchool/chatBubble.png';
//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Teams = () => {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>高中生專區-國立臺北教育大學</title>
        <meta name="description" content="數位科技設計學系的高中生專區" />
      </Helmet>
      <div className={styles.container}>
        <Header />
        <div className={styles.teamsContainer}>
          <img className={styles.highSchool_banner} alt="" src={banner} />
          <div className={styles.title}>本系介紹</div>
          <div className={styles.teamsContainer_content}>
            由於科技持續地發展與應用，不斷推陳出新的資訊產品，牽動了人們對於數位科技的產品觀點與需求，此一衝擊主導了現在與未來就業市場對於兼備數位科技與視覺設計領域人才的迫切需求。
            <br />
            <br />
            具備跨領域能力的人才，不僅不可取代性高，在未來也更具備競爭優勢。有鑑於相關人才的迫切需求，本校積極投入相關資源，嘗試以更前瞻、更開放的作法來培養現在與未來的產業所需的人才，而數位科技設計學系的成立，正是國立臺北教育大學積極培養跨領域人才的濫觴。
          </div>
          <div className={styles.teamsContainer_link}>
            <a
              href="http://dtd.ntue.edu.tw/gdlab/?p=1663"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faAngleRight} />
              &ensp;&ensp;&ensp;了解更多
            </a>
          </div>
          <div className={styles.title}>系上活動</div>
          <div className={styles.highSchool_QA}>
            <p className={styles.highSchool_QA_title}>常見問題 / Q＆A</p>
            <div className={styles.highSchool_QA_content}>
              <div className={styles.highSchool_QA_detail}>
                <div
                  className={styles.highSchool_detailQ}
                  style={{ backgroundImage: `url(${chatBubble})` }}
                >
                  請問你們系都在學些什麼？
                </div>
                <p className={styles.highSchool_detailA}>
                  本系課程導入未來科技趨勢，包含物聯網(IoT)、虛擬實境(VR)、擴增實境(AR)等多門專業課程。學生學習跨足美術、程式兩大領域，美術與程式相輔之下創造更出眾的科技軟硬產品
                </p>
              </div>
              <div className={styles.highSchool_line}></div>
              <div className={styles.highSchool_QA_detail}>
                <div
                  className={styles.highSchool_detailQ}
                  style={{ backgroundImage: `url(${chatBubble})` }}
                >
                  請問你們系都在學些什麼？
                </div>
                <p className={styles.highSchool_detailA}>
                  本系課程導入未來科技趨勢，包含物聯網(IoT)、虛擬實境(VR)、擴增實境(AR)等多門專業課程。學生學習跨足美術、程式兩大領域，美術與程式相輔之下創造更出眾的科技軟硬產品
                </p>
              </div>
              <div className={styles.highSchool_line}></div>
              <div className={styles.highSchool_QA_detail}>
                <div
                  className={styles.highSchool_detailQ}
                  style={{ backgroundImage: `url(${chatBubble})` }}
                >
                  請問你們系都在學些什麼？
                </div>
                <p className={styles.highSchool_detailA}>
                  本系課程導入未來科技趨勢，包含物聯網(IoT)、虛擬實境(VR)、擴增實境(AR)等多門專業課程。學生學習跨足美術、程式兩大領域，美術與程式相輔之下創造更出眾的科技軟硬產品
                </p>
              </div>
            </div>
          </div>
          <div className={styles.title}>入學資訊</div>
          <div
            className={(styles.teamsContainer_content, styles.highSchool_flex)}
          >
            <div>
              <p>招生人數:</p>
              <p>入學方式:</p>
              <p>平日上課時間:</p>
              <p>相關資訊連結:</p>
              <br />
              <p>備註:</p>
            </div>
            <div className={styles.highSchool_ml}>
              <p>1班42人</p>
              <p>繁星推甄 / 個人申請 / 考試分發 / 特殊選才</p>
              <p>
                星期一至五上午08:20至下午17:20，遇課程需求或排至晚間18:30-20:00
              </p>
              <div className={styles.hightSchool_a}>
                <a
                  href="http://dtd.ntue.edu.tw/gdlab/?p=1663"
                  target="_blank"
                  rel="noreferrer"
                >
                  學士班招生資訊
                </a>
              </div>
              {/* <br />
              <br /> */}
              <p>詳情請參照招生簡章，以簡章資料為準，本表僅供參考用。</p>
            </div>
          </div>
        </div>
        <section className={styles.teamsContainer_bottomSpace}></section>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Teams;
