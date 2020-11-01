import React from 'react';
import styles from '@/pages/nav/nav.less';

const navUser = props => {
  return (
    <div className={styles.navUser}>
      <div className={styles.searchMIN}>
        <a href="">
          <i className="iconfont">&#xe616;</i>
        </a>
      </div>
      <div className={styles.userImg}>
        <a href="">
          <img src={require('@public/img/默认头像.png')} alt="" />
        </a>
      </div>
      <div>
        <a href="">登陆</a>
      </div>
      <div>
        <a href="">注册</a>
      </div>
      <div>
        <button>投稿</button>
      </div>
    </div>
  );
};

export default navUser;
