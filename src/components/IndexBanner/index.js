import React, { useEffect, useContext } from 'react';
import styles from './styles.module.scss';

/* react-bootstrap 輪播 */
import Carousel from 'react-bootstrap/Carousel';

/* store */
import { getBanner } from '../../store/actions';
import { StoreContext } from '../../store/reducer';

const IndexBanner = () => {
  const {
    state: {
      banner,
      requestdata: { loading },
    },
    dispatch,
  } = useContext(StoreContext);

  useEffect(() => {
    getBanner(dispatch);
  }, []);

  return (
    <>
      {loading ? (
        <div className={styles.container}></div>
      ) : (
        <div>
          <Carousel indicators={false} controls={false}>
            {banner.map((bannerImg) => (
              <Carousel.Item interval={5000} key={bannerImg.id}>
                <a href={bannerImg.link === null ? `/` : `${bannerImg.link}`}>
                  <img
                    className={`d-block w-100 ${styles.carousel_img__rwdHeight}`}
                    src={bannerImg.bannerUrl}
                    alt="First slide"
                  />
                </a>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      )}
    </>
  );
};

export default IndexBanner;
