import styles from './styles.module.scss';

const PageNumber = () => {
  return (
    <div className={styles.container}>
      <div className={styles.pageNumber_box}>
        <button
          className={`${styles.pageNumber_arrow} ${styles.pageNumber_arrow__leftArrowImg}`}
        ></button>
        <button className={styles.pageNumber_number}>1</button>
        <button className={styles.pageNumber_number}>2</button>
        <button className={styles.pageNumber_number}>3</button>
        <button
          className={`${styles.pageNumber_arrow} ${styles.pageNumber_arrow__rightArrowImg}`}
        ></button>
      </div>
    </div>
  );
};

export default PageNumber;
