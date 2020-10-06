import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
import {Send} from '@/services/sendReq'

const IndexModel = {
    namespace:'IndexModel',
    state:{
        name:' 彪哥！',
        age:123
    },
    reducers:{ // 更新组件的state
       update(state, action){        
        return {
            ...state,
            name:action.payload.a
          }
       }
    },
    effects:{
        // call是调用异步函数的，put是调用同步函数
        *sendReq(action, { put, call }){
            const a = yield call(Send, action.payload)
            yield put({
                type:'update',
                payload:{a}
            })
        }
    }
}

export default IndexModel



