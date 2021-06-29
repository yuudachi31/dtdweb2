import styles from './styles.module.scss';

import banner_1 from '../../assets/images/banners/banner_1.jpg';
import banner_2 from '../../assets/images/banners/banner_2.jpg';
import banner_4 from '../../assets/images/banners/banner_4.jpg';
const Banner = (prop) => {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <img
          src={
            prop.bannerNumber == 1
              ? banner_1
              : prop.bannerNumber == 2
              ? banner_2
              : banner_4
          }
          className={styles.banner_img}
        />
      </div>
    </div>
  );
};

export default Banner;
