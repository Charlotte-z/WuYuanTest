import {request, Router} from 'umi'

const codeMessage = {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
};  

const methods = 'get post head put delete connect options trace GET POST HEAD PUT DELETE CONNECT OPTIONS TRACE'

const errorHandler = function(error:any) {
    const codeMap = {
      '021': '发生错误啦',
      '022': '发生大大大大错误啦',
      // ....
    };
    if (error.response) {
      // 请求已发送但服务端返回状态码非 2xx 的响应
      console.log(error.response.status);
      console.log(error.response.headers);
      console.log(error.data);
      console.log(error.request);
    } else {
      // 请求初始化时出错或者没有响应返回的异常
      console.log(error.message);
    }
  
    throw error; // 如果throw. 错误将继续抛出.
  
    // 如果return, 则将值作为返回. 'return;' 相当于return undefined, 在处理结果时判断response是否有值即可.
    // return {some: 'data'};
  };


const SERVER_URL = 'http://localhost:3000'

const judgeObj = (ele: object[]) => {
    ele.forEach(item => {
        if(item && (typeof item === 'object' && Array.isArray(item))){
            const s = Object.prototype.toString.call(item)
            throw new TypeError(`参数${s}传递不正确 检查你传递的参数`)
        } 
    })
}

const judgeMethod = (method: string) => { 
    if(!methods.split(' ').includes(method)) 
        throw new TypeError(`参数${method} 不符合HTTP规范 检查你的Method参数`)
}

// req('/api/get', {method:'post',c:'c'})
const checkUrlAndParams = (url:string, params:object, method:string, headers:object) => {
    if(!(/^\//.test(url))) throw new Error(`${url}请求格式错误，要求如下例子：\r\n \t\t\t /api/users`)
    judgeMethod(method)
    judgeObj([params, headers])
}

const req = (url:string, params:object = {}, method:string = 'GET', headers:object = {}) => {
    checkUrlAndParams(url, params, method, headers) // 错误处理
    
    const options = {
        headers,
        method, // 默认给一个GET请求
        [`${method === 'get' || method === 'GET' ? 'params' : 'data'}`]:params,                 // 传参
        skipErrorHandler:false          // 不跳过错误处理
    }

    return new Promise((resolve, reject) => {
        request(`${SERVER_URL}${url}`,options).then(res => {
            const {code} = res

            if(code === 0) {
                // 其他操作
                resolve(res)
            }else{ // 服务器报错
                reject(res)
            }
        }).catch(error => {
            return errorHandler(error);
        })
    })
}

export { req }

