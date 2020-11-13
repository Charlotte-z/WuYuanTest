import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { connect } from 'umi'
import styles from '../style/item.less'
import Table from './Table'
import Control from './Control'
import InputForm from './InputFrom'

// 性能优化，若出现bug则删除
const Ctl = memo(Control)
const Ipf = memo(InputForm)
const Tbl = memo(Table)
const Item = (props: { dispatch: any }) => {
    let d = useRef('')
    let selectsRef = useRef({})
    const [visible, setVisible] = useState(true)
    const ipfRef = useRef({})
    

    /**
     * @author 林间有风Lin
     * @description 新增数据，并且清空输入框
     */
    const add = useCallback(() => {
        const { dispatch } = props
        dispatch({
            type:'IndexModel/add',
            payload:{item: d.current}
        })
        ipfRef.current.clear() // ？？？ts报warning，暂不管他
    }, [])
    

    /**
     * @author 林间有风Lin
     * @description 删除方法
     * @version 1.0/为达到最好性能，把遍历次数最少的放前面
     * @version 2.0/删除时出现bug，因为使用delete粗暴删除数组元素导致出现empty占位，展示出问题，改为splice方法
     * @version 3.0/修复一个小bug，因为删除以后发现index和这个i对不上号，导致删除出现严重bug，采用计数器修复
     * @version 4.0/计数器效率太低下，使用取巧办法，第一次循环以后，直接每次item-1
     * @version 5.0/item-1有bug，经测试发现，每次循环只减一，应该递增减少，item减去索引得以解决，应该属于本测试最难的点了
     * @version 6.0发现antd组件有巨坑，删除时key和selectRowKeys出现不同步情况，设置rowKey，导致现有方法失效，改用key匹配rowKeys完美解决
     */
    const del = useCallback(() => {
        const arr = selectsRef.current.current
        const listData = JSON.parse(JSON.stringify(props.IndexModel.listData))
        console.log(arr, listData);
        
        arr.forEach((item: number, index: number) => {
            // if(index >= 1) item -= index 
            for(let i = 0, len = listData.length; i < len; i += 1){
                const k = listData[i].key
                // console.log(item, k);
                if(item === k){
                    listData.splice(i, 1)
                    return
                }
            }
        })
        
        props.dispatch({
            type:'IndexModel/delete',
            payload:{listData}
        })
    }, [props.IndexModel.listData]) // 注意不要深层数据

    useEffect(() => { 
        d.current = ''         
    })


    const setData = (data: string) => { 
        d.current = data 
    }

    return (
        <div className={styles.content}>
            <Ctl visible={visible} setVisible={setVisible} add={add} del={del}/>
            <Ipf ref={ipfRef} setData={setData}/>
            {visible && <Tbl ref={selectsRef}/>}
        </div>
    )
}

export default connect(state => state, null)(Item)