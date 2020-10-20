import React from 'react';
import styles from '@/pages/nav/nav.less';
import { connect } from 'umi';
import { Input } from '@material-ui/core';

const { Component } = React;

class SearchForm extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      tag: [],
    };
  }
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
  stratSearch = val => {
    const value = val.target.value;
    if (value) {
      let searchistory = new Array(localStorage.getItem('searchistory'));
      new Array(value);
      localStorage.setItem('searchistory', JSON.stringify(value));
      console.log(searchistory);
    }
  };
  render() {
    const { tag } = this.props.SearchListModel.list;
    return (
      <div className={styles.searchForm}>
        <div className={styles.searchWrap}>
          <Input
            r-model="data"
            // value={this.state.data}
            onChange={this.searchFormInput}
            onBlur={this.stratSearch}
            disableUnderline={true}
            placeholder="awdwadwa"
            className={styles.searchFormInput}
          />
          <div className={styles.historyForm}>
            {tag?.length > 0
              ? tag.map((item: { value: {} | null | undefined }) => (
                  <p key={item.value} className={styles.historyItem}>
                    {item.value}
                  </p>
                ))
              : null}
          </div>
        </div>
        <button onClick={this.stratSearch}>
          <i className={styles.iconfont}>&#xe616;</i>
        </button>
      </div>
    );
  }
}

export default connect(({ SearchListModel }) => {
  return { SearchListModel };
})(SearchForm);
