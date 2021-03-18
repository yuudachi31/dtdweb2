import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

const Header = () => {
  return (
    <div className={styles.container}>
      <Link to="/" className={styles.logo}></Link>
      <div className={styles.nav}>
        <button className={styles.nav_dropdown}>
          <div className={styles.nav_title}>關於數位</div>
          <ul className={styles.nav_drop}>
            <li className={styles.nav_linkBox}>
              <Link to="/" className={styles.nav_link}>
                本系簡介
              </Link>
            </li>
            <li className={styles.nav_linkBox}>
              <Link to="/teacher" className={styles.nav_link}>
                教學團隊
              </Link>
            </li>
            <li className={styles.nav_linkBox}>
              <Link to="/" className={styles.nav_link}>
                系上活動
              </Link>
            </li>
            <li className={styles.nav_linkBox}>
              <Link to="/news" className={styles.nav_link}>
                未來發展
              </Link>
            </li>
          </ul>
        </button>
        <button className={styles.nav_dropdown}>
          <div className={styles.nav_title}>最新消息</div>
          <ul className={styles.nav_drop}>
            <li className={styles.nav_linkBox}>
              <Link to="/" className={styles.nav_link}>
                本系簡介
              </Link>
            </li>
            <li className={styles.nav_linkBox}>
              <Link to="/news" className={styles.nav_link}>
                教學團隊
              </Link>
            </li>
            <li className={styles.nav_linkBox}>
              <Link to="/" className={styles.nav_link}>
                系上活動
              </Link>
            </li>
            <li className={styles.nav_linkBox}>
              <Link to="/news" className={styles.nav_link}>
                未來發展
              </Link>
            </li>
          </ul>
        </button>
        <button className={styles.nav_dropdown}>
          <div className={styles.nav_title}>招生資訊</div>
          <ul className={styles.nav_drop}>
            <li className={styles.nav_linkBox}>
              <Link to="/" className={styles.nav_link}>
                本系簡介
              </Link>
            </li>
            <li className={styles.nav_linkBox}>
              <Link to="/news" className={styles.nav_link}>
                教學團隊
              </Link>
            </li>
            <li className={styles.nav_linkBox}>
              <Link to="/" className={styles.nav_link}>
                系上活動
              </Link>
            </li>
            <li className={styles.nav_linkBox}>
              <Link to="/news" className={styles.nav_link}>
                未來發展
              </Link>
            </li>
          </ul>
        </button>
        <button className={styles.nav_dropdown}>
          <div className={styles.nav_title}>作品展示</div>
          <ul className={styles.nav_drop}>
            <li className={styles.nav_linkBox}>
              <Link to="/" className={styles.nav_link}>
                本系簡介
              </Link>
            </li>
            <li className={styles.nav_linkBox}>
              <Link to="/news" className={styles.nav_link}>
                教學團隊
              </Link>
            </li>
            <li className={styles.nav_linkBox}>
              <Link to="/" className={styles.nav_link}>
                系上活動
              </Link>
            </li>
            <li className={styles.nav_linkBox}>
              <Link to="/news" className={styles.nav_link}>
                未來發展
              </Link>
            </li>
          </ul>
        </button>
        <button className={styles.lastnav_dropdown}>
          <div className={styles.lastnav_title}>下載專區</div>
          <ul className={styles.lastnav_drop}>
            <li className={styles.lastnav_linkBox}>
              <Link to="/" className={styles.lastnav_link}>
                本系簡介
              </Link>
            </li>
            <li className={styles.lastnav_linkBox}>
              <Link to="/news" className={styles.lastnav_link}>
                教學團隊
              </Link>
            </li>
            <li className={styles.lastnav_linkBox}>
              <Link to="/" className={styles.lastnav_link}>
                系上活動
              </Link>
            </li>
            <li className={styles.lastnav_linkBox}>
              <Link to="/news" className={styles.lastnav_link}>
                未來發展
              </Link>
            </li>
          </ul>
        </button>
      </div>
    </div>
  );
};

export default Header;
