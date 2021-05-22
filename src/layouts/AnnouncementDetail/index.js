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

const AnnouncementDetail = () => {
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
        <title>系務公告-國立臺北教育大學</title>
        <meta name="description" content="數位科技設計學系的系務公告" />
      </Helmet>
      <div className={styles.container}>
        <Header />
        <div className={styles.announcementDetail}>
          <div className={styles.announcementDetail_titleBar}>
            <div className={styles.announcementDetail_titleBar__backBtn}>
              <Link to={path.announcements}>
                <img
                  className={styles.announcementDetail_titleBar__img}
                  src={leftArrow}
                />
              </Link>
            </div>
            <div className={styles.announcementDetail_titleBar__title}>
              {news[newIndex].title}
            </div>
          </div>
          <div
            ref={ref}
            className={styles.announcementDetail_content}
            dangerouslySetInnerHTML={{ __html: news[newIndex].content }}
          />
        </div>
        {height != 0 ? <Footer /> : <div></div>}
      </div>
    </Fragment>
  );
};

export default AnnouncementDetail;
