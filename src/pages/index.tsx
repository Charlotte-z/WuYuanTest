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
   * @description 计算左边高度
   * @param ele
   */
  computedLeft = eles => {
    let currentWidth = document.documentElement.clientWidth;
    if (eles.length !== 0)
      Array.from(eles).forEach(ele => {
        ele!.style!.marginLeft = `${currentWidth / 10 - 300}px`;
      });
  };

  /**
   * @author 林间有风Lin
   * @version 1.0
   * @description 计算背景移动
   * @param ele
   */
  computedBgMove = ele => {
    let currentWidth = document.documentElement.clientWidth;
    ele!.style!.backgroundPosition = `${currentWidth / 7 - 400}px 0`;
  };

  /**
   * @author 林间有风Lin
   * @version 1.0
   * @description 批处理
   * @param ele
   */
  queryBatchArr = arr => {
    if (arr.length !== 0) {
      return arr.map(item => {
        return document.querySelector(item);
      });
    }
    return [];
  };

  componentDidMount = () => {
    const eles = this.queryBatchArr(['.gl', '.lf', '.hl', '.fr', '.gs']);
    const nv = document.querySelector('.nv');
    this.computedLeft(eles);
    this.computedBgMove(nv);
    window.onresize = () => {
      this.computedLeft(eles);
      this.computedBgMove(nv);
    };
  };

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
        <div className={styles.navBg}>
          <img
            className={`${styles.girl} gl`}
            src="https://i0.hdslb.com/bfs/vc/082e39ef757826401ef82da818310d42e05bc2de.png"
            alt=""
          />
          <img
            className={`${styles.leaf} lf`}
            src="https://i0.hdslb.com/bfs/vc/37d9a93baa55870506a6f3e6308e7a0c386b97c7.png"
          ></img>
          <img
            className={`${styles.hill} hl`}
            src="https://i0.hdslb.com/bfs/vc/dbd5c17c4315714de9e4ee119694d2e9efaf9639.png"
          ></img>
          <img
            className={`${styles.flower} fr`}
            src="https://i0.hdslb.com/bfs/vc/88537437a7916ecde847fa46652b44fbd3cbbb06.png"
          ></img>
          <img
            className={`${styles.grass} gs`}
            src="https://i0.hdslb.com/bfs/vc/cd9be0a2716adbae85fd899259381c4b2c2893c7.png"
          ></img>
        </div>
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
    );
  }
}

export default connect(({ SearchListModel }) => {
  return { SearchListModel };
})(APP);
