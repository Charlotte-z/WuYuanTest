import React, { useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react'
import styles from '../style/Table.less'

import { connect } from 'umi'
import { Table, Input } from 'antd'



const Tables = (props: { IndexModel?: object, refInstance: object }) => {
    let selectRef = useRef([])
    const { refInstance } = props
    const { listData, columns } = props.IndexModel
    console.log(listData);
    
    useImperativeHandle(refInstance, () => (selectRef))
    
    const onChange = useCallback(selectedRowKeys => {
        console.log(selectedRowKeys);
        selectRef.current = selectedRowKeys
    }, [])

    const rowSelection = useMemo(() => ({selectRef, onChange}), [])
    
    return (
        <div className={styles.modifyInnerTableStyle}>
            {listData?.length > 0 && <Table
                rowKey='key'
                dataSource={listData}
                columns={columns}
                size='middle'
                rowSelection={rowSelection}
            />}
        </div>
    )
}
const Tc = connect(state => state, null)(Tables)
export default React.forwardRef((props, ref) => <Tc refInstance={ref}/>)