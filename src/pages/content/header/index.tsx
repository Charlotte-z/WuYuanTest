import React from 'react';
import styles from '@/pages/content/header/index.less';
import ContentNav from './contentNav';
import ContentMenu from './contentMenu';
import ContentMoude from './contentMoude';
const ContentHeader = () => {
  return (
    <div className={styles.contentHeader}>
      <ContentNav />
      <div className={styles.tabLine}></div>
      <ContentMenu />
      <div className={styles.tabLine}></div>
      <ContentMoude />
    </div>
  );
};

export default ContentHeader;
