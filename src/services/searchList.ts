import { request } from 'umi'

export const getSearchList = (value) => {
   return new Promise(resolve => {
        request(`https://s.search.bilibili.com/main/suggest?func=suggest&suggest_type=accurate&sub_type=tag&main_ver=v1&highlight=&userid=23988726&bangumi_acc_num=1&special_acc_num=1&topic_acc_num=1&upuser_acc_num=3&tag_num=10&special_num=10&bangumi_num=10&upuser_num=3&term=${value}&rnd=0.16522722804949241`).then(res => {
            if(res.code === 0){
                resolve({tag: res?.result?.tag ?? []})
            }
        })
   })
}