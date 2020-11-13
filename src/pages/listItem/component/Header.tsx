import React from 'react'
import styles from '../style/Header.less'

export default (props:{title: string}) => <h1 className={styles.header}>{props.title}</h1>