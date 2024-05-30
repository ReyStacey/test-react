import { useState, useEffect } from 'react'
import { observer } from 'mobx-react-lite'

import styles from './TableCell.module.scss'

interface ITicketItem {
  item: string | number
}

export const TableCell = observer(({ item }: ITicketItem) => {
  const [prevItem, setPrevItem] = useState<string | number>(item)
  const [className, setClassName] = useState<string>()

  useEffect(() => {
    if (prevItem !== item) {
      const newClassName = item > prevItem ? styles.increase : styles.decrease
      setClassName(newClassName)
      const timeout = setTimeout(() => setClassName(''), 3000)
      setPrevItem(item)

      return () => clearTimeout(timeout)
    }
  }, [item])

  return <td className={className}> {item}</td>
})
