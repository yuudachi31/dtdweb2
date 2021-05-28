import React, { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
// 設計
import styles from './styles.module.scss';
import '@wordpress/block-library/build-style/style.css';
// import '@wordpress/block-library/build-style/editor.css';
// import '@wordpress/block-library/build-style/theme.css';
// components
import Footer from '../Footer';
// 圖片匯入
import leftArrow from '../../assets/images/icons/icon_leftarrow.png';

const NewDetail = (prop) => {
  const [contentHeight, setContentHeight] = useState(0);
  const ref = useRef(null);

  const history = useHistory();

  useEffect(() => {
    setContentHeight(ref.current.clientHeight);
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.newDetail_newDetailBlock__padding}>
          <div className={styles.newDetailBlock_titleBar}>
            <button
              className={styles.titleBar_backBtn}
              onClick={() => history.goBack()}
            >
              <img className={styles.backBtn_img__width} src={leftArrow} />
            </button>
            <div className={styles.titleBar_title}>{prop.title}</div>
          </div>
          <div
            ref={ref}
            className={styles.newDetailBlock_content}
            dangerouslySetInnerHTML={{ __html: prop.content }}
          />
        </div>
      </div>
      {contentHeight != 0 ? <Footer /> : <></>}
    </>
  );
};

export default NewDetail;
