import React, { useEffect } from 'react';
import { ConnectProps, Loading, connect } from 'umi';


// class IndexPage extends React.Component{
//     constructor(props){
//         super(props)
//         console.log(props);
//     }

//     componentDidMount = () => { 
        
//         setTimeout(() => {
//             const { dispatch } = this.props // dispatch是dva的更新方法
//             dispatch({ 
//                 type:'IndexModel/sendReq',
//                 payload:{name:'awd'}
//             })            
//         }, 1000)
//     }

//     render(){
//         const { IndexModel } = this.props
//         return(
//             <div>{IndexModel.name}</div>
//         )
//     }
// }

const IndexPage = (props) => {
    const { dispatch, IndexModel } = props 
    // 是第一次加载组件和组件更新方法的几何体
    useEffect(() => { // React Hooks的新API，组件挂载完毕会马上执行这个代码
        dispatch({
            type:'IndexModel/sendReq',
            payload:{name:'彪哥nmsl'}
        })
    },[])

    return(
        <div>{IndexModel.name}</div>
    )
}


/**
 * models下的全部文件会作为全局数据对不对
 * 怎么拿
 * dva提供connect方法，让你拿dva所有的数据
 */

export default connect(({IndexModel}) => {
    return {IndexModel}
})(IndexPage);

