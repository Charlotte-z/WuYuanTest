import React from 'react';
import styles from '@/pages/nav/nav.less';

const NavItems = () => {
  return (
    <ul className={styles.navLink}>
      <li>
        <a href="">
          <i className={styles.iconfont}>&#xe62d;</i>主站
        </a>
      </li>
      <li>
        <a href="">番剧</a>
      </li>
      <li>
        <a href="">游戏中心</a>
      </li>
      <li>
        <a href="">直播</a>
      </li>
      <li>
        <a href="">会员购</a>
      </li>
      <li>
        <a href="">漫画</a>
      </li>
      <li>
        <a href="">赛事</a>
      </li>
      <li>
        <a href="">S10</a>
      </li>
      <li>
        <a href="">
          <i className={styles.iconfont}>&#xe620;</i>下载APP
        </a>
      </li>
    </ul>
  );
};
export default NavItems;
