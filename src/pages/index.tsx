/**
 * @author 林间有风Lin
 * @date 2020/10/3
 * @modify
 * @modifyDesc
 */

import { Button, Input } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import styles from './nav.less';
import { connect } from 'umi';
import { getStyle } from '@/utils/common';
import { NavBg } from './NavBg';

const { Component } = React;

class APP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: [],
    };
  }

  /**
   * @author 林间有风Lin
   * @version 1.0
   * @description 绑定事件
   */
  componentDidMount = () => {};

  /**
   * @author 林间有风Lin
   * @version 1.0
   * @description 中文转换成URIEncoding
   * @param str
   */
  isChinese = str => {
    let ret = true;
    for (let i = 0; i < str.length; i++) {
      ret = ret && str.charCodeAt(i) >= 10000;
    }
    return ret;
  };

  /**
   * @author 林间有风Lin
   * @version 1.0
   * @description 搜索框功能
   * @param str
   */
  searchFormInput = val => {
    const value = val.target.value;

    const term = this.isChinese(value) ? window.encodeURI(value) : value; // 查询字段前置操作

    const { dispatch } = this.props;

    dispatch({
      type: 'SearchListModel/getSearchList',
      payload: { term },
    });
  };

  render() {
    // const { tag } = this.state
    const { tag } = this.props.SearchListModel.list;

    return (
      // nav
      <div className={`${styles.nav} nv`}>
        <NavBg />
        <div className={styles.navTabline}>
          <div className={styles.navWrap}>
            <ul className={styles.navLink}>
              <li>
                <a href="">
                  <i className={styles.iconfont}>&#xe62d;</i>主站
                </a>
              </li>
              <li>
                <a href="">番剧</a>
              </li>
              <li>
                <a href="">游戏中心</a>
              </li>
              <li>
                <a href="">直播</a>
              </li>
              <li>
                <a href="">会员购</a>
              </li>
              <li>
                <a href="">漫画</a>
              </li>
              <li>
                <a href="">赛事</a>
              </li>
              <li>
                <a href="">S10</a>
              </li>
              <li>
                <a href="">
                  <i className={styles.iconfont}>&#xe620;</i>下载APP
                </a>
              </li>
            </ul>
            {/* 搜索框 */}
            <div className={styles.searchForm}>
              <Input
                onChange={this.searchInput}
                disableUnderline={true}
                placeholder="awdwadwa"
                className={styles.searchFormInput}
              />
              <button>
                <i className={styles.iconfont}>&#xe616;</i>
              </button>
            </div>
            {/* 用户登陆注册 */}
            <div className={styles.navUser}>
              <div className={styles.userImg}>
                <a href="">
                  <img src={require('../../public/img/默认头像.png')} alt="" />
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
          </div>
        </div>
      </div>
    );
  }
}

export default connect(({ SearchListModel }) => {
  return { SearchListModel };
})(APP);
