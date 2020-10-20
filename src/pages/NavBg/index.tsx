import { getStyle } from '@/utils/common';
import styles from './nav.less';
import girl from '@public/img/girl.png';
import hill from '@public/img/hill.png';
import flower from '@public/img/flower.png';
import grass from '@public/img/grass.png';
import leaf from '@public/img/leaf.png';
import React, { useEffect } from 'react';

export const NavBg = () => {
  /**
   * @author 林间有风Lin
   * @version 1.0
   * @description 计算左边高度
   * @param ele
   */
  const computedLeft = (
    eles: Iterable<unknown> | ArrayLike<unknown>,
    currentWidth: number,
  ) => {
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
  const computedBgMove = (ele: Element | null, currentWidth: number) => {
    ele!.style!.backgroundPosition = `${currentWidth / 7 - 400}px 0`;
  };

  /**
   * @author 林间有风Lin
   * @version 1.0
   * @description 批处理
   * @param ele
   */
  const queryBatchArr = (arr: string[]): any => {
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
  const getOriginBlur = (
    eles: Iterable<unknown> | ArrayLike<unknown>,
  ): Number[] => {
    return Array.from(eles).map(item =>
      Number(getStyle(item).filter.match(/blur\((\d+)px\)/)?.[1]),
    );
  };

  /**
   * @author 林间有风Lin
   * @version 1.0
   * @description 动画效果总集合
   */
  const move = (): void => {
    const eles = queryBatchArr(['.gl', '.lf', '.hl', '.fr', '.gs']);
    const nv = document.querySelector('.nv');
    const originBlur = getOriginBlur(eles);

    let currentWidth = document.documentElement.clientWidth;
    let currentX = 0;
    let lastX = 0;
    computedLeft(eles, currentWidth);
    computedBgMove(nv, currentWidth);

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
      nv!.onmousemove = (e: { clientX: number }) => {
        Array.from(moveElesFront).forEach(item => {
          item.obj!.style.transition = '.1s transform';

          item.obj!.style!.filter = `blur(${item.blur - currentX / 500}px)`;
          item.obj!.style!.transform = `translateX(${currentX / 100}px)`;
        });

        Array.from(moveElesEnd).forEach(item => {
          item.obj!.style.transition = '.1s transform';
          item.obj!.style!.filter = `blur(${currentX / 500}px)`;
          item.obj!.style!.transform = `translateX(${item.blur -
            currentX / 100}px)`;
        });
        currentX = e.clientX;
      };
      nv!.onmouseleave = () => {
        Array.from(eles).forEach(item => {
          item.style.transition = '.5s transform';
          item!.style.transform = `translateX(0)`;
        });
        currentX = 0;
      };
    }

    window.onresize = () => {
      currentWidth = document.documentElement.clientWidth;
      computedLeft(eles, currentWidth);
      computedBgMove(nv, currentWidth);
    };
  };

  useEffect(move, []);

  return (
    <div r-if={'awd'} className={styles.navBg}>
      <img className={`${styles.girl} gl`} src={girl} />
      <img className={`${styles.hill} hl`} src={hill}></img>
      <img className={`${styles.leaf} lf`} src={leaf}></img>
      <img className={`${styles.flower} fr`} src={flower}></img>
      <img className={`${styles.grass} gs`} src={grass}></img>
    </div>
  );
};
