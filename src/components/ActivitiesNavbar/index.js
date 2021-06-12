import React from 'react';
import styles from './styles.module.scss';
import NavItem from '../ActivitiesNavItem';
import path from '../../utils/path';

const ActivitiesNavbar = () => {
  return (
    <div className={styles.navbar}>
      <NavItem
        pathTo={path.activities}
        className={styles.navItem}
        activeClassName={styles.navItem_active}
      >
        系所活動
      </NavItem>
      <NavItem
        pathTo={`${path.activities}/DTDGroup`}
        className={styles.navItem}
        activeClassName={styles.navItem_active}
      >
        讀書會 / 系隊
      </NavItem>
      <NavItem
        pathTo={`${path.activities}/camp`}
        className={styles.navItem}
        activeClassName={styles.navItem_active}
      >
        營隊活動
      </NavItem>
      <NavItem
        pathTo={`${path.activities}/visits`}
        className={styles.navItem}
        activeClassName={styles.navItem_active}
      >
        企業參訪
      </NavItem>
      <NavItem
        pathTo={`${path.activities}/exhibition`}
        className={styles.navItem}
        activeClassName={styles.navItem_active}
      >
        專題展覽
      </NavItem>
    </div>
  );
};

export default ActivitiesNavbar;
