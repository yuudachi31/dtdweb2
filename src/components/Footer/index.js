import React from 'react';

import styles from './styles.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={`${styles.footer_content} ${styles.footer_leftContent}`}>
        <p className={styles.footer_p__font}>
          國立臺北教育大學 數位科技設計學系(含玩具與遊戲設計碩士班)版權所有
        </p>
        <p className={styles.footer_p__font}>
          National Taipei University of Education Department of Digital
          Technology Design(Master Program in Toy and Game Design)All Rights
          Reserved.
        </p>
      </div>
      <div className={`${styles.footer_content} ${styles.footer_rightContent}`}>
        <p
          className={`${styles.footer_p__font} ${styles.footer_p__lineheight}`}
        >
          系所電話：(02)2732-1104分機62478 / 63533 <br />
          傳真及專線：(02)2735-5912 <br />
          E-Mail： toygame@tea.ntue.edu.tw <br />
          系辦公室地址：10671 台北市大安區和平東路2段134號&emsp;科學館5樓B507室
        </p>
      </div>
    </div>
  );
};

export default Footer;
