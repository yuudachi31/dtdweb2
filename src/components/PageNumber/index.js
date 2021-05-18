import styles from './styles.module.scss';

/*icon*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const PageNumber = () => {
  return (
    <div className={styles.container}>
      <div className={styles.pageNumber_box}>
        <button
          className={`${styles.pageNumber_chevron} ${styles.pageNumber_chevron_unclicked}`}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          className={`${styles.pageNumber_number} ${styles.pageNumber_number_selected}`}
        >
          1
        </button>
        <button
          className={`${styles.pageNumber_number} ${styles.pageNumber_hover}`}
        >
          2
        </button>
        <button
          className={`${styles.pageNumber_number} ${styles.pageNumber_hover}`}
        >
          3
        </button>
        <button
          className={`${styles.pageNumber_chevron} ${styles.pageNumber_hover}`}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default PageNumber;
