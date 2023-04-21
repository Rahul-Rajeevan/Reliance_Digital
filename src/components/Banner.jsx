import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import styles from './Home.module.css';
import ProductSlide from './ProductSlide';

const Banner = ({ list }) => {
  return (
    <div className={styles.banner}>
      <Slide
        autoplay={true}
        arrows={true}
        duration={1000}
        pauseOnHover={true}
      >
        {list.map((image, index) => (
          <div className={styles.eachSlide} key={index}>
            <div style={{ backgroundImage: `url(${image})` }} />
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Banner;
