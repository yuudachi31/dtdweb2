import React from 'react';
import styles from './styles.module.scss';
import Future from '../../assets/json/futureEnglish.json';

const FutureContentEnglish = () => {
  return (
    <div className={styles.container}>
      {Future.map((group) => (
        <div key={group.groupid}>
          <div className={styles.titleBar}>{group.grouptitle}</div>
          <div className={styles.section}>
            {group.list.map((list) => (
              <div className={styles.content} key={list.id}>
                <div className={styles.content_img}>
                  <img
                    src={list.imgUrl}
                    alt=""
                    className={styles.content_img__size}
                  ></img>
                </div>
                <div className={styles.description}>
                  <div>
                    <div className={styles.description_h2}>{list.title}</div>
                    <div className={styles.explain}>
                      <div className={styles.explain_p}>{list.description}</div>
                    </div>
                  </div>
                  <div className={styles.description_spanContent}>
                    <div className={styles.description_spanContentLeft}>
                      {list.lesson.slice(0, 3).map((lesson) => (
                        <div className={styles.description_span} key={lesson}>
                          {lesson}
                        </div>
                      ))}
                    </div>
                    {/* <div className={styles.description_spanContentRight}>
                      {list.lesson.slice(3, 6).map((lesson) => (
                        <div className={styles.description_span} key={lesson}>
                          {lesson}
                        </div>
                      ))}
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FutureContentEnglish;
