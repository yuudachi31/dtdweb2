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
    state: { pageNumber },
    dispatch,
  } = useContext(UIStoreContext);

  const pageNumberNames = porp.pageNumber.split(',');

  useEffect(() => {
    setPageNumberState(dispatch, {
      numberCount: pageNumberNames.length,
    });
  }, []);

  return (
    <>
      {pageNumberNames && pageNumber.length != 0 ? (
        <div className={styles.container}>
          <div className={styles.pageNumber_box}>
            <button
              className={
                pageNumber[0]
                  ? `${styles.pageNumber_chevron} ${styles.pageNumber_chevron_unclicked}`
                  : `${styles.pageNumber_chevron} ${styles.pageNumber_hover}`
              }
              onClick={
                pageNumber[0]
                  ? () => {}
                  : () => clickPageChevron(dispatch, { clickState: -1 })
              }
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            {pageNumberNames.map((pageNumberName, pageNumberIndex) => (
              <button
                key={pageNumberName}
                className={
                  pageNumber[pageNumberIndex]
                    ? `${styles.pageNumber_number} ${styles.pageNumber_number_selected}`
                    : `${styles.pageNumber_number} ${styles.pageNumber_hover}`
                }
                onClick={() => {
                  clickPageNumber(dispatch, {
                    clickNumber: pageNumberIndex,
                  });
                }}
              >
                {pageNumberName}
              </button>
            ))}
            <button
              className={
                pageNumber[pageNumber.length - 1]
                  ? `${styles.pageNumber_chevron} ${styles.pageNumber_chevron_unclicked}`
                  : `${styles.pageNumber_chevron} ${styles.pageNumber_hover}`
              }
              onClick={
                pageNumber[pageNumber.length - 1]
                  ? () => {}
                  : () => clickPageChevron(dispatch, { clickState: 1 })
              }
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.container}></div>
      )}
    </>
  );
};

export default PageNumber;
