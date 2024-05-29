import React from 'react'
import { ITickerData } from '../../api/ticker'
import { TableRow } from '../TableRow'
import { observer } from 'mobx-react-lite'
import { Modal } from '../Modal'
import styles from './Table.module.scss'
import { Notification } from '../Notification'
import { Loader } from '../Loader'

interface ITableProps {
  data: ITickerData[]
  error: string | null
  names: string[]
  isLoading: boolean
  label?: string
  id?: number | string
}

export const Table = observer((props: ITableProps) => {
  const filteredData: ITickerData[] = props.data.map((item) => ({
    symbol: item.symbol,
    price: item.price,
    bestAskSize: item.bestAskSize,
    bestAskPrice: item.bestAskPrice,
    bestBidPrice: item.bestBidPrice,
  }))

  const hasData = filteredData.length > 0

  return (
    <div>
      <Notification notificationText={props.error} />
      {!hasData && props.isLoading ? (
        <Loader />
      ) : (
        <table className={styles.table}>
          {hasData && (
            <thead>
              <tr>
                {props.names.map((itemName) => (
                  <th key={itemName}>{itemName}</th>
                ))}
              </tr>
            </thead>
          )}
          <tbody>
            {filteredData.map((item, index) => (
              <TableRow key={index} item={item} />
            ))}
          </tbody>
        </table>
      )}
      <Modal />
    </div>
  )
})
