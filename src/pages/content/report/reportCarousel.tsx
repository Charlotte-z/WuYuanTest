import React from 'react';
import styles from './reportCarousel.less';

import { Carousel } from 'antd';

const ContentNav = () => {
  return (
    <div className={styles.carousel}>
      <div className={styles.tabline}></div>
      <Carousel autoplay>
        <div>
          <img
            src="https://i0.hdslb.com/bfs/sycp/creative_img/202009/681adeac8f03be7db87712409f1d3571.jpg@880w_388h_1c_95q"
            alt=""
            className={styles.carouselItem}
          />
        </div>
        <div>
          <img
            src="https://i0.hdslb.com/bfs/archive/f3b55c8391052985cf465a67ff7e7b797fb2ac1b.png@880w_388h_1c_95q"
            alt=""
            className={styles.carouselItem}
          />
        </div>
        <div>
          <img
            src="https://i0.hdslb.com/bfs/sycp/creative_img/202010/d04d55f4a077ab7f8267ff0572b395c8.jpg@880w_388h_1c_95q"
            alt=""
            className={styles.carouselItem}
          />
        </div>
        <div>
          <img
            src="https://i0.hdslb.com/bfs/archive/500422f3b91b88ce3cd4ef5d0c4ef719ed7f57b3.png@880w_388h_1c_95q"
            alt=""
            className={styles.carouselItem}
          />
        </div>
        <div>
          <img
            src="https://i0.hdslb.com/bfs/archive/0ef03f9d0277444f390eb28b9f28e90bfb08176e.png@880w_388h_1c_95q"
            alt=""
            className={styles.carouselItem}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default ContentNav;
