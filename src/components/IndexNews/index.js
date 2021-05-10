import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

/*icon*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const IndexNews = () => {
  return (
    <>
      <div className={`${styles.section} ${styles.section_news}`} id="news">
        <div className={styles.newsContent}>
          <h1>系務公告 / Announcement</h1>
          <div className={styles.news_top}></div>
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

          <button className={`${styles.news_button} ${styles.news_button_mb}`}>
            <FontAwesomeIcon icon={faAngleRight} />
            &ensp;&ensp;&ensp;More
          </button>
        </div>

        <div className={styles.newsContent}>
          <h1>師生榮譽榜 / Achievement</h1>
          <div className={styles.news_top}></div>
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
    </>
  );
};

export default IndexNews;
