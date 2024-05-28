import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.scss'

export const Home = () => {
  return (
    <div className={styles.content}>
      <h1>About</h1>
      <p>This is an application that shows cryptocurrency quotes.</p>
      <nav>
        <Link to="/quotes?tab=0">Quotes 1</Link>
        <Link to="/quotes?tab=1">Quotes 2</Link>
      </nav>
    </div>
  )
}
