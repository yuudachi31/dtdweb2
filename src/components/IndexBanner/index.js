import React, { useEffect, useContext } from 'react';
import styles from './styles.module.scss';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

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
                <Link to="/">
                  <img
                    className={`d-block w-100 ${styles.carousel_img__rwdHeight}`}
                    src={bannerImg.bannerUrl}
                    alt="First slide"
                  />
                </Link>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      )}
    </>
  );
};

export default IndexBanner;
