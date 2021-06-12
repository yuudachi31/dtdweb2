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
        <div className={styles.container} key={group.title}>
          <div className={styles.docsGroupName}>{group.title}</div>
          <div className={styles.docsBar}>
            {group.list.map((download) =>
              !download.docName2 ? (
                <div key={download.docName} className={styles.docsBar_docsBox}>
                  <a href={download.docUrl} target="_blank" rel="noreferrer">
                    {download.docName}
                  </a>
                  {download.remarks != '' ? (
                    <div className={styles.docsBar_docsBox__remarks}>
                      （{download.remarks}）
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              ) : !download.docName3 ? (
                <div key={download.docName} className={styles.docsBar_docsBox}>
                  <a href={download.docUrl} target="_blank" rel="noreferrer">
                    {download.docName}
                  </a>
                  ／
                  <a href={download.docUrl2} target="_blank" rel="noreferrer">
                    {download.docName2}
                  </a>
                </div>
              ) : (
                <div key={download.docName} className={styles.docsBar_docsBox}>
                  <a href={download.docUrl} target="_blank" rel="noreferrer">
                    {download.docName}
                  </a>
                  ／
                  <a href={download.docUrl2} target="_blank" rel="noreferrer">
                    {download.docName2}
                  </a>
                  ／
                  <a href={download.docUrl3} target="_blank" rel="noreferrer">
                    {download.docName3}
                  </a>
                </div>
              ),
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DocsGroup;
