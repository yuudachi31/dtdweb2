import React, { useState, useEffect } from 'react';

import styles from './styles.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

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
              !download.docname2 ? (
                <div key={download.docname} className={styles.docsBar_docsBox}>
                  <a href={download.docurl} target="_blank" rel="noreferrer">
                    {download.docname}
                  </a>
                  {download.remarks != '' ? (
                    <div className={styles.docsBar_docsBox__remarks}>
                      （{download.remarks}）
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              ) : !download.docname3 ? (
                <div key={download.docname} className={styles.docsBar_docsBox}>
                  <a href={download.docurl} target="_blank" rel="noreferrer">
                    {download.docname}
                  </a>
                  ／
                  <a href={download.docurl2} target="_blank" rel="noreferrer">
                    {download.docname2}
                  </a>
                </div>
              ) : (
                <div key={download.docname} className={styles.docsBar_docsBox}>
                  <a href={download.docurl} target="_blank" rel="noreferrer">
                    {download.docname}
                  </a>
                  ／
                  <a href={download.docurl2} target="_blank" rel="noreferrer">
                    {download.docname2}
                  </a>
                  ／
                  <a href={download.docurl3} target="_blank" rel="noreferrer">
                    {download.docname3}
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
