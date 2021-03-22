import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import path from '../../utils/path';

const Header = () => {
  return (
    <div className={styles.container}>
      <Link to={path.home} className={styles.logo}></Link>
      <div className={styles.nav}>
        <button className={styles.nav_dropdown}>
          <div
            className={`${styles.nav_title} ${styles.nav_title__borderRight}`}
          >
            關於數位
          </div>
          <ul className={styles.nav_dropmenu}>
            <li className={styles.nav_linkBox}>
              <Link to="/" className={styles.nav_link}>
                本系簡介
              </Link>
            </li>
            <li className={styles.nav_linkBox}>
              <Link to={path.staff} className={styles.nav_link}>
                教學團隊
              </Link>
            </li>
            <li className={styles.nav_linkBox}>
              <Link to="/" className={styles.nav_link}>
                系上活動
              </Link>
            </li>
            <li className={styles.nav_linkBox}>
              <Link to="/" className={styles.nav_link}>
                未來發展
              </Link>
            </li>
          </ul>
        </button>
        <button className={styles.nav_dropdown}>
          <div
            className={`${styles.nav_title} ${styles.nav_title__borderRight}`}
          >
            最新消息
          </div>
          <ul className={styles.nav_dropmenu}>
            <li className={styles.nav_linkBox}>
              <Link to={path.news} className={styles.nav_link}>
                系所公告
              </Link>
            </li>
            <li className={styles.nav_linkBox}>
              <Link to={path.honors} className={styles.nav_link}>
                師生榮譽榜
              </Link>
            </li>
          </ul>
        </button>
        <button className={styles.nav_dropdown}>
          <div
            className={`${styles.nav_title} ${styles.nav_title__borderRight}`}
          >
            招生資訊
          </div>
          <ul className={styles.nav_dropmenu}>
            <li className={styles.nav_linkBox}>
              <Link to="/" className={styles.nav_link}>
                學士班
              </Link>
            </li>
            <li className={styles.nav_linkBox}>
              <Link to="/" className={styles.nav_link}>
                碩士班
              </Link>
            </li>
            <li className={styles.nav_linkBox}>
              <Link to="/" className={styles.nav_link}>
                在職專班
              </Link>
            </li>
          </ul>
        </button>
        <button className={styles.nav_dropdown}>
          <div
            className={`${styles.nav_title} ${styles.nav_title__borderRight}`}
          >
            作品展示
          </div>
          <ul className={styles.nav_dropmenu}>
            <li className={styles.nav_linkBox}>
              <Link to="/" className={styles.nav_link}>
                畢業專題
              </Link>
            </li>
            <li className={styles.nav_linkBox}>
              <Link to="/" className={styles.nav_link}>
                課程作品
              </Link>
            </li>
            <li className={styles.nav_linkBox}>
              <Link to="/" className={styles.nav_link}>
                合作成果
              </Link>
            </li>
          </ul>
        </button>
        <button className={styles.nav_dropdown}>
          <div className={styles.nav_title}>下載專區</div>
          <ul className={styles.nav_dropmenu}>
            <li className={styles.nav_linkBox}>
              <Link to={path.rules} className={styles.nav_link}>
                辦法規章
              </Link>
            </li>
            <li className={styles.nav_linkBox}>
              <Link to={path.downloads} className={styles.nav_link}>
                表格下載
              </Link>
            </li>
          </ul>
        </button>
      </div>
    </div>
  );
};

export default Header;
