import React from 'react';
import styles from '@/pages/content/index.less';
import ContentNav from '@/pages/content/contentHeader/contentNav';
import ContentMenu from '@/pages/content/contentHeader/contentMenu';
import ContentMoude from '@/pages/content/contentHeader/contentMoude';
const Content = () => {
  return (
    <div className={styles.content}>
      <ContentNav />
      <div className={styles.tabLine}></div>
      <ContentMenu />
      <div className={styles.tabLine}></div>
      <ContentMoude />
    </div>
  );
};

export default Content;
