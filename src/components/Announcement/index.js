import styles from './styles.module.scss';

var x = [1, 2, 3, 4, 5, 6];

const Announcement = () => {
  return (
    <div className={styles.container}>
      <div className={styles.announcement}>
        {x.map((e) => (
          <div key={e} className={styles.announcement_box}>
            <div className={styles.announcement_title}>
              110學年度碩士在職專班面試時地公告
            </div>
            <div className={styles.announcement_content}>
              面試時間表經公告後不予調整順序。 考生報到及應試時請 […]
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcement;
