/**
 * @author 林间有风Lin
 * @date 2020/10/3
 * @modify
 * @modifyDesc
 */
import React, { useEffect } from 'react';
import styles from './nav/nav.less';
import { NavBg } from './nav';
import NavLink from '@/pages/nav/navLink/navHeadr';

const APP = () => {
  /**
   * @author 林间有风Lin
   * @version 1.0
   * @description 双向数据绑定实现
   */
  useEffect(() => {});
  return (
    // nav
    <>
      <div className={`${styles.nav} nv`}>
        <NavBg />
        <NavLink />
      </div>
    </>
  );
};

export default APP;
