import React from 'react';
import styles from '@/pages/content/header/contentMoude.less';
const ContentNav = () => {
  return (
    <ul className={styles.contentMoude}>
      <li>
        <a href="">
          <span>
            <i className="iconfont">&#xe786;</i>专题
          </span>
        </a>
      </li>
      <li>
        <a href="">
          <span>
            <i className="iconfont">&#xe64d;</i>活动
          </span>
        </a>
      </li>
      <li>
        <a href="">
          <span>
            <i className="iconfont">&#xe607;</i>小黑屋
          </span>
        </a>
      </li>
      <li>
        <a href="">
          <span>
            <i className="iconfont">&#xe6d9;</i>直播
          </span>
        </a>
      </li>
      <li>
        <a href="">
          <span>
            <i className="iconfont">&#xe602;</i>课堂
          </span>
        </a>
      </li>
      <li>
        <a href="">
          <span>
            <i className="iconfont">&#xe605;</i>音乐PLUS
          </span>
        </a>
      </li>
    </ul>
  );
};

export default ContentNav;
