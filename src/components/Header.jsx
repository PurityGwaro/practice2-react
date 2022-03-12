import React from 'react'
import styles from '../styling.module.css'
import logo from '../images/favicon.ico'

export default function Header() {
  return (
    <div className={styles.headerAll}>
        <div className={styles.header1}>
        {/*another way to work with images is to import them as a path and set them to a 
        unique name that will be used to call them during the project.
        Like below: the mage is imported from the path as logo*/}
        <img src={logo} alt='react logo' className={styles.logo}/>
        <h2 className={styles.logoName}>ReactFacts</h2>
        </div>
        <h2 className={styles.header2}>React Course - Project 1</h2>
    </div>
  )
}
