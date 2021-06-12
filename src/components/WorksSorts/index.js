import { useContext } from 'react';
//css
import styles from './styles.module.scss';
//path
import linkPath from '../../utils/path';
//data
import {
  getGraduationWorksShow,
  getGraduationWorks,
  getCourseWorksShow,
  getCourseWorks,
  getGoodWorksShow,
  getGoodWorks,
} from '../../store/actions';
import { StoreContext } from '../../store/reducer';

const SortsList = (prop) => {
  const { sortsList, selectedItem, path } = prop;
  const { dispatch } = useContext(StoreContext);

  const Click = (sort, e) => {
    e.preventDefault();
    if (path == linkPath.graduationWorks) {
      sort == '所有'
        ? getGraduationWorks(dispatch)
        : getGraduationWorksShow(dispatch, { sort });
    } else if (path == linkPath.courseWorks) {
      sort == '所有'
        ? getCourseWorks(dispatch)
        : getCourseWorksShow(dispatch, { sort });
    } else if (path == linkPath.goodWorks) {
      sort == '所有'
        ? getGoodWorks(dispatch)
        : getGoodWorksShow(dispatch, { sort });
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
              onClick={(e) => Click(sort.toString(), e)}
              key={sort}
            >
              {sort.slice(sort.search(/-/i) + 1)}
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
