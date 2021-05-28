import React from 'react';
import styles from './styles.module.scss';
import works from '../../assets/images/future/works.png';
import Future from '../../assets/json/future.json';

const FutureContent = () => {
  return (
    <div className={styles.container}>
      {Future.map((group) => (
        <>
          <div className={styles.titleBar} key={group.groupid}>
            {group.grouptitle}
          </div>
          <div className={styles.section}>
            {group.list.map((list) => (
              <div className={styles.content} key={list.id}>
                <div className={styles.content_img}>
                  <img src={works} alt=""></img>
                </div>
                <div className={styles.description}>
                  <div>
                    <div className={styles.description_h2}>{list.title}</div>
                    <div className={styles.explain}>
                      <div className={styles.explain_p_red}>（說明）例：</div>
                      <div className={styles.explain_p}>{list.description}</div>
                    </div>
                  </div>
                  <div className={styles.description_spanContent}>
                    {list.lesson.map((lesson) => (
                      <div className={styles.description_span} key={lesson[0]}>
                        {lesson}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ))}
    </div>
  );
};

export default FutureContent;
