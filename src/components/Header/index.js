import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// 設計
import styles from './styles.module.scss';
// 路徑
import path from '../../utils/path';
// 圖片匯入
import logo from '../../assets/images/header/DTD.png';
// icon匯入
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// uiStore
import {
  clickHamburgerMenu,
  clickHamburgerTitle,
  clickHamburgerLink,
  setLoadState,
} from '../../uiStore/actions';
import { UIStoreContext } from '../../uiStore/reducer';

const Header = () => {
  const { uiState, uiDispatch } = useContext(UIStoreContext);

  return (
    <div className={styles.header}>
      <Link to={path.home} onClick={() => clickHamburgerLink(uiDispatch)}>
        <img className={styles.header_logo__width} src={logo}></img>
      </Link>
      <div className={styles.header_nav}>
        {/* navbar */}
        {/* 關於數位 */}
        <button className={styles.nav_dropdownMenu}>
          <div
            className={`${styles.dropdownMenu_title} ${styles.dropdownMenu_title__borderRight}`}
          >
            關於數位
          </div>
          <ul className={styles.dropdownMenu_pageList}>
            <li className={styles.pageList_pageBox}>
              <Link to={path.intro} className={styles.pageBox_page}>
                本系簡介
              </Link>
            </li>
            <li className={styles.pageList_pageBox}>
              <Link to={path.staff} className={styles.pageBox_page}>
                教學團隊
              </Link>
            </li>
            <li className={styles.pageList_pageBox}>
              <Link to={path.activities} className={styles.pageBox_page}>
                系上活動
              </Link>
            </li>
            <li className={styles.pageList_pageBox}>
              <Link to={path.future} className={styles.pageBox_page}>
                未來發展
              </Link>
            </li>
          </ul>
        </button>

        {/* 最新消息 */}
        <button className={styles.nav_dropdownMenu}>
          <div
            className={`${styles.dropdownMenu_title} ${styles.dropdownMenu_title__borderRight}`}
          >
            最新消息
          </div>
          <ul className={styles.dropdownMenu_pageList}>
            <li className={styles.pageList_pageBox}>
              <Link
                to={path.announcements}
                className={styles.pageBox_page}
                onClick={() => setLoadState(uiDispatch, { loadState: true })}
              >
                系務公告
              </Link>
            </li>
            <li className={styles.pageList_pageBox}>
              <Link
                to={path.achievements}
                className={styles.pageBox_page}
                onClick={() => setLoadState(uiDispatch, { loadState: true })}
              >
                師生榮譽榜
              </Link>
            </li>
          </ul>
        </button>

        {/* 招生資訊 */}
        <button className={styles.nav_dropdownMenu}>
          <div
            className={`${styles.dropdownMenu_title} ${styles.dropdownMenu_title__borderRight}`}
          >
            招生資訊
          </div>
          <ul className={styles.dropdownMenu_pageList}>
            <li className={styles.pageList_pageBox}>
              <Link to={path.college} className={styles.pageBox_page}>
                學士班
              </Link>
            </li>
            <li className={styles.pageList_pageBox}>
              <Link to={path.master} className={styles.pageBox_page}>
                碩士班
              </Link>
            </li>
            <li className={styles.pageList_pageBox}>
              <Link to={path.inservice} className={styles.pageBox_page}>
                在職碩士班
              </Link>
            </li>
          </ul>
        </button>

        {/* 作品展示 */}
        <button className={styles.nav_dropdownMenu}>
          <div
            className={`${styles.dropdownMenu_title} ${styles.dropdownMenu_title__borderRight}`}
          >
            作品展示
          </div>
          <ul className={styles.dropdownMenu_pageList}>
            <li className={styles.pageList_pageBox}>
              <Link to={path.graduationWorks} className={styles.pageBox_page}>
                畢業專題
              </Link>
            </li>
            <li className={styles.pageList_pageBox}>
              <Link to={path.courseWorks} className={styles.pageBox_page}>
                課程作品
              </Link>
            </li>
            <li className={styles.pageList_pageBox}>
              <Link to={path.cooperationWorks} className={styles.pageBox_page}>
                合作成果
              </Link>
            </li>
          </ul>
        </button>

        {/* 下載專區 */}
        <button className={styles.nav_dropdownMenu}>
          <div className={styles.dropdownMenu_title}>下載專區</div>
          <ul className={styles.dropdownMenu_pageList}>
            <li className={styles.pageList_pageBox}>
              <Link to={path.rules} className={styles.pageBox_page}>
                辦法規章
              </Link>
            </li>
            <li className={styles.pageList_pageBox}>
              <Link to={path.downloads} className={styles.pageBox_page}>
                表格下載
              </Link>
            </li>
          </ul>
        </button>

        {/* hamburgerMenu */}
        <button
          className={
            uiState.hamburgerMenuState
              ? `${styles.nav_hamMenu} ${styles.hamMenu_icon__selectedColor}`
              : styles.nav_hamMenu
          }
          onClick={() => clickHamburgerMenu(uiDispatch)}
        >
          <FontAwesomeIcon
            className={styles.hamMenu_icon__size}
            icon={faBars}
          />
        </button>
        <ul
          className={
            uiState.hamburgerMenuState
              ? styles.hamMenu_hamDropdownMenu
              : styles.hamMenu_hamDropdownMenu__close
          }
        >
          {/* 關於數位 */}
          <li>
            <button
              className={styles.hamDropdownMenu_hamTitleDropdownMenu}
              onClick={() => clickHamburgerTitle(uiDispatch, { clickTitle: 0 })}
            >
              <p>關於數位</p>
              <ul
                className={
                  uiState.hamburgerTitleState[0]
                    ? styles.hamTitleDropdownMenu_hamPageList
                    : styles.hamTitleDropdownMenu_hamPageList__close
                }
              >
                <li className={styles.hamPageList_hamPageBox}>
                  <Link
                    to={path.intro}
                    className={styles.hamPageBox_hamPage}
                    onClick={() => clickHamburgerLink(uiDispatch)}
                  >
                    本系簡介
                  </Link>
                </li>
                <li className={styles.hamPageList_hamPageBox}>
                  <Link
                    to={path.staff}
                    className={styles.hamPageBox_hamPage}
                    onClick={() => clickHamburgerLink(uiDispatch)}
                  >
                    教學團隊
                  </Link>
                </li>
                <li className={styles.hamPageList_hamPageBox}>
                  <Link
                    to={path.activities}
                    className={styles.hamPageBox_hamPage}
                    onClick={() => clickHamburgerLink(uiDispatch)}
                  >
                    系上活動
                  </Link>
                </li>
                <li className={styles.hamPageList_hamPageBox}>
                  <Link
                    to={path.future}
                    className={styles.hamPageBox_hamPage}
                    onClick={() => clickHamburgerLink(uiDispatch)}
                  >
                    未來發展
                  </Link>
                </li>
              </ul>
            </button>
          </li>

          {/* 最新消息 */}
          <li>
            <button
              className={styles.hamDropdownMenu_hamTitleDropdownMenu}
              onClick={() => clickHamburgerTitle(uiDispatch, { clickTitle: 1 })}
            >
              <p>最新消息</p>
              <ul
                className={
                  uiState.hamburgerTitleState[1]
                    ? styles.hamTitleDropdownMenu_hamPageList
                    : styles.hamTitleDropdownMenu_hamPageList__close
                }
              >
                <li className={styles.hamPageList_hamPageBox}>
                  <Link
                    to={path.announcements}
                    className={styles.hamPageBox_hamPage}
                    onClick={() => {
                      clickHamburgerLink(uiDispatch);
                      setLoadState(uiDispatch, { loadState: true });
                    }}
                  >
                    系務公告
                  </Link>
                </li>
                <li className={styles.hamPageList_hamPageBox}>
                  <Link
                    to={path.achievements}
                    className={styles.hamPageBox_hamPage}
                    onClick={() => {
                      clickHamburgerLink(uiDispatch);
                      setLoadState(uiDispatch, { loadState: true });
                    }}
                  >
                    師生榮譽榜
                  </Link>
                </li>
              </ul>
            </button>
          </li>

          {/* 招生資訊 */}
          <li>
            <button
              className={styles.hamDropdownMenu_hamTitleDropdownMenu}
              onClick={() => clickHamburgerTitle(uiDispatch, { clickTitle: 2 })}
            >
              <p>招生資訊</p>
              <ul
                className={
                  uiState.hamburgerTitleState[2]
                    ? styles.hamTitleDropdownMenu_hamPageList
                    : styles.hamTitleDropdownMenu_hamPageList__close
                }
              >
                <li className={styles.hamPageList_hamPageBox}>
                  <Link
                    to={path.college}
                    className={styles.hamPageBox_hamPage}
                    onClick={() => clickHamburgerLink(uiDispatch)}
                  >
                    學士班
                  </Link>
                </li>
                <li className={styles.hamPageList_hamPageBox}>
                  <Link
                    to={path.master}
                    className={styles.hamPageBox_hamPage}
                    onClick={() => clickHamburgerLink(uiDispatch)}
                  >
                    碩士班
                  </Link>
                </li>
                <li className={styles.hamPageList_hamPageBox}>
                  <Link
                    to={path.inservice}
                    className={styles.hamPageBox_hamPage}
                    onClick={() => clickHamburgerLink(uiDispatch)}
                  >
                    在職碩士班
                  </Link>
                </li>
              </ul>
            </button>
          </li>

          {/* 作品展示 */}
          <li>
            <button
              className={styles.hamDropdownMenu_hamTitleDropdownMenu}
              onClick={() => clickHamburgerTitle(uiDispatch, { clickTitle: 3 })}
            >
              <p>作品展示</p>
              <ul
                className={
                  uiState.hamburgerTitleState[3]
                    ? styles.hamTitleDropdownMenu_hamPageList
                    : styles.hamTitleDropdownMenu_hamPageList__close
                }
              >
                <li className={styles.hamPageList_hamPageBox}>
                  <Link
                    to={path.graduationWorks}
                    className={styles.hamPageBox_hamPage}
                    onClick={() => clickHamburgerLink(uiDispatch)}
                  >
                    畢業專題
                  </Link>
                </li>
                <li className={styles.hamPageList_hamPageBox}>
                  <Link
                    to={path.courseWorks}
                    className={styles.hamPageBox_hamPage}
                    onClick={() => clickHamburgerLink(uiDispatch)}
                  >
                    課程作品
                  </Link>
                </li>
                <li className={styles.hamPageList_hamPageBox}>
                  <Link
                    to={path.cooperationWorks}
                    className={styles.hamPageBox_hamPage}
                    onClick={() => clickHamburgerLink(uiDispatch)}
                  >
                    合作成果
                  </Link>
                </li>
              </ul>
            </button>
          </li>

          {/* 下載專區 */}
          <li>
            <button
              className={styles.hamDropdownMenu_hamTitleDropdownMenu}
              onClick={() => clickHamburgerTitle(uiDispatch, { clickTitle: 4 })}
            >
              <p>下載專區</p>
              <ul
                className={
                  uiState.hamburgerTitleState[4]
                    ? styles.hamTitleDropdownMenu_hamPageList
                    : styles.hamTitleDropdownMenu_hamPageList__close
                }
              >
                <li className={styles.hamPageList_hamPageBox}>
                  <Link
                    to={path.rules}
                    className={styles.hamPageBox_hamPage}
                    onClick={() => clickHamburgerLink(uiDispatch)}
                  >
                    辦法規章
                  </Link>
                </li>
                <li className={styles.hamPageList_hamPageBox}>
                  <Link
                    to={path.downloads}
                    className={styles.hamPageBox_hamPage}
                    onClick={() => clickHamburgerLink(uiDispatch)}
                  >
                    表格下載
                  </Link>
                </li>
              </ul>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
