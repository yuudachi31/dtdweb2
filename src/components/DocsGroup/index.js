import React, { useState, useEffect } from 'react';

import styles from './styles.module.scss';

const DocsGroup = (prop) => {
  const [docsdetail, setDocsDetail] = useState([]);
  useEffect(() => {
    setDocsDetail(prop.json);
  }, []);
  return (
    <div className={styles.container}>
      {docsdetail.map((group) => (
        <div className={styles.container} key={group.subtitle}>
          <div className={styles.docsGroupName}>{group.subtitle}</div>
          <div className={styles.docsBar}>
            {group.documentList.map((download) => (
              <div key={download} className={styles.docsBar_docsBox}>
                <div dangerouslySetInnerHTML={{ __html: download }}></div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DocsGroup;
