import React, { useCallback, useEffect, useLayoutEffect, useRef } from 'react';
import ReactDOM from 'react-dom'
import {cloneDeep} from 'lodash'

export const RMODEL = (props: { children: React.ReactNode; }) => {
    const r = useRef({})
    // 做性能优化，当children发生改变才主动更改函数
    const analyZeChildren = useCallback(() => {
    const all = r.current!.querySelectorAll('*')

    all.forEach(item => {
        const rModel = item.getAttribute('r-model')
        console.log(item);
        if(rModel){

        }
    })
    

    }, [props.children])
    
    // 运行初期分析r-model传入的值，它会操作DOM
    useLayoutEffect(analyZeChildren, [1])
    
    return (
        <div style={{display:'inline-block'}} ref={r}>
            {props.children}
        </div>
    )
  }