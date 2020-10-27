import React from 'react';
import styles from '@/pages/content/contentHeader/contentNav.less';
const ContentNav = () => {
  return (
    <ul className={styles.contentNav}>
      <li>
        <a href="" className={styles.contentIndex}>
          <i className="iconfont">&#xe70a;</i>
          <p>首页</p>
        </a>
      </li>
      <li>
        <a href="">
          <img
            src="https://i0.hdslb.com/bfs/face/948d62ca6f8ecc30fbb7c29344597378001551d5.jpg@45w_45h_1c_100q.webp"
            alt=""
          />
          <p>动态</p>
        </a>
      </li>
      <li>
        <a href="" className={styles.contentRanking}>
          <i className="iconfont">&#xe613;</i>
          <p>排行榜</p>
        </a>
      </li>
      <li>
        <a href="" className={styles.contentChannel}>
          <i className="iconfont">&#xe623;</i>
          <p>频道</p>
        </a>
      </li>
    </ul>
  );
};

export default ContentNav;
