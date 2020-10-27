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
import { req } from '@/utils/request';



const config = {
  'url':'http://localhost:8000/api/users',
  'data-name':'res'
}

const test = () => {
  req('/api/users/create', {method:'POST'}).then(res => {
    console.log();
    
  })
}

const APP = () => (
  // nav
  <>
    <Suspense delay={1300} middle>
      <div onClick={() => {test()}} className={`${styles.nav} nv`}>
        <NavBg/>
        <NavLink />
      </div>
    </Suspense>
    
  </>
)

export default APP;
