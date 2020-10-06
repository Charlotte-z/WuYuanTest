import React, { useEffect, useState } from 'react'
import { observable, computed, autorun, decorate } from "mobx";
import {observer} from "mobx-react"

@observer class Timer extends React.Component {
   secondsPassed = 0
   time = 123

  componentWillMount() {
      setInterval(() => {
          this.secondsPassed++
          this.time+=2
      }, 1000)
  }
  
  render() {
      return (<span>自动更新 { this.secondsPassed },{this.time} </span> )
  }
}

// 你穿入一个组件，他会帮你拼成一个监视组件
export default decorate(Timer, { // 是否立即进行更新
    secondsPassed: observable
})



