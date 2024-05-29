import React from 'react'
import { observer } from 'mobx-react-lite'

interface ITicket {
  cell: string | number
}

export const TableCell = observer((props: ITicket) => {
  const { cell } = props

  return <td>{cell}</td>
})
