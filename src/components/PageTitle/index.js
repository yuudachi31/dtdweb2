import styles from './styles.module.scss';

const PageTitle = (prop) => {
  const { title } = prop;
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.titleLine}></div>
    </div>
  );
};

export default PageTitle;
