import React, { useCallback, useImperativeHandle, useRef, useState } from 'react'
import { Input } from 'antd'

const InputForm = (props: {setData: any, clear: boolean}, ref: any) => {

    const inputName = useCallback(e => {
        const val = e.target.value
        props.setData(val)
        setVal(val)
    }, [])

    const [val, setVal] = useState('')

    useImperativeHandle(ref, () => {
        return {
            clear:() => setVal('')
        }
    })

    return (
        <Input placeholder={'请输入名字'} value={val} onChange={inputName} />
    )
}

export default React.forwardRef(InputForm)