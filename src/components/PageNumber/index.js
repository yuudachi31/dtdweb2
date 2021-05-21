import React, { useEffect, useContext } from 'react';
import styles from './styles.module.scss';

import {
  setPageNumberState,
  clickPageNumber,
  clickPageChevron,
} from '../../uiStore/actions';
import { UIStoreContext } from '../../uiStore/reducer';

/*icon*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const PageNumber = (porp) => {
  const {
    state: { pageNumberState },
    dispatch,
  } = useContext(UIStoreContext);

  useEffect(() => {
    setPageNumberState(dispatch, {
      pageCount: Number(porp.pageCount),
    });
  }, []);

  const pageNumberArr = [];
  for (var i = 1; i <= porp.pageCount; i++) {
    pageNumberArr.push(i);
  }

  return (
    <div className={styles.container}>
      <div className={styles.pageNumber_box}>
        <button
          className={
            pageNumberState[0]
              ? `${styles.pageNumber_chevron} ${styles.pageNumber_chevron_unclicked}`
              : `${styles.pageNumber_chevron} ${styles.pageNumber_hover}`
          }
          onClick={
            pageNumberState[0]
              ? () => {}
              : () => clickPageChevron(dispatch, { clickChevron: -1 })
          }
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        {pageNumberArr.map((pageNumber) => (
          <button
            key={pageNumber}
            className={
              pageNumberState[pageNumber - 1]
                ? `${styles.pageNumber_number} ${styles.pageNumber_number_selected}`
                : `${styles.pageNumber_number} ${styles.pageNumber_hover}`
            }
            onClick={() => {
              clickPageNumber(dispatch, {
                clickNumber: pageNumber,
              });
            }}
          >
            {pageNumber}
          </button>
        ))}
        <button
          className={
            pageNumberState[pageNumberState.length - 1]
              ? `${styles.pageNumber_chevron} ${styles.pageNumber_chevron_unclicked}`
              : `${styles.pageNumber_chevron} ${styles.pageNumber_hover}`
          }
          onClick={
            pageNumberState[pageNumberState.length - 1]
              ? () => {}
              : () => clickPageChevron(dispatch, { clickChevron: 1 })
          }
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default PageNumber;
