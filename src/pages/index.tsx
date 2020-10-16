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
import girl from '../../public/img/girl.png';
import hill from '../../public/img/hill.png';
import flower from '../../public/img/flower.png';
import grass from '../../public/img/grass.png';
import leaf from '../../public/img/leaf.png';

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
  computedLeft = (eles, currentWidth) => {
    if (eles.length !== 0)
      Array.from(eles).forEach(ele => {
        console.log(currentWidth / 10 - 300);

        ele!.style!.marginLeft = `${currentWidth / 10 - 300}px`;
      });
  };

  /**
   * @author 林间有风Lin
   * @version 1.0
   * @description 计算背景移动
   * @param ele
   */
  computedBgMove = (ele, currentWidth) => {
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

  /**
   * @author 林间有风Lin
   * @version 1.0
   * @description 提取filter变量
   * @param eles
   */
  getOriginBlur = eles => {
    return Array.from(eles).map(item =>
      Number(getStyle(item).filter.match(/blur\((\d+)px\)/)?.[1]),
    );
  };

  /**
   * @author 林间有风Lin
   * @version 1.0
   * @description 绑定事件
   */
  componentDidMount = () => {
    const eles = this.queryBatchArr(['.gl', '.lf', '.hl', '.fr', '.gs']);
    const nv = document.querySelector('.nv');
    const originBlur = this.getOriginBlur(eles);

    let currentWidth = document.documentElement.clientWidth;
    let currentX = 0;
    let lastX = 0;
    this.computedLeft(eles, currentWidth);
    this.computedBgMove(nv, currentWidth);

    if (eles?.length > 0) {
      const moveElesFront = [
        { obj: eles[1], blur: originBlur[1] },
        { obj: eles[3], blur: originBlur[3] },
        { obj: eles[4], blur: originBlur[4] },
      ];
      const moveElesEnd = [
        { obj: eles[0], blur: originBlur[0] },
        { obj: eles[2], blur: originBlur[2] },
      ];
      nv!.onmousemove = e => {
        currentX = e.clientX;
        Array.from(moveElesFront).forEach(item => {
          item.obj!.style.transition = '0s';
          item.obj!.style!.filter = `blur(${4 - currentX / 500}px)`;
          item.obj!.style!.transform = `translateX(${currentX / 100}px)`;
        });

        Array.from(moveElesEnd).forEach(item => {
          item.obj!.style.transition = '0s';
          item.obj!.style!.filter = `blur(${currentX / 500}px)`;
          item.obj!.style!.transform = `translateX(${4 - currentX / 100}px)`;
        });
      };
      nv!.onmouseleave = () => {
        Array.from(eles).forEach(item => {
          item.style.transition = '1s';
          item!.style.transform = `translateX(0)`;
        });
      };
    }

    window.onresize = () => {
      currentWidth = document.documentElement.clientWidth;
      this.computedLeft(eles, currentWidth);
      this.computedBgMove(nv, currentWidth);
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
          <img className={`${styles.girl} gl`} src={girl} />
          <img className={`${styles.hill} hl`} src={hill}></img>
          <img className={`${styles.leaf} lf`} src={leaf}></img>
          <img className={`${styles.flower} fr`} src={flower}></img>
          <img className={`${styles.grass} gs`} src={grass}></img>
        </div>
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
