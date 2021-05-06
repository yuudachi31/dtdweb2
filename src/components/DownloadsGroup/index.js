import React, { useState, useEffect } from 'react';

import styles from './styles.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import downloadsjson from '../../assets/json/downloads.json';

const downloadGroup = () => {
  const [downloaddetail, setdownloaddetail] = useState([]);
  useEffect(() => {
    setdownloaddetail(downloadsjson);
  }, []);
  return (
    <div className={styles.container}>
      {downloaddetail.map((group) => (
        <div className={styles.container} key={group.title}>
          <div className={styles.downloadGroupName}>{group.title}</div>
          <div className={styles.downloadBar}>
            {group.list.map((download) =>
              !download.docname2 ? (
                <div
                  key={download.docname}
                  className={styles.downloadBar_downloadBox}
                >
                  <a href={download.docurl} target="_blank" rel="noreferrer">
                    {download.docname}
                  </a>
                  {download.remarks != '' ? (
                    <div className={styles.downloadBar_downloadBox__remarks}>
                      （{download.remarks}）
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              ) : !download.docname3 ? (
                <div
                  key={download.docname}
                  className={styles.downloadBar_downloadBox}
                >
                  <a href={download.docurl} target="_blank" rel="noreferrer">
                    {download.docname}
                  </a>
                  ／
                  <a href={download.docurl2} target="_blank" rel="noreferrer">
                    {download.docname2}
                  </a>
                </div>
              ) : (
                <div
                  key={download.docname}
                  className={styles.downloadBar_downloadBox}
                >
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

export default downloadGroup;
