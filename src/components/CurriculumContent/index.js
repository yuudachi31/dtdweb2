import React, { useState } from 'react';
import styles from './styles.module.scss';

import { Link } from 'react-router-dom';

const CurriculumContent = () => {
  const [collegeopen, setCollegeopen] = useState(false);
  const [mastergeopen, setMasteropen] = useState(false);
  const [inservicegeopen, setInserviceopen] = useState(false);

  return (
    <div className={styles.container}>
      {/* 電腦與平板左邊欄 */}
      <div className={styles.titleFrame}>
        <div className={styles.titleBar}>大學部</div>
        <div className={styles.docsBar}>
          <div className={styles.docsBar_docsBox}>
            <Link className={styles.docsBar_docsBox__remarks}>
              110學年度上學期
            </Link>
          </div>
          <div className={styles.docsBar_docsBox}>
            <Link className={styles.docsBar_docsBox__remarks}>
              110學年度下學期
            </Link>
          </div>
          <div className={styles.docsBar_docsBox}>
            <Link className={styles.docsBar_docsBox__remarks}>
              111學年度上學期
            </Link>
          </div>
          <div className={styles.docsBar_docsBox}>
            <Link className={styles.docsBar_docsBox__remarks}>
              111學年度下學期
            </Link>
          </div>
        </div>
        <div className={styles.titleBar}>碩士班</div>
        <div className={styles.docsBar}>
          <div className={styles.docsBar_docsBox}>
            <Link className={styles.docsBar_docsBox__remarks}>
              110學年度上學期
            </Link>
          </div>
          <div className={styles.docsBar_docsBox}>
            <Link className={styles.docsBar_docsBox__remarks}>
              110學年度下學期
            </Link>
          </div>
          <div className={styles.docsBar_docsBox}>
            <Link className={styles.docsBar_docsBox__remarks}>
              111學年度上學期
            </Link>
          </div>
          <div className={styles.docsBar_docsBox}>
            <Link className={styles.docsBar_docsBox__remarks}>
              111學年度下學期
            </Link>
          </div>
        </div>
        <div className={styles.titleBar}>在職碩士班</div>
        <div className={styles.docsBar}>
          <div className={styles.docsBar_docsBox}>
            <Link className={styles.docsBar_docsBox__remarks}>
              110學年度上學期
            </Link>
          </div>
          <div className={styles.docsBar_docsBox}>
            <Link className={styles.docsBar_docsBox__remarks}>
              110學年度下學期
            </Link>
          </div>
          <div className={styles.docsBar_docsBox}>
            <Link className={styles.docsBar_docsBox__remarks}>
              111學年度上學期
            </Link>
          </div>
          <div className={styles.docsBar_docsBox}>
            <Link className={styles.docsBar_docsBox__remarks}>
              111學年度下學期
            </Link>
          </div>
        </div>
      </div>

      {/* 手機 */}
      <div className={styles.dropdownMenu}>
        <div className={styles.nav_dropdownMenu}>
          <div
            className={styles.dropdown_button}
            onClick={() => {
              setCollegeopen(!collegeopen);
              setMasteropen(false);
              setInserviceopen(false);
            }}
            type="button"
          >
            大學部
            <div className={styles.toggle}>
              <div className="dropdown-toggle"></div>
            </div>
          </div>
          {collegeopen ? (
            <div className={styles.dropdown_item}>
              <div className={styles.docsBar}>
                <div className={styles.docsBar_docsBox}>
                  <Link className={styles.docsBar_docsBox__remarks}>
                    110學年度上學期
                  </Link>
                </div>
                <div className={styles.docsBar_docsBox}>
                  <Link className={styles.docsBar_docsBox__remarks}>
                    110學年度下學期
                  </Link>
                </div>
                <div className={styles.docsBar_docsBox}>
                  <Link className={styles.docsBar_docsBox__remarks}>
                    111學年度上學期
                  </Link>
                </div>
                <div className={styles.docsBar_docsBox}>
                  <Link className={styles.docsBar_docsBox__remarks}>
                    111學年度下學期
                  </Link>
                </div>
              </div>
            </div>
          ) : null}
        </div>

        <div className={styles.nav_dropdownMenu}>
          <div
            className={styles.dropdown_button}
            onClick={() => {
              setMasteropen(!mastergeopen);
              setCollegeopen(false);
              setInserviceopen(false);
            }}
            type="button"
          >
            碩士班
            <div className={styles.toggle}>
              <div className="dropdown-toggle"></div>
            </div>
          </div>
          {mastergeopen ? (
            <div className={styles.dropdown_item}>
              <div className={styles.docsBar}>
                <div className={styles.docsBar_docsBox}>
                  <Link className={styles.docsBar_docsBox__remarks}>
                    110學年度上學期
                  </Link>
                </div>
                <div className={styles.docsBar_docsBox}>
                  <Link className={styles.docsBar_docsBox__remarks}>
                    110學年度下學期
                  </Link>
                </div>
                <div className={styles.docsBar_docsBox}>
                  <Link className={styles.docsBar_docsBox__remarks}>
                    111學年度上學期
                  </Link>
                </div>
                <div className={styles.docsBar_docsBox}>
                  <Link className={styles.docsBar_docsBox__remarks}>
                    111學年度下學期
                  </Link>
                </div>
              </div>
            </div>
          ) : null}
        </div>

        <div className={styles.nav_dropdownMenu}>
          <div
            className={styles.dropdown_button}
            onClick={() => {
              setInserviceopen(!inservicegeopen);
              setMasteropen(false);
              setCollegeopen(false);
            }}
            type="button"
          >
            在職碩士班
            <div className={styles.toggle}>
              <div className="dropdown-toggle"></div>
            </div>
          </div>
          {inservicegeopen ? (
            <div className={styles.dropdown_item}>
              <div className={styles.docsBar}>
                <div className={styles.docsBar_docsBox}>
                  <Link className={styles.docsBar_docsBox__remarks}>
                    110學年度上學期
                  </Link>
                </div>
                <div className={styles.docsBar_docsBox}>
                  <Link className={styles.docsBar_docsBox__remarks}>
                    110學年度下學期
                  </Link>
                </div>
                <div className={styles.docsBar_docsBox}>
                  <Link className={styles.docsBar_docsBox__remarks}>
                    111學年度上學期
                  </Link>
                </div>
                <div className={styles.docsBar_docsBox}>
                  <Link className={styles.docsBar_docsBox__remarks}>
                    111學年度下學期
                  </Link>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {/* 課表連結 */}
      <div className={styles.fileFrame}>
        <iframe
          className={styles.iframe}
          loading="lazy"
          src="https://drive.google.com/file/d/1gTeC0o3JOjBxSO1cE1KClD9zoL3x56X6/preview"
          allow="autoplay"
        ></iframe>
      </div>
    </div>
  );
};

export default CurriculumContent;
