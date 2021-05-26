import React, { Fragment, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import * as Scroll from 'react-scroll';
import Carousel from 'react-bootstrap/Carousel';
//components
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import PageTitle from '../../components/PageTitle';
import Footer from '../../components/Footer';
//設計
import styles from './styles.module.scss';
//資料匯入
import introjson from '../../assets/json/intro.json';

const Intro = () => {
  const [introdetail, setintrodetail] = useState({});
  const geturlid = window.location.href;
  useEffect(() => {
    setintrodetail(introjson);
    if (geturlid.search(/#/i) != -1) {
      Scroll.scroller.scrollTo(geturlid.slice(geturlid.search(/#/i) + 1));
    } else {
      window.scrollTo(0, 0);
    }
  }, [introdetail]);

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>本系簡介-國立臺北教育大學</title>
        <meta name="description" content="數位科技設計學系的本系簡介" />
      </Helmet>
      <Header />
      <Banner />
      <>
        {introdetail.introContent &&
        introdetail.concept &&
        introdetail.classroom ? (
          <div className={styles.container}>
            <PageTitle title="本系簡介" />
            <div
              className={`${styles.intro_block__marginTop} ${styles.intro_aboutBlock}`}
            >
              <iframe
                className={styles.aboutBlock_video}
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Zl3CNCsZB9c?wmode=opaque"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className={styles.aboutBlock_content}>
                {introdetail.introContent}
              </div>
            </div>
            <PageTitle title="教育理念" />
            <div
              className={`${styles.intro_block__marginTop} ${styles.intro_conceptBlock}`}
            >
              {introdetail.concept.map((conceptInfo) => (
                <div
                  className={styles.conceptBlock_conceptBox}
                  key={conceptInfo.title}
                >
                  <img src={conceptInfo.img}></img>
                  <div className={styles.conceptBox_title}>
                    {conceptInfo.title}
                  </div>
                  <div className={styles.conceptBox_content}>
                    {conceptInfo.content}
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
                    {introdetail.classroom.map((classInfo) => (
                      <Carousel.Item interval={5000} key={classInfo.id}>
                        <img
                          className={styles.classroomCarousel_img}
                          src={classInfo.classUrl}
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
                            {classInfo.name}
                          </div>
                          <div
                            className={
                              styles.classroomCarouselInfo_classroomCarouselRow
                            }
                          >
                            <div
                              className={`${styles.classroomCarouselRow_title} ${styles.intro_classroomInfo__fontSize}`}
                            >
                              教室地點：
                            </div>
                            <div
                              className={`${styles.classroomCarouselRow_content} ${styles.intro_classroomInfo__fontSize}`}
                            >
                              {classInfo.location}
                            </div>
                          </div>
                          <div
                            className={
                              styles.classroomCarouselInfo_classroomCarouselRow
                            }
                          >
                            <div
                              className={`${styles.classroomCarouselRow_title} ${styles.intro_classroomInfo__fontSize}`}
                            >
                              教室簡介：
                            </div>
                            <div
                              className={`${styles.classroomCarouselRow_content} ${styles.intro_classroomInfo__fontSize}`}
                            >
                              {classInfo.intro}
                            </div>
                          </div>
                        </div>
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </div>
                {/* 教室資訊區塊 */}
                <div className={styles.intro_classroomBlock}>
                  {introdetail.classroom.map((classInfo) => (
                    <div key={classInfo.id}>
                      <img
                        src={classInfo.classUrl}
                        className={styles.classroomBlock_img}
                      />
                      <div className={styles.classroomBlock_classroomBlockInfo}>
                        <div
                          className={
                            styles.classroomBlockInfo_classroomBlockName
                          }
                        >
                          {classInfo.name}
                        </div>
                        <div
                          className={
                            styles.classroomBlockInfo_classroomBlockRow
                          }
                        >
                          <div
                            className={`${styles.classroomBlockRow_title} ${styles.intro_classroomInfo__fontSize}`}
                          >
                            教室地點：
                          </div>
                          <div
                            className={`${styles.classroomBlockRow_content} ${styles.intro_classroomInfo__fontSize}`}
                          >
                            {classInfo.location}
                          </div>
                        </div>
                        <div
                          className={
                            styles.classroomBlockInfo_classroomBlockRow
                          }
                        >
                          <div
                            className={`${styles.classroomBlockRow_title} ${styles.intro_classroomInfo__fontSize}`}
                          >
                            教室簡介：
                          </div>
                          <div
                            className={`${styles.classroomBlockRow_content} ${styles.intro_classroomInfo__fontSize}`}
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
        ) : (
          <div className={styles.container}></div>
        )}
      </>
      <Footer />
    </Fragment>
  );
};

export default Intro;
