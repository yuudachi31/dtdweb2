import React, { Fragment, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Carousel from 'react-bootstrap/Carousel';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import PageTitle from '../../components/PageTitle';

import styles from './styles.module.scss';
import classjson from '../../assets/json/class.json';

const Intro = () => {
  const [classdetail, setclassdetail] = useState([]);
  useEffect(() => {
    setclassdetail(classjson);
  }, []);

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>本系簡介-國立臺北教育大學</title>
        <meta name="description" content="數位科技設計學系的本系簡介" />
      </Helmet>
      <div className={styles.container}>
        <Header />
        <Banner />
        <div className={styles.board}>
          <PageTitle title="本系簡介" />
          <div
            className={`${styles.contentBox__marginTop} ${styles.introBox__flex}`}
          >
            <iframe
              className={styles.introBox_video}
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Zl3CNCsZB9c?wmode=opaque"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div
              className={`${styles.introBox_textContent} ${styles.intro_content_p}`}
            >
              由於科技持續地發展與應用，不斷推陳出新的資訊產品，牽動了人們對於數位科技的產品觀點與需求，此一衝擊主導了現在與未來就業市場對於兼備數位科技與視覺設計領域人才的迫切需求。
              <br></br>
              <br></br>
              <br></br>
              具備跨領域能力的人才，不僅不可取代性高，在未來也更具備競爭優勢。有鑑於相關人才的迫切需求，本校積極投入相關資源，嘗試以更前瞻、更開放的作法來培養現在與未來的產業所需的人才，而數位科技設計學系的成立，正是國立臺北教育大學積極培養跨領域人才的濫觴。
              <br></br>
              <br></br>
              <br></br>
              本校於民國95年8月成立《數位內容設計學系》開始招收一般高中生，以科技、資訊與設計的理論課程為核心，搭配紮實的實作與專題課程，培育學生具備優異的跨領域數位科技設計的專長，畢業學生授予《設計學士學位》。
            </div>
          </div>
          <div className={styles.pageTitle__marginTop}>
            <PageTitle title="教育理念" />
            <div
              className={`${styles.contentBox__marginTop} ${styles.ideasBox__flex}`}
            >
              <div className={styles.ideaBox}>
                <img
                  className={styles.ideaBox_img}
                  src="assets/images/intro/foresight.png"
                ></img>
                <div className={styles.ideaBox_title}>前瞻</div>
                <div className={styles.intro_content_p}>
                  本系課程導入未來科技趨勢，包含物聯網(IoT)、虛擬實境(VR)、擴增實境(AR)等多門專業課程。
                </div>
              </div>
              <div className={styles.ideaBox}>
                <img
                  className={styles.ideaBox_img}
                  src="assets/images/intro/open.png"
                ></img>
                <div className={styles.ideaBox_title}>開放</div>
                <div className={styles.intro_content_p}>
                  本系培養學生對於科技應用的創新思維，使學生善於將科技與生活融合，創造科技附加價值。
                </div>
              </div>
              <div className={styles.ideaBox}>
                <img
                  className={styles.ideaBox_img}
                  src="assets/images/intro/integration.png"
                ></img>
                <div className={styles.ideaBox_title}>跨領域整合</div>
                <div className={styles.intro_content_p}>
                  學生學習跨足美術、程式兩大領域，美術與程式相輔之下創造更出眾的科技軟硬產品。
                </div>
              </div>
              <div className={styles.ideaBox}>
                <img
                  className={styles.ideaBox_img}
                  src="assets/images/intro/resource.png"
                ></img>
                <div className={styles.ideaBox_title}>資源</div>
                <div className={styles.intro_content_p}>
                  本系擁有電腦繪圖、Apple MAC、等多種硬體設備。
                </div>
              </div>
            </div>
          </div>
          <div className={styles.pageTitle__marginTop}>
            <PageTitle title="教室導覽" />
            <div className={styles.contentBox__marginTop}>
              <div className={styles.classBox}>
                <Carousel
                  indicators={false}
                  className={styles.classBox_carouselChevron}
                >
                  {classdetail.map((classInfo) => (
                    <Carousel.Item interval={5000} key={classInfo.id}>
                      <img
                        className={styles.classBox_carousel_img}
                        src={classInfo.classUrl}
                      />
                      <div className={styles.classBoxInfo}>
                        <div className={styles.classBoxInfo_name}>
                          {classInfo.name}
                        </div>
                        <div className={styles.classBoxInfo_row}>
                          <div
                            className={`${styles.classBoxInfo_title} ${styles.classBoxInfo__p}`}
                          >
                            教室地點：
                          </div>
                          <div
                            className={`${styles.classBoxInfo_content} ${styles.classBoxInfo__p}`}
                          >
                            {classInfo.location}
                          </div>
                        </div>
                        <div className={styles.classBoxInfo_row}>
                          <div
                            className={`${styles.classBoxInfo_title} ${styles.classBoxInfo__p}`}
                          >
                            教室簡介：
                          </div>
                          <div
                            className={`${styles.classBoxInfo_content} ${styles.classBoxInfo__p}`}
                          >
                            {classInfo.intro}
                          </div>
                        </div>
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
              <div className={styles.classBoxPhone}>
                {classdetail.map((classInfo) => (
                  <div key={classInfo.id}>
                    <img
                      src={classInfo.classUrl}
                      className={styles.classBoxPhone_img}
                    />
                    <div className={styles.classBoxPhoneInfo}>
                      <div className={styles.classBoxPhoneInfo_name}>
                        {classInfo.name}
                      </div>
                      <div className={styles.classBoxPhoneInfo_row}>
                        <div
                          className={`${styles.classBoxPhoneInfo_title} ${styles.classBoxInfo__p}`}
                        >
                          教室地點：
                        </div>
                        <div
                          className={`${styles.classBoxPhoneInfo_content} ${styles.classBoxInfo__p}`}
                        >
                          {classInfo.location}
                        </div>
                      </div>
                      <div className={styles.classBoxPhoneInfo_row}>
                        <div
                          className={`${styles.classBoxPhoneInfo_title} ${styles.classBoxInfo__p}`}
                        >
                          教室簡介：
                        </div>
                        <div
                          className={`${styles.classBoxPhoneInfo_content} ${styles.classBoxInfo__p}`}
                        >
                          {classInfo.intro}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Intro;
