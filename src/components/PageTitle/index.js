import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

const PageTitle = (props) => {
  const [title, settitle] = useState({});
  useEffect(() => {
    settitle(props);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title.title}</div>
      <div className={styles.titleLine}></div>
    </div>
  );
};

export default PageTitle;
