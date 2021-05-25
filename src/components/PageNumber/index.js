import React, { useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as QueryString from 'query-string';
import styles from './styles.module.scss';

import { setPageNumberState, clickPageNumber } from '../../uiStore/actions';
import { UIStoreContext } from '../../uiStore/reducer';

/*icon*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const PageNumber = (porp) => {
  const location = useLocation();
  const { page } = QueryString.parse(location.search);
  const {
    state: { pageNumberState },
    dispatch,
  } = useContext(UIStoreContext);

  useEffect(() => {
    setPageNumberState(dispatch, {
      pageCount: Number(porp.pageCount),
    });
    clickPageNumber(dispatch, {
      clickNumber: page == undefined ? 1 : Number(page),
    });
  }, []);

  const pageNumberArr = [];
  for (var i = 1; i <= porp.pageCount; i++) {
    pageNumberArr.push(i);
  }

  return (
    <div className={styles.container}>
      <div className={styles.pageNumber_box}>
        <Link
          to={
            page == undefined || Number(page) - 1 == 1
              ? `/${porp.pageStyle}`
              : `/${porp.pageStyle}?page=${Number(page) - 1}`
          }
          className={
            pageNumberState[0]
              ? `${styles.pageNumber_chevron} ${styles.pageNumber_chevron_unclicked}`
              : `${styles.pageNumber_chevron} ${styles.pageNumber_hover}`
          }
          onClick={
            page == undefined
              ? () => {}
              : () => {
                  clickPageNumber(dispatch, {
                    clickNumber: page == Number(page) - 1,
                  });
                }
          }
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </Link>
        {pageNumberArr.map((pageNumber) => (
          <Link
            to={
              pageNumber == 1
                ? `/${porp.pageStyle}`
                : `/${porp.pageStyle}?page=${pageNumber}`
            }
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
          </Link>
        ))}
        <Link
          to={
            page == undefined
              ? `/${porp.pageStyle}?page=2`
              : Number(page) == pageNumberState.length
              ? `/${porp.pageStyle}?page=${page}`
              : `/${porp.pageStyle}?page=${Number(page) + 1}`
          }
          className={
            pageNumberState[pageNumberState.length - 1]
              ? `${styles.pageNumber_chevron} ${styles.pageNumber_chevron_unclicked}`
              : `${styles.pageNumber_chevron} ${styles.pageNumber_hover}`
          }
          onClick={
            page == pageNumberState.length
              ? () => {}
              : () => {
                  clickPageNumber(dispatch, {
                    clickNumber: page == undefined ? 2 : Number(page) + 1,
                  });
                }
          }
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </Link>
      </div>
    </div>
  );
};

export default PageNumber;
