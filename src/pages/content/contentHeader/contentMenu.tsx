import React from 'react';
import { Menu, Dropdown, Button } from 'antd';
import styles from '@/pages/content/contentHeader/contentMenu.less';

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);
const ContentMenu = () => {
  return (
    <ul className={styles.contentMenu}>
      <li>
        <a href="">
          <Dropdown overlay={menu} placement="topLeft" arrow>
            <span>
              动画
              <em>999+</em>
            </span>
          </Dropdown>
        </a>
      </li>
      <li>
        <a href="">
          <span>
            音乐 <em>999+</em>
          </span>
        </a>
      </li>
      <li>
        <a href="">
          <span>
            舞蹈 <em>999+</em>
          </span>
        </a>
      </li>
      <li>
        <a href="">
          <span>
            知识 <em>999+</em>
          </span>
        </a>
      </li>
      <li>
        <a href="">
          <span>
            生活 <em>999+</em>
          </span>
        </a>
      </li>
      <li>
        <a href="">
          <span>
            时尚 <em>999+</em>
          </span>
        </a>
      </li>
      <li>
        <a href="">
          <span>
            娱乐 <em>999+</em>
          </span>
        </a>
      </li>
      <li>
        <a href="">
          <span>
            放映厅 <em>999+</em>
          </span>
        </a>
      </li>
      <li>
        <a href="">
          <span>
            动物圈 <em>999+</em>
          </span>
        </a>
      </li>
      <li>
        <a href="">
          <span>
            单机游戏 <em>999+</em>
          </span>
        </a>
      </li>
      <li>
        <a href="">
          <span>
            动画 <em>999+</em>
          </span>
        </a>
      </li>
      <li>
        <a href="">
          <span>
            音乐 <em>999+</em>
          </span>
        </a>
      </li>
      <li>
        <a href="">
          <span>
            舞蹈 <em>999+</em>
          </span>
        </a>
      </li>
      <li>
        <a href="">
          <span>
            知识 <em>999+</em>
          </span>
        </a>
      </li>
      <li>
        <a href="">
          <span>
            生活 <em>999+</em>
          </span>
        </a>
      </li>
      <li>
        <a href="">
          <span>
            时尚 <em>999+</em>
          </span>
        </a>
      </li>
      <li>
        <a href="">
          <span>
            娱乐 <em>999+</em>
          </span>
        </a>
      </li>
      <li>
        <a href="">
          <span>
            放映厅 <em>999+</em>
          </span>
        </a>
      </li>
      <li>
        <a href="">
          <span>
            动物圈 <em>999+</em>
          </span>
        </a>
      </li>
      <li>
        <a href="">
          <span>
            单机游戏 <em>999+</em>
          </span>
        </a>
      </li>
    </ul>
  );
};

export default ContentMenu;
