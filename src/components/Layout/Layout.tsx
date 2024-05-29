import { Suspense } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import styles from './Layout.module.scss'
import { Loader } from '../Loader'

export const Layout = () => {
  return (
    <>
      <header>
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/quotes/0"> Quotes A </NavLink>
        <NavLink to="/quotes/1"> Quotes B </NavLink>
      </header>
      <Suspense fallback={<Loader />}>
        <main className={styles.container}>
          <Outlet />
        </main>
      </Suspense>
    </>
  )
}
