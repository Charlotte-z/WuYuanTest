/**
 * @author 林间有风Lin
 * @date 2020/11/11
 * @modify
 * @modifyDesc
 */
import React from 'react';
import Suspense from '@/utils/asyncComponent';
import ListItem from '@/pages/listItem/index'

const APP = (props: object) => {
  return (
    <>
      <Suspense delay={1200} middle>
        <ListItem/>
      </Suspense>
    </>
  );
};

export default APP;
