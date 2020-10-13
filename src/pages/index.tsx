/**
 * @author 林间有风Lin
 * @date 2020/10/3
 * @modify
 * @modifyDesc 
 */

import { Button, Input } from '@material-ui/core'
import { Alert } from '@material-ui/lab';
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import styles from './nav.less'
import { connect } from 'umi';



const { Component } = React

class APP extends Component{

    constructor(props){
        super(props)
        this.state = {
          tag: []
        }
    }

    /**
     * @author 林间有风Lin
     * @version 1.0
     * @description 中文转换成URIEncoding 
     * @param str 
     */
    isChinese = str => {
        let ret = true;
        for(let i=0;i<str.length;i++){
          ret = ret && (str.charCodeAt(i) >= 10000);
        }
        return ret;
    }

    /**
     * @author 林间有风Lin
     * @version 1.0
     * @description 搜索框功能
     * @param str 
     */
    searchFormInput = val => {
      const value = val.target.value

      const term = this.isChinese(value) ? window.encodeURI(value) : value // 查询字段前置操作

      const { dispatch } = this.props
      
      dispatch({
        type:'SearchListModel/getSearchList',
        payload:{term}
      })
    }
    

    render(){
      // const { tag } = this.state
      const { tag } = this.props.SearchListModel.list
      
        return(
          // nav
          <Grid container className={styles.nav}>
            <Grid container xs={4} className={styles.navInnerHeight}>
              <a href=""><div className='ml-24'><i className={styles.mainImg}/><span>主站</span></div></a>
              <a href=""><div className='ml-24'>番剧</div></a>
              <a href=""><div className='ml-24'>游戏中心</div></a>
              <a href=""><div className='ml-24'>直播</div></a>
              <a href=""><div className='ml-24'>会员购</div></a>
              <a href=""><div className='ml-24'>漫画</div></a>
              <a href=""><div className='ml-24'>赛事</div></a>
              <a href=""><div className='ml-24'>图片</div></a>
              <a href=""><div className='ml-24'><i className={styles.phoneImg}/>下载APP</div></a>
            </Grid> 
            <Grid container xs={4} className={styles.navInnerHeight}>
              <Grid item xs={6} className={styles.searchFormWrapper}>
                <Input
                  onChange={this.searchFormInput} 
                  disableUnderline={true}
                  className={styles.searchForm} 
                  placeholder='awdwadwa'/>
                  <div className={styles.historyForm}>
                    {
                      tag?.length > 0 ? 
                      tag.map(item => <p key={item.value} className={styles.historyItem}>{item.value}</p>)
                      :null
                    }
                  </div>
              </Grid>
              <Grid item xs>
                <Button style={{background:'rgb(225, 225, 225)', borderRadius:'0px', height:'80%'}}>
                  <i className={styles.searchBtn}/>
                </Button>
              </Grid>
            </Grid>
            <Grid container xs={4} className={styles.navInnerHeight}></Grid>
          </Grid>
        )
    }
}

export default connect(({SearchListModel}) => {
  return {SearchListModel}
})(APP)