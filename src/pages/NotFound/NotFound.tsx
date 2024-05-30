import { NavLink } from 'react-router-dom'

import styles from './NotFound.module.scss'

const NotFound = () => {
  return (
    <div className={styles.text}>
      This page doen't not exist. Go <NavLink to="/"> home</NavLink>
    </div>
  )
}

export default NotFound
