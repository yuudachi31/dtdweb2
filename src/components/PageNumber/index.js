import React, { useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as QueryString from 'query-string';
// 設計
import styles from './styles.module.scss';
// icon匯入
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
// uiStore
import { setPageNumberState, clickPageNumber } from '../../uiStore/actions';
import { UIStoreContext } from '../../uiStore/reducer';

const PageNumber = (porp) => {
  const location = useLocation();
  const { page } = QueryString.parse(location.search);
  const {
    uiState: { pageNumberState },
    uiDispatch,
  } = useContext(UIStoreContext);

  useEffect(() => {
    setPageNumberState(uiDispatch, {
      pageCount: Number(porp.pageCount),
    });
  }, []);

  useEffect(() => {
    clickPageNumber(uiDispatch, {
      clickNumber: page == undefined ? 1 : Number(page),
    });
  }, [page]);

  const pageNumberArr = [];
  for (var i = 1; i <= porp.pageCount; i++) {
    pageNumberArr.push(i);
  }

  return (
    <div className={styles.container}>
      <div className={styles.pageNumber_pageNumberBlock}>
        <Link
          to={
            page == undefined || Number(page) - 1 == 1
              ? `/${porp.pageStyle}`
              : `/${porp.pageStyle}?page=${Number(page) - 1}`
          }
          className={
            pageNumberState[0]
              ? `${styles.pageNumberBlock_chevron} ${styles.pageNumberBlock_chevron__disabled}`
              : `${styles.pageNumberBlock_chevron} ${styles.pageNumberBlock_btn__hover}`
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
                ? `${styles.pageNumberBlock_number} ${styles.pageNumberBlock_number__selected}`
                : `${styles.pageNumberBlock_number} ${styles.pageNumberBlock_btn__hover}`
            }
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
              ? `${styles.pageNumberBlock_chevron} ${styles.pageNumberBlock_chevron__disabled}`
              : `${styles.pageNumberBlock_chevron} ${styles.pageNumberBlock_btn__hover}`
          }
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </Link>
      </div>
    </div>
  );
};

export default PageNumber;
