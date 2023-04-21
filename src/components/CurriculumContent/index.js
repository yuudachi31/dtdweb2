import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
//css
import styles from './styles.module.scss';
//data
import { getCurriculum } from '../../store/actions';
import { StoreContext } from '../../store/reducer';
const CurriculumContent = () => {
  const [collegeopen, setCollegeopen] = useState(false);
  const [mastergeopen, setMasteropen] = useState(false);
  const [inservicegeopen, setInserviceopen] = useState(false);
  //暫時預設為大學部最新課表
  const [pdfurl, setPdfurl] = useState(4770);
  const {
    state: {
      curriculum,
      requestdata: { loading },
    },
    dispatch,
  } = useContext(StoreContext);

  useEffect(() => {
    getCurriculum(dispatch);
  }, []);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  }, [loading]);

  return (
    <div className={styles.container}>
      {/* 電腦與平板 */}
      <div className={styles.titleFrame}>
        <div className={styles.titleBar}>大學部</div>
        <div className={styles.docsBar}>
          {curriculum?.map(
            (group) =>
              group.curriculumCategory === '大學部' && (
                <div key={group.id} className={styles.docsBar_docsBox}>
                  <Link
                    className={styles.docsBar_docsBox__remarks}
                    onClick={() => setPdfurl(group.id)}
                  >
                    {group.title}
                  </Link>
                </div>
              ),
          )}
        </div>
        <div className={styles.titleBar}>碩士班</div>
        <div className={styles.docsBar}>
          {curriculum?.map(
            (group) =>
              group.curriculumCategory === '碩士班' && (
                <div key={group.id} className={styles.docsBar_docsBox}>
                  <Link
                    className={styles.docsBar_docsBox__remarks}
                    onClick={() => setPdfurl(group.id)}
                  >
                    {group.title}
                  </Link>
                </div>
              ),
          )}
        </div>
        <div className={styles.titleBar}>在職碩士班</div>
        <div className={styles.docsBar}>
          {curriculum?.map(
            (group) =>
              group.curriculumCategory === '在職碩士班' && (
                <div key={group.id} className={styles.docsBar_docsBox}>
                  <Link
                    className={styles.docsBar_docsBox__remarks}
                    onClick={() => setPdfurl(group.id)}
                  >
                    {group.title}
                  </Link>
                </div>
              ),
          )}
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
                {curriculum?.map(
                  (group) =>
                    group.curriculumCategory === '大學部' && (
                      <div key={group.id} className={styles.docsBar_docsBox}>
                        <Link
                          className={styles.docsBar_docsBox__remarks}
                          onClick={() => setPdfurl(group.id)}
                        >
                          {group.title}
                        </Link>
                      </div>
                    ),
                )}
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
                {curriculum?.map(
                  (group) =>
                    group.curriculumCategory === '碩士班' && (
                      <div key={group.id} className={styles.docsBar_docsBox}>
                        <Link
                          className={styles.docsBar_docsBox__remarks}
                          onClick={() => setPdfurl(group.id)}
                        >
                          {group.title}
                        </Link>
                      </div>
                    ),
                )}
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
                {curriculum?.map(
                  (group) =>
                    group.curriculumCategory === '在職碩士班' && (
                      <div key={group.id} className={styles.docsBar_docsBox}>
                        <Link
                          className={styles.docsBar_docsBox__remarks}
                          onClick={() => setPdfurl(group.id)}
                        >
                          {group.title}
                        </Link>
                      </div>
                    ),
                )}
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {/* 課表連結 */}
      <div className={styles.fileFrame}>
        {curriculum?.map(
          (group) =>
            group.id === pdfurl && (
              <iframe
                key={group.id}
                className={styles.iframe}
                loading="lazy"
                src={group.curriculumUrl}
                allow="autoplay"
              ></iframe>
            ),
        )}
      </div>
    </div>
  );
};

export default CurriculumContent;
