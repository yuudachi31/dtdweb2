import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

const PageTitle = (props) => {
  const [sortslist, setsortslist] = useState({});
  useEffect(() => {
    setsortslist(props);
  }, []);
  return (
    <div className={styles.container}>
      {sortslist.sortsList.map((sort) => (
        <div className={styles.title} key={sort}>
          {sort}
        </div>
      ))}
    </div>
  );
};

export default PageTitle;
