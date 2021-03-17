import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
// import styles from './styles.module.scss';
import Carousel from 'react-bootstrap/Carousel';
import banner_1 from '../../assets/images/banners/banner_1.jpg';
import banner_2 from '../../assets/images/banners/banner_2.jpg';
import banner_4 from '../../assets/images/banners/banner_4.jpg';

const Home = () => {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>數位科技設計學系-國立臺北教育大學</title>
        <meta name="description" content="數位科技設計學系的首頁" />
      </Helmet>
      <Header />
      <div>
        <Carousel>
          <Carousel.Item interval={5000}>
            <img className="d-block w-100" src={banner_1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img className="d-block w-100" src={banner_2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img className="d-block w-100" src={banner_4} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Home;
