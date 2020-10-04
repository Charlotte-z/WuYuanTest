import React, { useEffect, useState } from 'react'
import { observable, computed, autorun, decorate } from "mobx";
import {observer} from "mobx-react"

 @observer class Timer extends React.Component {
//   @observable secondsPassed = 0
   secondsPassed = 0

  componentWillMount() {
      setInterval(() => {
          this.secondsPassed++
      }, 1000)
  }
  
  render() {
      return (<span>自动更新 { this.secondsPassed } </span> )
  }
}

export default decorate(Timer, {
    secondsPassed: observable
})



