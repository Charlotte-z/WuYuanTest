import { history } from 'umi';
import React from 'react';
import ReactDOM from 'react-dom';

/**
 * @author 林间有风Lin
 * @version 1.0
 * @description 双向数据绑定算法
 */
React.rModel = (state, point) => {
  let once = false;
  console.log(ReactDOM.findDOMNode(point));

  if (!once) {
    // 性能优化,每次组件加载完毕,只会进行一次数据加载，尽管如此，性能依旧不够好，正在积极寻找办法，运行时始终会消耗很大性能
    const minTree = ReactDOM.findDOMNode(point); // 最小查找树
    const all = minTree?.getElementsByTagName('*') ?? []; // 获取所有元素
    const cpState = { ...point.state }; // 复制一个监测对象
    let finalStr: null = null; // 避免null

    Array.from(all).forEach((item, index) => {
      console.log(index);

      // 拿到每个元素
      let stateStr = item.getAttribute('r-model'); // 拿到r-model属性
      if (stateStr) finalStr = stateStr;

      if (item instanceof HTMLInputElement && finalStr) {
        // 为了监视到最精确的位置，必须这么做
        // 如果是input表单，则设置事件
        item.finalStr = finalStr; // 缓存一个属性，否则变量finalStr只对一个值生效
        item.onkeyup = e => {
          cpState[item.finalStr] = e.target.value; // 触发监测对象
        };
      }

      if (stateStr) {
        const o = point.state;
        let temp = null;
        Object.defineProperty(cpState, stateStr, {
          set: value => {
            if (temp === value) return; // 避免死循环
            temp = value;
            point.state[`${stateStr}`] = temp;
            point.forceUpdate();
          },
        });
      }
    });
    once = true;
  }
};

// 阻塞渲染器
// develop分支
const render = oldRender => oldRender();
export { render };
