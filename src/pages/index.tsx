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
import Suspense from '@/utils/asyncComponent';

const APP = () => (
  // nav
  <>
    <Suspense delay={1300} middle>
      <div className={`${styles.nav} nv`}>
        <NavBg />
        <NavLink />
      </div>
    </Suspense>
  </>
)

export default APP;
