import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

/*component*/
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import IndexBanner from '../../components/IndexBanner';
import IndexContent from '../../components/IndexContent';

/*icon*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <Fragment className={styles.homePage_bgc}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>數位科技設計學系-國立臺北教育大學</title>
        <meta name="description" content="數位科技設計學系的首頁" />
      </Helmet>
      <Header />
      <IndexBanner />

      <div className={styles.container}>
        <div className={`${styles.section} ${styles.section_news}`} id="news">
          <div className={styles.newsContent}>
            <h1>系務公告 / Announcement</h1>
            <div className={`${styles.news} ${styles.news_top}`}>
              <Link to="/" className={styles.link_a__textdecnone}>
                <p className={styles.news_p}>
                  110學年度碩士班考試入學面試地點公告
                </p>
              </Link>
              <hr className={styles.news_p}></hr>
              <span className={styles.news_span}>
                <FontAwesomeIcon icon={faClock} />
                &ensp;5&ensp;2月,2021
              </span>
            </div>
            <div className={styles.news}>
              <Link to="/" className={styles.link_a__textdecnone}>
                <p className={styles.news_p}>
                  110學年度碩士班考試入學面試地點公告
                </p>
              </Link>
              <hr className={styles.news_p}></hr>
              <span className={styles.news_span}>
                <FontAwesomeIcon icon={faClock} />
                &ensp;5&ensp;2月,2021
              </span>
            </div>
            <div className={styles.news}>
              <Link to="/" className={styles.link_a__textdecnone}>
                <p className={styles.news_p}>
                  110學年度碩士班考試入學面試地點公告
                </p>
              </Link>
              <hr className={styles.news_p}></hr>
              <span className={styles.news_span}>
                <FontAwesomeIcon icon={faClock} />
                &ensp;5&ensp;2月,2021
              </span>
            </div>
            <div className={styles.news}>
              <Link to="/" className={styles.link_a__textdecnone}>
                <p className={styles.news_p}>
                  110學年度碩士班考試入學面試地點公告
                </p>
              </Link>
              <hr className={styles.news_p}></hr>
              <span className={styles.news_span}>
                <FontAwesomeIcon icon={faClock} />
                &ensp;5&ensp;2月,2021
              </span>
            </div>
            <div className={styles.news}>
              <Link to="/" className={styles.link_a__textdecnone}>
                <p className={styles.news_p}>
                  110學年度碩士班考試入學面試地點公告
                </p>
              </Link>
              <hr className={styles.news_p}></hr>
              <span className={styles.news_span}>
                <FontAwesomeIcon icon={faClock} />
                &ensp;5&ensp;2月,2021
              </span>
            </div>
            <button
              className={`${styles.news_button} ${styles.news_button_mb}`}
            >
              <FontAwesomeIcon icon={faAngleRight} />
              &ensp;&ensp;&ensp;More
            </button>
          </div>

          <div className={styles.newsContent}>
            <h1>師生榮譽榜 / Achievement</h1>
            <div className={`${styles.news} ${styles.news_top}`}>
              <Link to="/" className={styles.link_a__textdecnone}>
                <p className={styles.news_p}>
                  110學年度碩士班考試入學面試地點公告
                </p>
              </Link>
              <hr className={styles.news_p}></hr>
              <span className={styles.news_span}>
                <FontAwesomeIcon icon={faClock} />
                &ensp;5&ensp;2月,2021
              </span>
            </div>
            <div className={styles.news}>
              <Link to="/" className={styles.link_a__textdecnone}>
                <p className={styles.news_p}>
                  110學年度碩士班考試入學面試地點公告
                </p>
              </Link>
              <hr className={styles.news_p}></hr>
              <span className={styles.news_span}>
                <FontAwesomeIcon icon={faClock} />
                &ensp;5&ensp;2月,2021
              </span>
            </div>
            <div className={styles.news}>
              <Link to="/" className={styles.link_a__textdecnone}>
                <p className={styles.news_p}>
                  110學年度碩士班考試入學面試地點公告
                </p>
              </Link>
              <hr className={styles.news_p}></hr>
              <span className={styles.news_span}>
                <FontAwesomeIcon icon={faClock} />
                &ensp;5&ensp;2月,2021
              </span>
            </div>
            <div className={styles.news}>
              <Link to="/" className={styles.link_a__textdecnone}>
                <p className={styles.news_p}>
                  110學年度碩士班考試入學面試地點公告
                </p>
              </Link>
              <hr className={styles.news_p}></hr>
              <span className={styles.news_span}>
                <FontAwesomeIcon icon={faClock} />
                &ensp;5&ensp;2月,2021
              </span>
            </div>
            <div className={styles.news}>
              <Link to="/" className={styles.link_a__textdecnone}>
                <p className={styles.news_p}>
                  110學年度碩士班考試入學面試地點公告
                </p>
              </Link>
              <hr className={styles.news_p}></hr>
              <span className={styles.news_span}>
                <FontAwesomeIcon icon={faClock} />
                &ensp;5&ensp;2月,2021
              </span>
            </div>
            <button className={styles.news_button}>
              <FontAwesomeIcon icon={faAngleRight} />
              &ensp;&ensp;&ensp;More
            </button>
          </div>
        </div>
        <IndexContent />
      </div>

      <Footer />
    </Fragment>
  );
};

export default Home;
