import React from 'react';
import styles from '@/pages/content/index.less';
import ContentHeader from '@/pages/content/header/index';
import ContentReport from '@/pages/content/report/index';
const Content = () => {
  return (
    <div className={styles.content}>
      <ContentHeader />
      <ContentReport />
    </div>
  );
};

export default Content;
