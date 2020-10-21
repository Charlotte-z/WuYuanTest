import React from 'react'
import styles from './animation.less'

export default (props) => (
    <>
        <div className={`${styles.spinner} ${props.middle ? styles.center : ''}`}>
            <div className={styles.rect1}></div>
            <div className={styles.rect2}></div>
            <div className={styles.rect3}></div>
            <div className={styles.rect4}></div>
            <div className={styles.rect5}></div>
        </div>
    </>
)