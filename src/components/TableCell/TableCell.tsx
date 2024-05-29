import React from 'react'
import { observer } from 'mobx-react-lite'

interface ITicket {
  cell: string | number
  key: number
}

export const TableCell = observer((props: ITicket) => {
  const { cell, key } = props

  return <td key={key}>{cell}</td>
})
