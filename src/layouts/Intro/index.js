import React, { Fragment, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Scroll from 'react-scroll';
import Carousel from 'react-bootstrap/Carousel';
// 設計
import styles from './styles.module.scss';
// components
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import PageTitle from '../../components/PageTitle';
import Footer from '../../components/Footer';
// 資料匯入
import introjson from '../../assets/json/intro.json';

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
      <Helmet>
        <meta charSet="utf-8" />
        <title>本系簡介-國立臺北教育大學</title>
        <meta name="description" content="數位科技設計學系的本系簡介" />
      </Helmet>
      <Header />
      <Banner bannerNumber={4} />
      <>
        {introDetail.about_content &&
        introDetail.concepts &&
        introDetail.classrooms ? (
          <div className={styles.container}>
            <PageTitle title="本系簡介" />
            <div
              className={`${styles.intro_block__marginTop} ${styles.intro_aboutBlock}`}
            >
              <iframe
                className={styles.aboutBlock_video}
                width="560"
                height="315"
                src="https://www.youtube.com/embed/5HyM0qZEhRw?wmode=transparent"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className={styles.aboutBlock_content}>
                {introDetail.about_content}
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
                          {classroom.classroom_info.map((infoDetail) => (
                            <div
                              className={
                                styles.classroomCarouselInfo_classroomCarouselRow
                              }
                              key={infoDetail.info_content}
                            >
                              <div
                                className={`${styles.classroomCarouselRow_title} ${styles.intro_classroomInfo__fontSize}`}
                              >
                                {infoDetail.info_title}
                              </div>
                              <div
                                className={`${styles.classroomCarouselRow_content} ${styles.intro_classroomInfo__fontSize}`}
                              >
                                {infoDetail.info_content}
                              </div>
                            </div>
                          ))}
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
                        {classroom.classroom_info.map((infoDetail) => (
                          <div
                            className={
                              styles.classroomBlockInfo_classroomBlockRow
                            }
                            key={infoDetail.info_content}
                          >
                            <div
                              className={`${styles.classroomBlockRow_title} ${styles.intro_classroomInfo__fontSize}`}
                            >
                              {infoDetail.info_title}
                            </div>
                            <div
                              className={`${styles.classroomBlockRow_content} ${styles.intro_classroomInfo__fontSize}`}
                            >
                              {infoDetail.info_content}
                            </div>
                          </div>
                        ))}
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
