import React, { useEffect } from 'react'
import { connect } from 'umi'


const map = () => {
    return {}
}

const Public = (props) => {
    
    useEffect(() => {
        console.log('awd');
        props.dispatch({
            type:'awd/add'
        })
    })
    return (
        <h3>Public</h3>
    )
};

export default connect(map)(Public)