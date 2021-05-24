import React, { useEffect, useState, useRef } from 'react';

import { useHistory } from 'react-router-dom';

import styles from './styles.module.scss';

import Footer from '../Footer';

//圖片匯入
import leftArrow from '../../assets/images/icons/icon_leftarrow.png';

const NewDetail = (prop) => {
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  const history = useHistory();

  useEffect(() => {
    setHeight(ref.current.clientHeight);
    console.log(ref.current.clientHeight);
  }, []);

  return (
    <>
      <div className={styles.newDetail}>
        <div className={styles.newDetail_titleBar}>
          <div className={styles.newDetail_titleBar__backBtn}>
            <button onClick={() => history.goBack()}>
              <img className={styles.newDetail_titleBar__img} src={leftArrow} />
            </button>
          </div>
          <div className={styles.newDetail_titleBar__title}>{prop.title}</div>
        </div>
        <div
          ref={ref}
          className={styles.newDetail_content}
          dangerouslySetInnerHTML={{ __html: prop.content }}
        />
      </div>
      {height != 0 ? <Footer /> : <div></div>}
    </>
  );
};

export default NewDetail;
