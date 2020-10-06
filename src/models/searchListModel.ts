import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
import {getSearchList} from '@/services/searchList'

const SearchListModel = {
    namespace:'SearchListModel',
    state:{
        list:[]
    },
    reducers:{ // 更新组件的state
       setSearchList(state, action){    
        // console.log(action.payload.res);
            
        return {
            ...state,
            list:action.payload.res
          }
       }
    },
    effects:{
        // call是调用异步函数的，put是调用同步函数
        *getSearchList(action, { put, call }){
            if(action.payload.term) {
                const res = yield call(getSearchList, action.payload.term)
                yield put({
                    type:'setSearchList',
                    payload:{res}
                })
            }else{
                yield put({
                    type:'setSearchList',
                    payload:{res:[]}
                }) 
            }
        }
    }
}

export default SearchListModel



