import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//圖片匯入
import leftArrow from '../../assets/images/icons/icon_leftarrow.png';

//設計
import styles from './styles.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';
import { StoreContext } from '../../store/reducer';

import '@wordpress/block-library/build-style/style.css';
import '@wordpress/block-library/build-style/style.css';
import '@wordpress/block-library/build-style/style.css';

const NewDetail = (prop) => {
  const {
    state: { news },
  } = useContext(StoreContext);

  return (
    <div className={styles.container}>
      <div className={styles.newDetail}>
        {/* 標題 */}
        <Row className={styles.newDetail_titleBar}>
          <Link to={prop.path} className={styles.newDetail_titleBar__backBtn}>
            <img src={leftArrow} />
          </Link>
          <div className={styles.newDetail_titleBar__name}>
            {news[prop.newIndex].title}
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: news[prop.newIndex].content }}
          />
        </Row>
      </div>
    </div>
  );
};

export default NewDetail;
