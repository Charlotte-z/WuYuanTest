import React, { useEffect, useState } from 'react';
import styles from '@/pages/nav/nav.less';
import { req } from '@/utils/request/index';

const NavItems = () => {
  const [obj, setObj] = useState<any>();

  useEffect(() => {
    req('/nav/header').then(res => {
      setObj(res.nav.navLink);
    });
  }, []);

  return (
    <ul className={styles.navLink}>
      {obj &&
        obj.map(item => (
          <li key={item.id}>
            <a href={item.link}>
              <i className="iconfont">&#xe62d;</i>
              {item.name}
            </a>
          </li>
        ))}
      {/* <li>
        <a href="">
          <i className="iconfont">&#xe62d;</i>主站
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
          <i className="iconfont">&#xe620;</i>下载APP
        </a>
      </li> */}
    </ul>
  );
};
export default NavItems;
