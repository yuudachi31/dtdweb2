import React, { useState, useEffect } from 'react';

import styles from './styles.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import downloadjson from '../../assets/json/download.json';

const downloadGroup = () => {
  const [downloaddetail, setdownloaddetail] = useState([]);
  useEffect(() => {
    setdownloaddetail(downloadjson);
  }, []);
  return (
    <div className={styles.containerrg}>
      {downloaddetail.map((group) => (
        <div className={styles.containerrg} key={group.title}>
          <div className={styles.downloadGroupName}>{group.title}</div>
          <div className={styles.downloadbar}>
            {group.list.map((download) =>
              !download.docname2 ? (
                <div
                  key={download.docname}
                  className={styles.downloadbar_downloadbox}
                >
                  <a href={download.docurl}>{download.docname}</a>
                  {download.remarks != '' ? (
                    <div className={styles.downloadbar_downloadbox__remarks}>
                      （{download.remarks}）
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              ) : !download.docname3 ? (
                <div
                  key={download.docname}
                  className={styles.downloadbar_downloadbox}
                >
                  <a href={download.docurl}>{download.docname}</a>／
                  <a href={download.docurl2}>{download.docname2}</a>
                </div>
              ) : (
                <div
                  key={download.docname}
                  className={styles.downloadbar_downloadbox}
                >
                  <a href={download.docurl}>{download.docname}</a>／
                  <a href={download.docurl2}>{download.docname2}</a>／
                  <a href={download.docurl3}>{download.docname3}</a>
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
