import { Button } from 'antd'
import styles from '../style/item.less'
import React, { useState } from 'react'
import { connect } from 'umi'

const Control = (props: { visible: boolean, setVisible: Function, add: any, del: any }) => {
    const { visible, setVisible, add, del, IndexModel:{listData} } = props
    
    return (
        <div className={`${styles.btnWrapper} mb-8`}>
            <Button type='primary' onClick={add}>新增</Button>
            <Button className={`${styles.del} ml-8`} onClick={del}>删除</Button>
            <Button type={visible ? 'text' : 'primary'}  className='ml-8' onClick={() => setVisible(!visible)}>隐藏/显示</Button>
        </div>
    )
}

export default connect(state => state, null)(Control)