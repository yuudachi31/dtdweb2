import { useContext } from 'react';
import styles from './styles.module.scss';

import {
  getGraduationWorksShow,
  getGraduationWorks,
} from '../../store/actions';
import { StoreContext } from '../../store/reducer';

const SortsList = (prop) => {
  const { sortsList, selectedItem, path } = prop;
  const { dispatch } = useContext(StoreContext);

  const Click = (sort, e) => {
    e.preventDefault();
    if (path == '/graduationWorks') {
      sort == '所有'
        ? getGraduationWorks(dispatch)
        : getGraduationWorksShow(dispatch, { sort });
    }
  };
  return (
    <>
      {sortsList !== undefined ? (
        <div className={styles.container}>
          {sortsList.map((sort) => (
            <div
              className={
                selectedItem == sort
                  ? styles.sorttitle_selected
                  : styles.sorttitle
              }
              onClick={(e) => Click(sort, e)}
              key={sort}
            >
              {sort}
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.container}></div>
      )}
    </>
  );
};

export default SortsList;
