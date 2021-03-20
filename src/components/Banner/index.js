import styles from './styles.module.scss';

const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.banner} ${styles.banner__image}`}></div>
    </div>
  );
};

export default Banner;
