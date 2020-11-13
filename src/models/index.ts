import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
import {Send} from '@/services/sendReq'
import { message } from 'antd'

const l = window.localStorage.getItem('listData')
const lData = l ? JSON.parse(l) : []


const TableListModel = {
    namespace:'IndexModel',
    state:{
        listData: lData,
        columns: [
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
            }]
    },
    reducers:{ // 更新组件的state
       add(state, action: any){    
        const item = action.payload?.item ?? ''

        if(item === '') {
            message.warning('没有数据添加哦！ by author @林间有风Lin')
            return {...state}
        }

        let data = JSON.parse(window.localStorage.getItem('listData') ?? "[]") // 上面不可复用，会导致state报错

        const key = data?.[data.length - 1]?.key
        
        const obj = {
            key: key ? key + 1 : 1,
            name:item
        }

        data.push(obj)
        window.localStorage.setItem('listData', JSON.stringify(data))
        return {
            ...state,
            listData:data
          }
       },
       delete(state: any, action: any){
        const listData = action.payload.listData
        window.localStorage.setItem('listData', JSON.stringify(listData ?? []))
        return{
            ...state,
            listData
        }
       }
    },

    effects:{
        
    }
}

export default TableListModel



