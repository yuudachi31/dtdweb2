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
        系隊/讀書會
      </NavItem>
    </div>
  );
};

export default ActivitiesNavbar;
