import React from 'react'
import styles from '../styling.module.css'

export default function Main() {
  return (
    <div className={styles.main}>
        <h1 className={styles.heading}>Fun Facts about React</h1>
        <ul>
            <li>was first released in 2013</li>
            <li>was originally created by Jordan Walke</li>
            <li>Has well over 10oK starts on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including <br/> mobile apps</li>
        </ul>
    </div>
  )
}
