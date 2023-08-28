import React from 'react';

import styles from './styles.module.scss';

const FooterEnglish = () => {
  return (
    <div className={styles.footer}>
      <div className={`${styles.footer_content} ${styles.footer_leftContent}`}>
        <p className={styles.footer_p__font}>
          National Taipei University of Education Department of Digital
          Technology Design(Master Program in Toy and Game Design)All Rights
          Reserved.
        </p>
        {/* <p className={styles.footer_p__font}>
          National Taipei University of Education Department of Digital
          Technology Design(Master Program in Toy and Game Design)All Rights
          Reserved.
        </p> */}
      </div>
      <div className={`${styles.footer_content} ${styles.footer_rightContent}`}>
        <p
          className={`${styles.footer_p__font} ${styles.footer_p__lineheight}`}
        >
          Tel：(02)2732-1104 ext.62478 / 63533 <br />
          Fax：(02)2735-5912 <br />
          E-Mail： toygame@tea.ntue.edu.tw <br />
          Address：No.134, Sec. 2, Heping E. Rd., Da-an District, Taipei City
          106&emsp;－－Science Building classroom B507
        </p>
      </div>
    </div>
  );
};

export default FooterEnglish;
