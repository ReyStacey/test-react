import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Loader } from '../Loader'
import { Header } from '../Header'
import { NavLink } from 'react-router-dom'
import { LINKS } from '../../config/routes'

import styles from './Layout.module.scss'

export const Layout = () => {
  return (
    <>
      <Header>
        {LINKS.map((link, index) => (
          <NavLink to={link.to} key={index}>
            {link.name}
          </NavLink>
        ))}
      </Header>
      <Suspense fallback={<Loader />}>
        <main className={styles.container}>
          <Outlet />
        </main>
      </Suspense>
    </>
  )
}
