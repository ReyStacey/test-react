import React, { ReactElement, useState } from 'react'
import styles from './Tabs.module.scss'
import { useNavigate, useLocation } from 'react-router-dom'

interface ITabsProps {
  children: ReactElement[]
  setSelectedActiveTab: (selectedActiveTab: number) => void
}

export const Tabs = ({ children, setSelectedActiveTab }: ITabsProps) => {
  const navigate = useNavigate()
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const initialTab = parseInt(searchParams.get('tab') || '0', 10)
  const [activeTab, setActiveTab] = useState(initialTab)

  const handleClick = (newActiveTab: number) => {
    setActiveTab(newActiveTab)
    setSelectedActiveTab(newActiveTab)
    navigate(`?tab=${newActiveTab}`)
  }

  return (
    <div>
      <ul className={styles.tabs}>
        {children.map((tab) => {
          const label = tab.props.label
          const id = tab.props.id
          return (
            <li
              key={label}
              className={id === activeTab ? styles.active : ''}
              onClick={() => handleClick(id)}
            >
              {label}
            </li>
          )
        })}
      </ul>

      {children.map((child) => {
        if (child.props.id === activeTab)
          return (
            <div key={child.props.label} className={styles.content}>
              {child}
            </div>
          )
        return null
      })}
    </div>
  )
}
