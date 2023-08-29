import React, { Fragment, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// import { Helmet } from 'react-helmet';
import * as Scroll from 'react-scroll';
import Carousel from 'react-bootstrap/Carousel';
// 設計
import styles from './styles.module.scss';
// components
// import Header from '../Header';
// import Banner from '../Banner';
import PageTitle from '../PageTitle';
import Footer from '../Footer';

// 資料匯入
import introjson from '../../assets/json/introEnglish.json';

const Intro = () => {
  let history = useHistory();
  const [introDetail, setIntroDetail] = useState({});

  useEffect(() => {
    setIntroDetail(introjson);
    if (
      history.location.state !== undefined &&
      history.location.state.prevPath === '/' &&
      introDetail.classrooms
    ) {
      Scroll.scroller.scrollTo('classroom');
    } else {
      window.scrollTo(0, 0);
    }
  }, [introDetail, history.location.state]);

  return (
    <Fragment>
      <>
        {introDetail.about_content &&
        introDetail.concepts &&
        introDetail.classrooms ? (
          <div className={styles.container}>
            <PageTitle title="本系簡介" />
            <div
              className={`${styles.intro_block__marginTop} ${styles.intro_aboutBlock}`}
            >
              <div className={styles.aboutBlock_content}>
                <div>{introDetail.about_content}</div>
              </div>
            </div>
            <PageTitle title="教育理念" />
            <div
              className={`${styles.intro_block__marginTop} ${styles.intro_conceptBlock}`}
            >
              {introDetail.concepts.map((concept) => (
                <div
                  className={styles.conceptBlock_conceptBox}
                  key={concept.concept_title}
                >
                  <img src={concept.concept_img}></img>
                  <div className={styles.conceptBox_title}>
                    {concept.concept_title}
                  </div>
                  <div className={styles.conceptBox_content}>
                    {concept.concept_content}
                  </div>
                </div>
              ))}
            </div>
            <div id="classroom">
              <PageTitle title="教室導覽" />
              <div className={styles.intro_block__marginTop}>
                {/* 教室資訊輪播 */}
                <div className={styles.intro_classroomCarousel}>
                  <Carousel
                    indicators={false}
                    className={styles.classroomCarousel_chevron}
                  >
                    {introDetail.classrooms.map((classroom) => (
                      <Carousel.Item
                        interval={5000}
                        key={classroom.classroom_id}
                      >
                        <img
                          className={styles.classroomCarousel_img}
                          src={classroom.classroom_img}
                        />
                        <div
                          className={
                            styles.classroomCarousel_classroomCarouselInfo
                          }
                        >
                          <div
                            className={
                              styles.classroomCarouselInfo_classroomCarouselName
                            }
                          >
                            {classroom.classroom_name}
                          </div>
                        </div>
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </div>
                {/* 教室資訊區塊 */}
                <div className={styles.intro_classroomBlock}>
                  {introDetail.classrooms.map((classroom) => (
                    <div key={classroom.classroom_id}>
                      <img
                        src={classroom.classroom_img}
                        className={styles.classroomBlock_img}
                      />
                      <div className={styles.classroomBlock_classroomBlockInfo}>
                        <div
                          className={
                            styles.classroomBlockInfo_classroomBlockName
                          }
                        >
                          {classroom.classroom_name}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div id="works-gallery">
              <PageTitle title="作品展示" />
              <div className={styles.intro_block__marginTop}>
                {/* 作品資訊輪播 */}
                <div className={styles.intro_worksCarousel}>
                  <Carousel
                    indicators={false}
                    className={styles.classroomCarousel_chevron}
                  >
                    {introDetail.works.map((work, index) => (
                      <Carousel.Item interval={5000} key={index}>
                        <img className={styles.worksCarousel_img} src={work} />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </div>
                {/* 教室資訊區塊 */}
                <div className={styles.intro_classroomBlock}>
                  {introDetail.classrooms.map((classroom) => (
                    <div key={classroom.classroom_id}>
                      <img
                        src={classroom.classroom_img}
                        className={styles.classroomBlock_img}
                      />
                      <div className={styles.classroomBlock_classroomBlockInfo}>
                        <div
                          className={
                            styles.classroomBlockInfo_classroomBlockName
                          }
                        >
                          {classroom.classroom_name}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.container}></div>
        )}
      </>
      <Footer />
    </Fragment>
  );
};

export default Intro;
