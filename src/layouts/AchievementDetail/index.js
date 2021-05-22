import React, {
  Fragment,
  useContext,
  useState,
  useEffect,
  useRef,
} from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import path from '../../utils/path';
import { StoreContext } from '../../store/reducer';

import styles from './styles.module.scss';
import '@wordpress/block-library/build-style/style.css';
import '@wordpress/block-library/build-style/style.css';
import '@wordpress/block-library/build-style/style.css';

//圖片匯入
import leftArrow from '../../assets/images/icons/icon_leftarrow.png';

const AchievementDetail = () => {
  let { newIndex } = useParams();
  const {
    state: { news },
  } = useContext(StoreContext);

  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setHeight(ref.current.clientHeight);
  }, []);

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>師生榮譽榜-國立臺北教育大學</title>
        <meta name="description" content="數位科技設計學系的師生榮譽榜" />
      </Helmet>
      <div className={styles.container}>
        <Header />
        <div className={styles.achievementDetail}>
          <div className={styles.achievementDetail_titleBar}>
            <div className={styles.achievementDetail_titleBar__backBtn}>
              <Link to={path.achievements}>
                <img
                  className={styles.achievementDetail_titleBar__img}
                  src={leftArrow}
                />
              </Link>
            </div>
            <div className={styles.achievementDetail_titleBar__title}>
              {news[newIndex].title}
            </div>
          </div>
          <div
            ref={ref}
            className={styles.achievementDetail_content}
            dangerouslySetInnerHTML={{ __html: news[newIndex].content }}
          />
        </div>
        {height != 0 ? <Footer /> : <div></div>}
      </div>
    </Fragment>
  );
};

export default AchievementDetail;
