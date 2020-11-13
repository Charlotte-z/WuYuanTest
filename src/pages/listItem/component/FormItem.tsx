import React from 'react'
import styles from '../style/FormItem.less'
import Header from './Header'
import Item from './Item'

const FormItem = () => {
    return (
        <div className={styles.bg}>
            <div className={styles.FormWrapper}>
                <Header title="ToDoList"/>
                <Item/>
            </div>
        </div>
    )
}

export default FormItem