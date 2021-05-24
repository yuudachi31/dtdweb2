import React, { useContext, useEffect } from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

/*icon*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import { getHomeNews } from '../../store/actions';
import { StoreContext } from '../../store/reducer';

const IndexNews = () => {
  const {
    state: { homeNews },
    dispatch,
  } = useContext(StoreContext);
  useEffect(() => {
    getHomeNews(dispatch);
  }, []);
  return (
    <>
      <div className={`${styles.section} ${styles.section_news}`} id="news">
        {homeNews.map((newsType) => (
          <div className={styles.newsContent} key={newsType.groupid}>
            <h1>{newsType.title}</h1>
            <div className={styles.news_top}></div>
            {newsType.list.map((newsDetail) => (
              <div className={styles.news} key={newsDetail.id}>
                <Link to="/" className={styles.link_a__textdecnone}>
                  <p className={styles.news_p}>{newsDetail.title}</p>
                </Link>
                <hr className={styles.news_p}></hr>
                <span className={styles.news_span}>
                  <FontAwesomeIcon icon={faClock} />
                  &ensp;{newsDetail.date}
                </span>
              </div>
            ))}
            <button
              className={`${styles.news_button} ${styles.news_button_mb}`}
            >
              <FontAwesomeIcon icon={faAngleRight} />
              &ensp;&ensp;&ensp;More
            </button>
          </div>
        ))}
        {/* <div className={styles.newsContent}>
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
        </div> */}
      </div>
    </>
  );
};

export default IndexNews;
