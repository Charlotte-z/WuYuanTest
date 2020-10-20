import React from 'react'
import * as defaultDirectives from './directives'

const reactCreateElement = React.createElement
const directives = new Map()

/**
 * 过滤筛选器，将指令筛选掉
 * @param {*} value props 
 * @param {*} keys  ['r-if', 'r-class'......], 每个props的指令集合
 */
const omit = (value: (React.InputHTMLAttributes<HTMLInputElement> & React.ClassAttributes<HTMLInputElement>) | { [s: string]: unknown } | ArrayLike<unknown>,
 keys: string | string[]) => {
  if (!keys.length) { // 基本不会出现这个问题，因为出现了会直接return，这里主要是为了逻辑完善
    return {...value}
  }
  return Object.entries(value).reduce((pre, cur) => { // 拆分props
    if (keys.includes(cur[0])) {
      return pre
    }
    return {
      ...pre,
      [cur[0]]: cur[1],
    }
  }, {})
}

/**
 * 校验指令名称及去重
 * @param name
 */
const checkDirective = (name: string) => {
  if (directives.has(name)) {
    console.error(`The directive name: ${name} is registered!!!`)
    return false
  }
  if (!/^[a-zA-Z]+[a-zA-Z\-]?[a-zA-Z]+$/.test(name)) {
    console.error(`The directive name: ${name} is invalid!!!`)
    return false
  }
  return true
}

/**
 * 检查指令配置
 * @param options
 */
const checkOptions = (options: { install: any } | null) => {
  if (typeof options !== 'object' || options === null || Array.isArray(options)) {
    console.error(`The directive options must be object, current options: ${options}`)
    return false
  }
  if (typeof options.install !== 'function') {
    console.error(`The directive options param install must be function, current install: ${options.install}`)
    return false
  }
  return true
}

/**
 * 获取指令
 * {name: 'r-if', directive:'if', value:true}
 * @param props
 */
const getDirectives = (props: (React.InputHTMLAttributes<HTMLInputElement> & React.ClassAttributes<HTMLInputElement>) | null | undefined) => 
  (Object.keys(props || {}).filter(name => /^r-/.test(name))
    .map(name => ({name,directive: name.substring(2),value: props[name]})))
    

/**
 * 定义注册指令
 * @param name-指令名称
 * @param options-指令配置
 */
export const defineDirective = (name, options) => {
  if (!checkDirective(name) || !checkOptions((options))) {
    return false
  }
  
  directives.set(name, {
    priority: 1000,
    ...options,
  })
}

React.createElement = (type: string, 
  props: (React.InputHTMLAttributes<HTMLInputElement> & React.ClassAttributes<HTMLInputElement>) | null | undefined, 
  ...childrens: any):any => {
  const everyDirectives = getDirectives(props)
  const list = everyDirectives.reduce((pre, cur) => {
    const options = directives.get(cur.directive)
    if (!options) {
      return pre
    }
    return [
      ...pre,
      {
        ...cur,
        options,
      },
    ]
  }, []).sort((a: { priority: number }, b: { priority: number }):Number => a.priority - b.priority) // 优先级排序，虽然目前都是1000，可开放自行更改
  if (!list.length) { // 没有指令时放行
    return reactCreateElement(type, props, ...childrens)
  }
  let otherProps = omit(props || {}, list.map((item: { name: string }) => item.name)) // 组成name筛选掉指令
  const result = list.every((item: { options: { install: (arg0: { value: any; props: any }) => any }; value: any }) => {
    const curRes = item.options.install({
      value: item.value,
      props: otherProps,
    })
    if (curRes === null) {
      return false
    }
    otherProps = Object.assign({}, otherProps, curRes)
    return true
  })
  if (!result) {
    return null
  }
  return reactCreateElement(type, otherProps, ...childrens)
}

/**
 * @modify 林间有风Lin
 * @modifyDesc 简化语法
 * 提供给内部使用转换
 */
Object.entries(defaultDirectives).forEach(([name, options]) => {
  defineDirective(name.replace(/^r([A-Z])/, (_, val) => val.toLowerCase()), options)
})

