import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

const SortsList = (props) => {
  const [sortslist, setsortslist] = useState({});
  useEffect(() => {
    setsortslist(props);
  }, [sortslist]);
  return (
    <>
      {sortslist.sortsList !== undefined ? (
        <div className={styles.container}>
          {sortslist.sortsList.map((sort) => (
            <button className={styles.sorttitle} key={sort}>
              {sort}
            </button>
          ))}
        </div>
      ) : (
        <div className={styles.container}></div>
      )}
    </>
  );
};

export default SortsList;
