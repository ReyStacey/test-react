import { useMemo } from 'react'
import { ITickerData } from '../../api/ticker'
import { observer } from 'mobx-react-lite'
import { Modal } from '../Modal'
import { Notification } from '../Notification'
import { Loader } from '../Loader'
import { TableBody } from '../TableBody'
import { TableHead } from '../TableHead'

import styles from './Table.module.scss'

interface ITableProps {
  data: ITickerData[]
  error: string | null
  names: string[]
  isLoading: boolean
  label?: string
  id?: number | string
}

export const Table = observer((props: ITableProps) => {
  const hasData = useMemo(() => props.data.length > 0, [props.data])

  return (
    <>
      <Notification notificationText={props.error} />
      {!hasData && props.isLoading ? (
        <Loader />
      ) : (
        hasData && (
          <table className={styles.table}>
            <TableHead names={props.names} />
            <TableBody data={props.data} />
          </table>
        )
      )}
      <Modal />
    </>
  )
})
