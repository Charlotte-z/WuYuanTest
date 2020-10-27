import React, { useCallback, useEffect, useState } from 'react'
import { request } from 'umi'
import Animation from './animation'

const Suspense = (props: { delay: Number; children: any; middle:boolean; config?:object}) => {

    const config = props?.config

    const [visible, setVisible] = useState(false)

    const check = useCallback(() => {
        const { delay } = props
        if(!delay)
            throw new Error('You must be given the field "delay" for Component Suspense')

        if(typeof delay !== 'number')
            throw new Error('The field "delay" of type must be number')
    }, [props.delay])
    const [data, setData] = useState({})

    const getChild = (props) => {
        const children = props?.children
        if(children && typeof children !== 'string'){
            return getChild(children.props)
        }
        return children
    }

    const getElement = () => {
        const children = props.children
        if(!config) return children
        const count = React.Children.count(children)

        if(count === 1){
            console.log(getChild(children.props))
        }
    }

    useEffect(() => {
        check()
        const url = config?.url
        if(url){
            request(url).then(res => {
                setData(res)
                setVisible(true)
            })
        }else{
            setTimeout(() => {
                setVisible(true)
            }, props.delay) 
        } 
    }, [props.delay])

    return(
        <>
            {
            !visible 
            ? <Animation middle={props.middle}/> 
            : getElement()
            }
        </>
    )
}

export default Suspense