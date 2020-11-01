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
import Content from '@/pages/content/index';
import Suspense from '@/utils/asyncComponent';
import { req } from '@/utils/request';

const config = {
  url: 'http://localhost:8000/api/users',
  'data-name': 'res',
};

const APP = props => {
  return (
    // nav
    <>
      <Suspense delay={1300} middle>
        <div
          onClick={() => {
            test();
          }}
          className={`${styles.nav} nv`}
        >
          <NavBg />
          <NavLink />
        </div>
        <Content />
      </Suspense>
    </>
  );
};

export default APP;
