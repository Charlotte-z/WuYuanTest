import React from 'react';
import styles from './index.less';
import ReportCarousel from './reportCarousel';
import ReportRecommend from './reportRecommend';

const ContentReport = () => {
  return (
    <div className={styles.report}>
      <ReportCarousel />
      <ReportRecommend />
    </div>
  );
};

export default ContentReport;
