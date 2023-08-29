import React, { useContext, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
// 設計
import styles from './styles.module.scss';
// 路徑
import path from '../../utils/path';
// 圖片匯入
import logo from '../../assets/images/header/DTD_icon.png';
// icon匯入
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';
// uiStore
import { clickHamburgerLink } from '../../uiStore/actions';
import { UIStoreContext } from '../../uiStore/reducer';

const Header = () => {
  const { uiState, uiDispatch } = useContext(UIStoreContext);
  const ref = useRef(null);

  useEffect(() => {
    const listener = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        clickHamburgerLink(uiDispatch);
        console.log(uiState);
      }
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref]);

  return (
    <div className={styles.header}>
      <Link to={path.home} onClick={() => clickHamburgerLink(uiDispatch)}>
        <img className={styles.header_logo__width_english} src={logo}></img>
      </Link>
      <div className={styles.header_nav} ref={ref}>
        {/* navbar */}

        <button className={styles.nav_dropdownMenu_english}>
          <Link to={path.home}>
            <div className={styles.dropdownMenu_title_english}>中文版</div>
          </Link>
        </button>

        {/* hamburgerMenu */}
      </div>
    </div>
  );
};

export default Header;
