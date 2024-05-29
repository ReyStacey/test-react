import React from 'react'
import { TableRow } from '../TableRow'
import { observer } from 'mobx-react-lite'
import { ITickerData } from '../../api/ticker'

interface ITableBody {
  data: ITickerData[]
}

export const TableBody = observer(({ data }: ITableBody) => {
  return (
    <tbody>
      {data.map((item) => (
        <TableRow key={item.symbol} item={item} />
      ))}
    </tbody>
  )
})
