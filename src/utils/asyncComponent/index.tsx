import React, { useCallback, useEffect, useState } from 'react'
import Animation from './animation'

const Suspense = (props: { delay: Number; children: any; middle:boolean}) => {

    const [visible, setVisible] = useState(false)

    const check = useCallback(() => {
        const { delay } = props
        if(!delay)
            throw new Error('You must be given the field "delay" for Component Suspense')

        if(typeof delay !== 'number')
            throw new Error('The field "delay" of type must be number')
    }, [props.delay])

    useEffect(() => {
        check()
        setTimeout(() => {
            setVisible(true)
        }, props.delay)
    }, [props.delay])

    return(
        <>
            {!visible ? <Animation middle={props.middle}/> : props.children}
        </>
    )
}

export default Suspense