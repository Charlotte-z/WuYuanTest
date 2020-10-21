import React from 'react';
import styles from '@/pages/nav/nav.less';
import NavItems from '@/pages/nav/navLink/navItems';
import NavSearchForm from '@/pages/nav/navLink/navSearchForm';
import NavUser from '@/pages/nav/navLink/navUser';

const NavLink = () => {
  return (
    <div className={styles.navTabline}>
      <div className={styles.navWrap}>
        <NavItems />
        <NavSearchForm />
        <NavUser />
      </div>
    </div>
  );
};
export default NavLink;
