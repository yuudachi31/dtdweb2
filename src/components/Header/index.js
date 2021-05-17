import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import path from '../../utils/path';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import {
  clickHamburgerMenu,
  clickHamburgerTitle,
  clickHamburgerLink,
} from '../../uiStore/actions';

import { UIStoreContext } from '../../uiStore/reducer';

const Header = () => {
  const { state, dispatch } = useContext(UIStoreContext);

  return (
    <div className={styles.container}>
      <Link to={path.home} className={styles.logo}></Link>
      <div className={styles.nav}>
        {/* hamburgerMenu */}
        <button
          className={
            state.hamburgerMenu
              ? `${styles.nav_hamMenu} ${styles.nav_hamMenu__color}`
              : styles.nav_hamMenu
          }
          onClick={() => clickHamburgerMenu(dispatch)}
        >
          <FontAwesomeIcon className={styles.nav_hamMenu__size} icon={faBars} />
        </button>
        <ul
          className={
            state.hamburgerMenu
              ? styles.nav_hamMenuDropdown
              : styles.nav_hamMenuDropdown__close
          }
        >
          <li>
            <button
              className={styles.nav_hamTitle}
              onClick={() => clickHamburgerTitle(dispatch, { clickTitle: 0 })}
            >
              <p>關於數位</p>
              <ul
                className={
                  state.hamburgerTitle[0]
                    ? styles.nav_hamTitleDropdown
                    : styles.nav_hamTitleDropdown__close
                }
              >
                <li className={styles.nav_hamLinkBox}>
                  <Link
                    to={path.intro}
                    className={styles.nav_hamLink}
                    onClick={() => clickHamburgerLink(dispatch)}
                  >
                    本系簡介
                  </Link>
                </li>
                <li className={styles.nav_hamLinkBox}>
                  <Link
                    to={path.staff}
                    className={styles.nav_hamLink}
                    onClick={() => clickHamburgerLink(dispatch)}
                  >
                    教學團隊
                  </Link>
                </li>
                <li className={styles.nav_hamLinkBox}>
                  <Link
                    to={path.activities}
                    className={styles.nav_hamLink}
                    onClick={() => clickHamburgerLink(dispatch)}
                  >
                    系上活動
                  </Link>
                </li>
                <li className={styles.nav_hamLinkBox}>
                  <Link
                    to={path.future}
                    className={styles.nav_hamLink}
                    onClick={() => clickHamburgerLink(dispatch)}
                  >
                    未來發展
                  </Link>
                </li>
              </ul>
            </button>
          </li>

          <li>
            <button
              className={styles.nav_hamTitle}
              onClick={() => clickHamburgerTitle(dispatch, { clickTitle: 1 })}
            >
              <p>最新消息</p>
              <ul
                className={
                  state.hamburgerTitle[1]
                    ? styles.nav_hamTitleDropdown
                    : styles.nav_hamTitleDropdown__close
                }
              >
                <li className={styles.nav_hamLinkBox}>
                  <Link
                    to={path.news}
                    className={styles.nav_hamLink}
                    onClick={() => clickHamburgerLink(dispatch)}
                  >
                    系務公告
                  </Link>
                </li>
                <li className={styles.nav_hamLinkBox}>
                  <Link
                    to={path.honors}
                    className={styles.nav_hamLink}
                    onClick={() => clickHamburgerLink(dispatch)}
                  >
                    師生榮譽榜
                  </Link>
                </li>
              </ul>
            </button>
          </li>

          <li>
            <button
              className={styles.nav_hamTitle}
              onClick={() => clickHamburgerTitle(dispatch, { clickTitle: 2 })}
            >
              <p>招生資訊</p>
              <ul
                className={
                  state.hamburgerTitle[2]
                    ? styles.nav_hamTitleDropdown
                    : styles.nav_hamTitleDropdown__close
                }
              >
                <li className={styles.nav_hamLinkBox}>
                  <Link
                    to={path.college}
                    className={styles.nav_hamLink}
                    onClick={() => clickHamburgerLink(dispatch)}
                  >
                    學士班
                  </Link>
                </li>
                <li className={styles.nav_hamLinkBox}>
                  <Link
                    to={path.master}
                    className={styles.nav_hamLink}
                    onClick={() => clickHamburgerLink(dispatch)}
                  >
                    碩士班
                  </Link>
                </li>
                <li className={styles.nav_hamLinkBox}>
                  <Link
                    to={path.inservice}
                    className={styles.nav_hamLink}
                    onClick={() => clickHamburgerLink(dispatch)}
                  >
                    在職碩士班
                  </Link>
                </li>
              </ul>
            </button>
          </li>

          <li>
            <button
              className={styles.nav_hamTitle}
              onClick={() => clickHamburgerTitle(dispatch, { clickTitle: 3 })}
            >
              <p>作品展示</p>
              <ul
                className={
                  state.hamburgerTitle[3]
                    ? styles.nav_hamTitleDropdown
                    : styles.nav_hamTitleDropdown__close
                }
              >
                <li className={styles.nav_hamLinkBox}>
                  <Link
                    to="/"
                    className={styles.nav_hamLink}
                    onClick={() => clickHamburgerLink(dispatch)}
                  >
                    畢業專題
                  </Link>
                </li>
                <li className={styles.nav_hamLinkBox}>
                  <Link
                    to="/"
                    className={styles.nav_hamLink}
                    onClick={() => clickHamburgerLink(dispatch)}
                  >
                    課程作品
                  </Link>
                </li>
                <li className={styles.nav_hamLinkBox}>
                  <Link
                    to="/"
                    className={styles.nav_hamLink}
                    onClick={() => clickHamburgerLink(dispatch)}
                  >
                    合作成果
                  </Link>
                </li>
              </ul>
            </button>
          </li>

          <li>
            <button
              className={styles.nav_hamTitle}
              onClick={() => clickHamburgerTitle(dispatch, { clickTitle: 4 })}
            >
              <p>下載專區</p>
              <ul
                className={
                  state.hamburgerTitle[4]
                    ? styles.nav_hamTitleDropdown
                    : styles.nav_hamTitleDropdown__close
                }
              >
                <li className={styles.nav_hamLinkBox}>
                  <Link
                    to={path.rules}
                    className={styles.nav_hamLink}
                    onClick={() => clickHamburgerLink(dispatch)}
                  >
                    辦法規章
                  </Link>
                </li>
                <li className={styles.nav_hamLinkBox}>
                  <Link
                    to={path.downloads}
                    className={styles.nav_hamLink}
                    onClick={() => clickHamburgerLink(dispatch)}
                  >
                    表格下載
                  </Link>
                </li>
              </ul>
            </button>
          </li>
        </ul>
        {/* navbar */}
        <button className={styles.nav_dropdown}>
          <div
            className={`${styles.nav_title} ${styles.nav_title__borderRight}`}
          >
            關於數位
          </div>
          <ul className={styles.nav_dropmenu}>
            <li className={styles.nav_linkBox}>
              <Link to={path.intro} className={styles.nav_link}>
                本系簡介
              </Link>
            </li>
            <li className={styles.nav_linkBox}>
              <Link to={path.staff} className={styles.nav_link}>
                教學團隊
              </Link>
            </li>
            <li className={styles.nav_linkBox}>
              <Link to={path.activities} className={styles.nav_link}>
                系上活動
              </Link>
            </li>
            <li className={styles.nav_linkBox}>
              <Link to={path.future} className={styles.nav_link}>
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
                系務公告
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
              <Link to={path.college} className={styles.nav_link}>
                學士班
              </Link>
            </li>
            <li className={styles.nav_linkBox}>
              <Link to={path.master} className={styles.nav_link}>
                碩士班
              </Link>
            </li>
            <li className={styles.nav_linkBox}>
              <Link to={path.inservice} className={styles.nav_link}>
                在職碩士班
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
