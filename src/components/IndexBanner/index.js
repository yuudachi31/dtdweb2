import styles from './styles.module.scss';
import Carousel from 'react-bootstrap/Carousel';
import bannerUrl from '../../assets/json/banner.json';

const IndexBanner = () => {
  return (
    <div>
      <Carousel indicators={false} controls={false}>
        <Carousel.Item interval={5000}>
          <img
            className={`d-block w-100 ${styles.carousel_img__rwdHeight}`}
            src={bannerUrl.banner_1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className={`d-block w-100 ${styles.carousel_img__rwdHeight}`}
            src={bannerUrl.banner_2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className={`d-block w-100 ${styles.carousel_img__rwdHeight}`}
            src={bannerUrl.banner_4}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default IndexBanner;
