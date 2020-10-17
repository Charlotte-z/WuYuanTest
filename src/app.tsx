import { history } from 'umi';
import React from 'react';

/**
 * @author 林间有风Lin
 * @version 1.0
 * @description 双向数据绑定算法
 */
React.rModel = (state, point) => {
  let once = false;

  if (!once) {
    // 性能优化,每次组件加载完毕,只会进行一次数据加载
    const all = document.getElementsByTagName('*'); // 获取所有元素
    const cpState = { ...point.state }; // 复制一个监测对象
    let finalStr = null; // 避免null

    Array.from(all).forEach(item => {
      // 拿到每个元素
      let stateStr = item.getAttribute('r-model'); // 拿到r-model属性
      if (stateStr) finalStr = stateStr;
      if (item instanceof HTMLInputElement && finalStr) {
        // 如果是input表单，则设置事件
        item.onkeyup = e => {
          cpState[finalStr] = e.target.value; // 触发监测对象
        };
      }

      if (stateStr) {
        const o = point.state;
        let temp = null;
        Object.defineProperty(cpState, stateStr, {
          get() {
            return 123444; // 赋予初始值
          },
          set: value => {
            if (temp === value) return; // 避免死循环
            temp = value;
            point.state.data = temp;
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
