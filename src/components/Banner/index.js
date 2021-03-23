import styles from './styles.module.scss';

import banner from '../../assets/images/banners/banner_4.jpg';
const Banner = () => {
  return (
    <div className={styles.container}>
      {/* <div className={`${styles.banner} ${styles.banner__image}`}></div> */}
      <div className={styles.banner}>
        <img src={banner} className={styles.banner_img} />
      </div>
    </div>
  );
};

export default Banner;
