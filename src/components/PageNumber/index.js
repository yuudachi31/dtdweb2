import styles from './styles.module.scss';

const PageNumber = () => {
  return (
    <div className={styles.container}>
      <div className={styles.pageNumber_box}>
        <div
          className={`${styles.pageNumber_arrow} ${styles.pageNumber_arrow__leftArrowImg}`}
        ></div>
        <div className={styles.pageNumber_number}>1</div>
        <div className={styles.pageNumber_number}>2</div>
        <div className={styles.pageNumber_number}>3</div>
        <div
          className={`${styles.pageNumber_arrow} ${styles.pageNumber_arrow__rightArrowImg}`}
        ></div>
      </div>
    </div>
  );
};

export default PageNumber;
